import React, {Component} from 'react';
import { Authenticator, withAuthenticator, SignIn } from 'aws-amplify-react-native';
import {Text, Linking, Button, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Font, ImagePicker, Permissions, Constants } from 'expo';
import Amplify, { Auth, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import * as queries from './src/graphql/queries.js';
import * as mutations from './src/graphql/mutations.js';
import * as subscriptions from './src/graphql/subscriptions.js';
var ss = require('./styles.js');
import awsmobile from './aws-exports.js';
Amplify.configure(awsmobile);

class Home extends Component {
  static navigationOptions = {
    title: 'Initiate Profile',
  };
  constructor(props) {
    super(props);
    this.ready = false;

    this.uuid = Constants.deviceId;
    this.state = {
        frst: '',
        lst: '',
        disp: '',
        photo: '',
    };
    this.readyToGo = this.readyToGo.bind(this);
  };
  componentWillMount(){
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(
      user => {
        console.log(user.username);
        this.setState({disp: user.username})
      }
    ).catch(err => console.log(err));
  };

  componentDidMount() {

  };

  async readyToGo(){
    // add the users details to db
    const userDetails = {
      id: this.uuid,
      first: this.state.frst,
      last: this.state.lst,
      nickname: this.state.disp,
    };
    try {
      const newUser = await API.graphql(graphqlOperation(mutations.updateSusuer, {input: userDetails}));
      console.log(newUser);
      //nav to next page
      //this.props.navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
    //////////////////////
  };

  handleChoosePhoto = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ photo: result.uri });
    }
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log('Got permissions');
  };

  render(){
    if (this.state.frst.length > 1 && this.state.lst.length > 1 && this.state.disp.length > 1){
      console.log('We be ready to Go');
      this.ready = true;
    } else {
      this.ready = false;
    }
    return(
      <View style={{flex: 2, backgroundColor: 'black'}}>
      <Text style={ss.homeTitle}> Start your
        <Text style={{color: 'yellow',}}> Profile</Text>
      </Text>
      <View style={ss.homeCon}>
          <Text style={ss.homeSubTitles}>Legal Firstname:</Text>
          <TextInput
            style={ss.homeTextinput}
            placeholder={this.state.frst}
            onChangeText={(frst) => this.setState({frst})}
            value={this.state.frst}
          />
        <Text style={ss.homeSubTitles}>Legal Lastname:</Text>
        <TextInput
          style={ss.homeTextinput}
          onChangeText={(lst) => this.setState({lst})}
          value={this.state.lst}
        />
        <Text style={ss.homeSubTitles}>Display Name:</Text>
        <TextInput
          style={ss.homeTextinput}
          onChangeText={(disp) => this.setState({disp})}
          value={this.state.disp}
        />
      </View>
          {
            this.ready &&
            <View style={ss.lcupCont}>
              <TouchableOpacity onPress={this.handleChoosePhoto}>
                <Text style={ss.lcupLabel}>Click Here to Upload Valid Photo ID</Text>
                <Image
                  style={ss.lcupbutton}
                  source={require('./assets/uploadID.png')}
                />
              </TouchableOpacity>
            </View>
          }
        </View>
    )
  }
};

//This line turns on aws forced auth to load this screen
export default withAuthenticator(Home);
//export default Home;
