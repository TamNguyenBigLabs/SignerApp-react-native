import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './home';
import SignerScreen from './signer';

const Router = StackNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: { title: 'Welcome' }
  },
  Signer: {
      screen: SignerScreen,
      navigationOptions: { title: 'Signer' }
  }
});

export default Router;