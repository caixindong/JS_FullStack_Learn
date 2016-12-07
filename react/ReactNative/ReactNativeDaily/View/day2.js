'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class  extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
        </View>
        <View style={styles.container2}>
        </View>
        <View style={styles.container3}>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  container1: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  container2: {
    flex: 2,
    backgroundColor: '#eee',
  },
  container3: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});
