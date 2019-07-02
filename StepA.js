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
    this.clearInvitation = this.clearInvitation.bind(this);
  };

  clearInvitation = i => {

    const list = this.state.invitees.filter( (item, index) => i !== index );
    console.log(list);
    this.setState({invitees: list});
    this.setState({susuEmail: ''});
  };
    //set
    //this.setState({susuEmail: ''});
  handleBack(){
    this.props.navigation.dispatch(backAction);
  };

  handleNext(){
    // Collect all the shits
    this.props.navigation.dispatch(backAction);
  };

  switchStyles(){
    if (this.state.susuTitle){
      this.setState(prevState => ({
        check: !prevState.check
      }));
    }
  };

  addinvitee(){
    //add email address to invitees list
    console.log("adding an invitee");
    let bla = this.state.susuEmail;

    this.setState(prevState => ({
      invitees: [...prevState.invitees, bla]
    }));
    this.setState({susuEmail: ''});

  };

  componentWillMount (){

  };

  componentDidMount (){
    console.log("Starting Step One...");

  };

  componentDidUpdate() {

  };


  render(){

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let title_display;
    if (this.state.check) {
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
        {
          this.state.invitees.length < 7 ? (
            <View>
            {
              this.state.invitees.length < 1 ? (
                <View>
                  <Text style={ss.suETitle}>
                    You cannot Susu alone.{'\n'}
                    {'       '}Invite Someone:
                  </Text>
                </View>
              ) : (
                  <Text style={ss.suETitle}>
                    {' '}Invite Someone else:
                  </Text>
              )
            }
            <TextInput
              style={ss.suETextinput}
              placeholder="example@example.com"
              placeholderTextColor="grey"
              onChangeText={(susuEmail) => this.setState({susuEmail})}
              value={this.state.susuEmail}
            />
            </View>
        ) : (
          <Text style={ss.suETitle}>
              Your Su Su is limited to a maximum of{'\n'}
              8 members at this time
          </Text>
        )
        }

          {
            this.state.susuEmail ? (
              this.state.susuEmail.match(regex) ? (
              //this.state.susuEmail.includes('@') ? (
              //  this.state.susuEmail.includes('.') ? (
                  this.state.invitees.length < 7 ? (
                    <TouchableOpacity style={ss.inviteButton} onPress={this.addinvitee}>
                      <Text style={ss.createSu}>Send</Text>
                    </TouchableOpacity>
                  ) : null
              //  ) : null
              ) : null
            ): null
          }
          {
            this.state.invitees.length ? (
                this.state.invitees.map((item, index) => (
                  //console.log(index+" "+item),
                  <TouchableOpacity style={ss.invitee} onPress={() => this.clearInvitation(index)}>
                    <Text style={ss.inviteeText}>{item}</Text>
                    <Text style={{color: 'grey', fontSize: 12}}>(x)</Text>
                  </TouchableOpacity>
                ))
            ) : null
          }




        <TouchableOpacity style={ss.goBack} onPress={this.handleBack}>
          <Text style={ss.createSu}>Go Back</Text>
        </TouchableOpacity>
        {
          this.state.susuTitle && this.state.invitees ? (

              <TouchableOpacity style={ss.goNext} onPress={this.handleNext}>
                <Text style={ss.createSu}>Next</Text>
              </TouchableOpacity>

          ) : null
        }


      </View>
    );
  }
};

export default StepOne;
