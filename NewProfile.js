import React, {Component} from 'react';
import { Authenticator, withAuthenticator, SignIn } from 'aws-amplify-react-native';
import {Text, Linking, Button, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Font, ImagePicker, Permissions, Constants } from 'expo';
import Amplify, { Auth, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import * as mime from 'react-native-mime-types';
import * as queries from './src/graphql/queries.js';
import * as mutations from './src/graphql/mutations.js';
import * as subscriptions from './src/graphql/subscriptions.js';
var ss = require('./styles.js');
import awsmobile from './aws-exports.js';
Amplify.configure(awsmobile);


class Defaultphotobutton extends Component {
  render() {
    return(
      <View>
        <Text style={ss.lcupLabel}>
              Click Here to Upload Valid Photo ID
        </Text>
           <Image style={ss.lcupbutton}
             source={require('./assets/uploadID.png')}
           />
      </View>
       )
  }
};

class NewGuy extends Component {
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
        photo: null,
        legalid: null,
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
      username: this.state.disp,
      legalid: this.state.legalid,
    };
    try {
      const newUser = await API.graphql(graphqlOperation(mutations.updateSusuer, {input: userDetails}));
      console.log('We upated this users details, here is the response:');
      console.log(newUser);
      //nav to next page
      //this.props.navigation.navigate('Login');
    } catch (err) {
      console.log("We Tried to upate the susuer object and got this error:");
      console.log(err);
    }
    //////////////////////
  };

  handleChoosePhoto = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
                                 //launchCameraAsync
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({photo: result.uri});
      const fileType = mime.lookup(result.uri);
      console.log(fileType);
      const access = { level: "private", contentType: fileType, };
        console.log("the results of the storage:")
      fetch(result.uri).then(response => {
        response.blob()
          .then(blob => {
            Storage.put(`${this.state.frst}_${this.state.lst}_legalID`, blob, access)
              .then(
                response => console.log(response.key)
              ).then(
                 this.setState({legalid: `${this.state.frst}_${this.state.lst}_legalID`})
              )
              .catch(err => console.log(err));
      //set new info to graph mutations.
      //send user to next screen
          });
      });
  };
}

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
    let button;
    if (this.state.photo){
      button = <View>
                <Image style={ss.lcupproc}
                   source={{uri: this.state.photo}}
                 />
               <Button style={ss.lcupprocbut} onPress={this.readyToGo} title="Proceed"/>
               </View>;
    } else {
      button = <Defaultphotobutton />;
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
                {button}
              </TouchableOpacity>
            </View>
          }
        </View>
    )
  }
};

//This line turns on aws forced auth to load this screen
export default withAuthenticator(NewGuy);
//export default NewGuy;
