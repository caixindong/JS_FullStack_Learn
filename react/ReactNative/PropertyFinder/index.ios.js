/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  Image,
  View,
  NavigatorIOS,
} from 'react-native';

import SearchPage from './SearchPage';

class HelloWorld extends Component {
    render() {
      return (
        <Text style={styles.text}>
          hello world!
        </Text>
      );
    }
}

class PropertyFinder extends Component {
  render() {
      return (
          <NavigatorIOS
            style = {styles.container}
            initialRoute = {{
                title: 'Property Finder',
                component: SearchPage,
            }}
          />
      );
  }
}

var styles = StyleSheet.create({
  text: {
    color:'black',
    backgroundColor:'white',
    fontSize:30,
    margin:80,
  },
  container: {
    flex:1,
  }
});


AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
