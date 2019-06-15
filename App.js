import React, {Component} from 'react';
import {Text, Linking, Button, TextInput, ScrollView, View} from 'react-native';
import { Font, Constants } from 'expo';
import Amplify, { Auth, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import awsmobile from './aws-exports.js';
import {atxt} from './assets/agreementText.js';
import * as queries from './src/graphql/queries.js';
import * as mutations from './src/graphql/mutations.js';
import * as subscriptions from './src/graphql/subscriptions.js';
var ss = require('./styles.js');
import Home from './Home.js';
//
Amplify.configure(awsmobile);

////////// Accept agreement page //->
class AcceptPage extends Component<Props> {
  //static navigationOptions = {
  //  title: 'Welcome',
  //};
  constructor(props) {
    super(props);
    this.uuid = Constants.deviceId;
    this.handleAnalyticsClick = this.handleAnalyticsClick.bind(this);
    this.onDisagree = this.onDisagree.bind(this);
    this.state = {
      agreetxt: atxt,
      fontLoaded: false,
      apiResponse: null,
    };
  }

  componentWillMount() {
    this.knownUser();
  };

  async componentDidMount() {
    await Font.loadAsync({
      'vincHand': require('./assets/fonts/vincHand.ttf'),
    });
    this.setState({ fontLoaded: true });
  };

  handleAnalyticsClick() {
    Analytics.record('New SuSu App User').then( (evt) => {
      const url = 'https://'+awsmobile.aws_project_region+'.console.aws.amazon.com/pinpoint/home/?region='+awsmobile.aws_project_region+'#/apps/'+awsmobile.aws_mobile_analytics_app_id+'/analytics/events';
      let result = (
              <View>
                <Text onPress={() => Linking.openURL(url)}/>
              </View>
        );
     });
       console.log("Sent analytics click Accept");
       //add new user to db?
       this.saveUUID();
       //navigate to login page?
       this.props.navigation.navigate('Login');
  };

  async knownUser(){
    //const allSusuers = await API.graphql(graphqlOperation(queries.listSusuers));
    //console.log(allSusuers);
    try {
      const knowU = await API.graphql(graphqlOperation(queries.getSusuer, {id: this.uuid}));
      console.log(knowU);

      //Use this conditional to send them to create susu profile or to dashboard
      //if they already have one
      if (knowU.data.getSusuer.id){
        console.log('User Found');
        console.log(knowU.data.getSusuer.id);
        this.props.navigation.navigate('Login');
      } else {
        console.log("Unkown Device (new user?)");
        console.log(knowU.data.susuer.id);
      }
    } catch (err) {
      console.log(err);
    };

  };

  onDisagree(){
    const byebye = 'https:\/\/news.google.com';
    Linking.openURL(byebye);
  };

  async saveUUID(){
    const dateTime = Date.now();
    this.timestamp = Math.floor(dateTime / 1000);
    console.log(this.timestamp);
    // Mutation
    const userDetails = {
      id: this.uuid,
      joined: this.timestamp
    };
    try {
      const newUser = await API.graphql(graphqlOperation(mutations.createSusuer, {input: userDetails}));
      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
  }
/////////////////////render
  render() {
    return (
      <View style={ss.container}>

      {
        this.state.fontLoaded ? (
          <Text style={ss.apptitle}>
            SuSu
          </Text>
          ) : null
      }
        <ScrollView contentContainerStyle={ss.contentContainer}>
        <TextInput
              style={ss.regular}
              value={this.state.agreetxt}
              multiline={true}
              onChangeText={(value) => {this.setState({agreetxt: value})}}
              underlineColorAndroid={'transparent'}
              editable={false}
          />
        </ScrollView>
        <View style={ss.agreeButtons}>
          <Button
            onPress={this.handleAnalyticsClick}
            title="Accept"
            color='lightgreen'
            accessibilityLabel="Learn more about this purple button"
            />
          <Button
            onPress={this.onDisagree}
            title="Disagree"
            color='#cb4154'
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Text style={{marginBottom: '10%', color: 'blue'}}>This device: {this.uuid}</Text>
      </View>
    );
  }
}
///////////<---
// Main ///////->
const MainNavigator = createStackNavigator(
  {
    Accept: AcceptPage,
    Login: Home
    
  },

  {headerMode: 'none', mode: 'modal'},
  {initialRouteName: 'Accept'},

);
const App = createAppContainer(MainNavigator);
export default App;
//export default withAuthenticator(App);
///////////<-
