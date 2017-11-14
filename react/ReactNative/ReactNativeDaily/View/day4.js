'use strict'
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={{color: 'blue',
        fontWeight: 'bold',
      fontSize: 30, marginTop: 60}}>Hello {this.props.name}!</Text>
    );
  }
}

export default class extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
