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
