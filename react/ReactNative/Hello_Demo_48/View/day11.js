'use strict'
import React, { Component } from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

export default class extends Component {
  static navigationOptions = {
    title: 'Touch Event',
  };

  render() {
    return (<ScrollView>
      <Image source = {require('../resource/timg.png')} />
      <Image />
    </ScrollView>);
  }
}
