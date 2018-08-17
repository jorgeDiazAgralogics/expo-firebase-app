import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import AppButton from './application/components/AppButton';
import PreLoader from './application/components/PreLoader';
// import BackgroundImage from './application/components/BackgroundImage';
// import Start from './application/screens/Start';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
import GuestNavigation from './application/navigations/guest';
import {Text} from 'react-native-elements'
// import RestaurantEmpty from './application/components/Restaurant/RestaurantEmpty'
import Restaurant from './application/screens/Restaurants/Restaurants'
import LoggedNavigation from './application/navigations/logged';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLogged: false,
      loaded: false
    }
  }

  async componentDidMount () {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({
          isLogged: true,
          loaded: true
        });
      } else {
        this.setState({
          isLogged: false,
          loaded: true
        });
      }
    })
  }
  
  render() {
		const {isLogged, loaded} = this.state;

		if ( ! loaded) {
			return (<PreLoader/>);
		}

		if(isLogged) {
			return (<LoggedNavigation />);
		} else {
			return (<GuestNavigation />);
		}
	}
}