import React, {Component} from 'react';
import { Authenticator, withAuthenticator, SignIn } from 'aws-amplify-react-native';
import {Text, Linking, Button, TextInput, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Font, ImagePicker, Permissions, Constants } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
      username: '',
      daemail: '',
    };
    this.handleClick = this.handleClick.bind(this);
  };

  componentWillMount(){
    //1) First we should see if the user currently authenticated has any
    //invites to SuSus
    // if invited, send them to the existing susu page
    console.log("We're gonna see if this User has been invited to any SuSus");
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(
      user => {
        console.log(user.attributes.email);
        this.setState({daemail: user.attributes.email});
        this.setState({username: user.username});
      }
    ).catch(err => console.log(err));

  };

  componentDidMount(){

  };
  handleClick(){
    console.log("Creating a SuSu, Nativate to Step One");
    this.props.navigation.navigate('StepA');
  };

  render(){
    return(
      <View style={ss.container}>
        <Text style={ss.invnone}>{this.state.username}, you have no pending invites to</Text>
        <Text style={ss.invnone}>
          <Text style={{color: 'orange'}}>{this.state.daemail}</Text>
        </Text>
        <TouchableOpacity style={ss.createSuBox} onPress={this.handleClick}>
          <Text style={ss.createSu}>Create a SuSu</Text>
        </TouchableOpacity>
      </View>
    );
  }
};


//This line turns on aws forced auth to load this screen
export default withAuthenticator(BuildSuSu);
//export default NewGuy;
