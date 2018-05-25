/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Linking,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends React.Component {
    
    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }
    
    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }
    
    handleOpenURL = (event) => {
        this.navigate(event.url);
    }
    
    navigate = (url) => {
        //solosigner://sign/client_id/blabla
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        
        const spliter = route.split('/');
        const host = spliter[0];
        const callerId = spliter[1];
        const param = spliter[2];
        if (host === 'sign') {
            navigate('Signer', { caller: callerId, inMessage: param })
        };
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to SOLO Signer!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit screens/home.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
            
            <Button title="Open Signer"
                onPress={() =>
                  navigate('Signer', { caller: 'callerId', inMessage: 'Jane' })
                }
            />
            
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#669900'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
