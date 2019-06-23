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


class BuildSuSu extends Component {
  static navigationOptions = {
    title: 'Create a New SuSu',
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  componentWillMount(){
    //1) First we should see if the user currently authenticated has any
    //invites to SuSus
    // if invited, send them to the existing susu page

  };

  componentDidMount(){

  };

  render(){
    return(
      <View style={{flex: 2, backgroundColor: 'blue'}}>
        <Button
          onPress={this.handleAnalyticsClick}
          title="Accept"
          color='lightgreen'
          accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }
};

//This line turns on aws forced auth to load this screen
export default withAuthenticator(BuildSuSu);
//export default NewGuy;
