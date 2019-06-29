import { StyleSheet } from 'react-native';
var React = require('react-native');


module.exports = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  apptitle: {
    color: 'crimson',
    fontFamily: 'vincHand',
    fontSize: 64,
    top: '5%',
    left: '68%'
  },
  regular: {
    fontFamily: 'Cochin',
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  contentContainer: {
    flex: .8,
    //paddingTop: 80,
    top: '10%',
    //justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    width: '80%',
    alignSelf: 'center',
  },
  agreeButtons:{
    flex: .4,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignSelf: 'center',
    fontSize: 52,
    fontWeight: 'bold',
    width: '60%',
  },
  SignInButton:{
    backgroundColor: 'red',
    borderColor: 'yellow',
  },
  homeTitle: {
    flex: .2,
    //zIndex: 2,
    //position: 'relative',
    color: 'crimson',
    fontFamily: 'vincHand',
    fontSize: 40,
    top: '9%',
    //left: '60%',
  },
  homeCon: {
    flex: .6,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    //marginTop: '-25%',
  },
  homeSubTitles: {
    color: 'crimson',
    //fontFamily: 'vincHand',
    fontFamily: 'Cochin',
    fontSize: 30,
    marginLeft: '5%',
    paddingBottom: 5,
    //marginTop: '-20%',
    //marginBottom: '-25%',
  },
  homeTextinput: {
    color: 'pink',
    fontSize: 24,
    fontFamily: 'Cochin',
    height: 60,
    borderColor: '#cb4154',
    borderBottomWidth: 2,
    width: '70%',
    marginLeft: '5%',
    //marginLeft: '5%',
    marginTop: '-20%',
  },
  lcupCont: {
    flex: .1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  lcupLabel: {
    zIndex: 2,
    fontSize: 20,
    color: 'pink',
    backgroundColor: 'black',
    fontFamily: 'Cochin',
    padding: 2,
    marginBottom: -100,
    alignSelf: 'center',
  },
  lcupbutton: {
    zIndex: 1,
    opacity: .4,
    borderColor: 'pink',
    borderWidth: 3,
    width: '100%',
    height: '80%',
    padding: 100,
    alignSelf: 'center',
  },
  lcupproc: {
    zIndex: 1,
    opacity: .4,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: -30,
    width: '300%',
    height: '100%',
    padding: 10,
    alignSelf: 'center',
  },
  lcupprocbut: {
    zIndex: 2,
    opacity: 1,
    color: 'green',
    position: 'absolute',
    backgroundColor: 'black',
    marginTop: -150,
  },
  invnone: {
    color: 'crimson',
    //fontFamily: 'vincHand',
    fontFamily: 'Cochin',
    fontSize: 20,
    alignSelf: 'center',
    top: '-30%',
  },
  createSu: {
    zIndex: 2,
    flexDirection: 'row',
    //opacity: 1,
    fontFamily: 'Cochin',
    fontSize: 24,
    color: 'orange',
    position: 'absolute',
    alignSelf: 'center',
    padding: 2,
    top: 2,
  },
  createSuBox: {
    //zIndex: 0,
    //opacity: 1,
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 1,
    height: '5%',
    width: '40%',
    alignSelf: 'center',
    borderRadius: 10,
    //position: 'absolute',
  },
  suTitle: {
    color: 'crimson',
    //alignSelf: 'flex-start',
    //fontFamily: 'vincHand',
    fontFamily: 'Cochin',
    fontSize: 20,
    //marginLeft: '15%',
    //paddingBottom: 5,
    marginTop: '25%',
  },
  suTextinput: {
    zIndex: 2,
    color: 'orange',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    fontSize: 19,
    fontFamily: 'Cochin',
    //height: 60,
    borderColor: '#cb4154',
    borderBottomWidth: 2,
    width: 200,
    //marginRight: '90%',
    //marginTop: '5%',
    paddingTop: 10,
    overflow: 'scroll',
  },
  sulilTitle: {
    zIndex: 2,
    color: 'crimson',
    alignSelf: 'flex-start',
    //fontFamily: 'vincHand',
    fontFamily: 'Cochin',
    fontSize: 30,
    //marginLeft: '15%',
    //paddingBottom: 5,
    marginTop: '10%',
  },
  sulilSubTitle: {
    zIndex: 3,
    color: 'orange',
    fontFamily: 'vincHand',
    fontSize: 22,
    marginTop: '18%',
    marginLeft: '-5%',
  },
  sulilTextinput: {
    zIndex: 2,
    color: 'orange',
    alignSelf: 'flex-start',
    //alignContent: 'center',
    backgroundColor: 'black',
    fontSize: 16,
    fontFamily: 'Cochin',
    //height: 60,
    //borderColor: '#cb4154',
    //borderBottomWidth: 2,
    width: 200,
    //marginRight: '90%',
    //marginTop: '5%',
    paddingTop: 10,
    overflow: 'scroll',
  },
  suETitle: {
    color: 'crimson',
    alignSelf: 'center',
    //fontFamily: 'vincHand',
    fontFamily: 'Cochin',
    fontSize: 20,
    //marginLeft: '15%',
    //paddingBottom: 5,
    marginTop: '10%',
  },
  suETextinput: {
    zIndex: 1,
    color: 'orange',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    fontSize: 19,
    fontFamily: 'Cochin',
    //height: 60,
    borderColor: '#cb4154',
    borderBottomWidth: 2,
    width: 200,
    //marginRight: '90%',
    //marginTop: '-85%',
    paddingTop: 10,
    overflow: 'scroll',
  },
  inviteButton: {
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 1,
    height: '5%',
    width: '20%',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: '10%',
  },
  invitee: {
    zIndex: 2,
    flexDirection: 'row',
    color: 'red',
    alignSelf: 'flex-start',
    //fontFamily: 'vincHand',
    fontFamily: 'Cochin',
    fontSize: 16,
    marginLeft: '-20%',
    marginTop: '25%',
    //marginBottom: '-25%',
    borderColor: 'green',
    borderWidth: 1,
    //height: '5%',
    //width: '30%',
    padding: 6,
    borderRadius: 10
  },
  naVcontainer: {
    flex: 1,
    //borderColor: 'orange',
    //borderWidth: 2,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    //justifyContent: 'space-evenly',
  },
  goBack: {
    //zIndex: 0,
    //opacity: 1,
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 1,
    height: '5%',
    width: '30%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: '20%',
    marginLeft: '5%',
  },
  goNext: {
    //zIndex: 0,
    //opacity: 1,
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 1,
    height: '5%',
    width: '20%',
    borderRadius: 10,
    alignSelf: 'baseline',
    position: 'absolute',
    bottom: '20%',
    marginLeft: '65%',
  },
});
