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
      check: true,
      invitees: [],
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.switchStyles = this.switchStyles.bind(this);
    this.addinvitee = this.addinvitee.bind(this);
  };

  handleBack(){
    this.props.navigation.dispatch(backAction);
  };

  // thi
  handleNext(){
    this.props.navigation.dispatch(backAction);
  };

  switchStyles(){
    this.setState(prevState => ({
      check: !prevState.check
    }));
  };
  addinvitee(){
    //add email address to invitees list

    //For each item in the invitees list, make a little Button that sends its value to this.state.susuEmail and removes it from the list -->
  };
  componentWillMount (){

  };
  componentDidMount (){
    console.log("Starting Step One...");

  };

  render(){
    // This first conditional is for switching the title to
    //a different style when done
    let title_display;
    if (this.state.check){
      title_display = <View>
                <Text style={ss.suTitle}>
                  What do you want to call this Su Su?
                </Text>
                <TextInput
                  style={ss.suTextinput}
                  onChangeText={(susuTitle) => this.setState({susuTitle})}
                  value={this.state.susuTitle}
                  onBlur={this.switchStyles}
                />
                </View>;
    } else {
      title_display = <View style={{marginTop: '20%',}}>
                  <TouchableOpacity onPress={this.switchStyles}>
                  <Text style={ss.sulilSubTitle}>Your $u$u!</Text>
                  <Text style={ss.sulilTitle}>
                    <Text style={{color: 'green',}}>-</Text>
                    {this.state.susuTitle}
                    <Text style={{color: 'green',}}>-</Text>
                  </Text>
                  </TouchableOpacity>
                </View>;
    }


    return(
      <View style={ss.naVcontainer}>

        {title_display}

        <Text style={ss.suETitle}>
            You cannot Susu alone.{'\n'}
            Invite Someone:
          </Text>
          <TextInput
            style={ss.suETextinput}
            placeholder="example@example.com"
            placeholderTextColor="grey"
            onChangeText={(susuEmail) => this.setState({susuEmail})}
            value={this.state.susuEmail}
            onBlur={this.addinvitee}
          />
          {
            this.state.susuEmail ? (
              this.state.susuEmail.includes('@') ? (
                this.state.susuEmail.includes('.') ? (
                  <TouchableOpacity style={ss.inviteButton} onPress={this.sendInvite}>
                    <Text style={ss.createSu}>Send</Text>
                  </TouchableOpacity>
                ) : null
              ) : null
            ): null
          }





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
