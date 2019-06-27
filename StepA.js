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
      susuTitle: '',

    };
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
  };

  handleBack(){
    this.props.navigation.dispatch(backAction);
  };

  // thi
  handleNext(){
    this.props.navigation.dispatch(backAction);
  };

  componentWillMount (){

  };
  componentDidMount (){
    console.log("Starting Step One...");

  };

  render(){

    return(
      <View style={ss.naVcontainer}>
        <View style={ss.suBc}>
          <Text style={ss.suTitle}>
            What do you want to call this SuSu?{"\n"}
          </Text>
          <TextInput
            style={ss.suTextinput}
            onChangeText={(susuTitle) => this.setState({susuTitle})}
            value={this.state.susuTitle}
          />
        </View>
        <TouchableOpacity style={ss.goBack} onPress={this.handleBack}>
          <Text style={ss.createSu}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ss.goNext} onPress={this.handleNext}>
          <Text style={ss.createSu}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
};

export default StepOne;
