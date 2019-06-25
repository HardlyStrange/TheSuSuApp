import React, {Component} from 'react';
import { Authenticator, withAuthenticator, SignIn } from 'aws-amplify-react-native';
import {Text, Linking, Button, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Font, ImagePicker, Permissions, Constants } from 'expo';
import {NavigationActions} from 'react-navigation';
import Amplify, { Auth, Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import * as mime from 'react-native-mime-types';
import * as queries from './src/graphql/queries.js';
import * as mutations from './src/graphql/mutations.js';
import * as subscriptions from './src/graphql/subscriptions.js';
var ss = require('./styles.js');
import awsmobile from './aws-exports.js';
Amplify.configure(awsmobile);

const backAction = NavigationActions.back();

class StepOne extends Component {
  static navigationOptions = {
    title: 'Creating a SuSu Step 1',
  };
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(){
    this.props.navigation.dispatch(backAction);
  }

  componentWillMount (){

  };
  componentDidMount (){
    console.log("Starting Step One...");

  };

  render(){

    return(
      <View style={ss.container}>
      <TouchableOpacity style={ss.createSuBox} onPress={this.handleClick}>
        <Text style={ss.createSu}>Go Back</Text>
      </TouchableOpacity>
        <Text style={ss.invnone}>{this.state.username}, This will be complicated</Text>
        <TouchableOpacity style={ss.createSuBox} onPress={this.handleClick}>
          <Text style={ss.createSu}>More options</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default withAuthenticator(StepOne);
