'use strict'
import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subview_1}>
          <View style={styles.subview_1_1}>
          </View>
          <View style={styles.subview_1_2}>
            <View style={styles.subview_1_2_1}>
            </View>
            <View style={styles.subview_1_2_2}>
              <View style={styles.subview_1_2_2_1}>
              </View>
              <View style={styles.subview_1_2_2_2}>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.subview_2}>
          <View style={styles.subview_2_1}>
          </View>
          <View style={styles.subview_2_2}>
            <View style={styles.subview_2_2_1}>
              <View style={styles.subview_2_2_1_1}>
              </View>
              <View style={styles.subview_2_2_1_2}>
              </View>
            </View>
            <View style={styles.subview_2_2_2}>
              <View style={styles.subview_2_2_2_1}>
              </View>
              <View style={styles.subview_2_2_2_2}>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.subview_3}>
          <View style={styles.subview_3_1}>
          </View>
          <View style={styles.subview_3_2}>
            <View style={styles.subview_3_2_1}>
            </View>
            <View style={styles.subview_3_2_2}>
            </View>
          </View>
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  subview_1: {
    flex: 1,
    backgroundColor: '#bbbbbb',
    flexDirection: 'row',
    marginBottom:10,
  },
  subview_2: {
    flex: 2,
    backgroundColor: '#eeeeee',
    marginBottom:10,
  },
  subview_3: {
    flex: 1,
    backgroundColor: '#777777',
    flexDirection: 'row',
  },
  subview_1_1: {
    flex: 1,
    backgroundColor: '#345678',
  },
  subview_1_2: {
    flex: 2,
    backgroundColor: '#222222',
  },
  subview_1_2_1: {
    flex: 1,
    backgroundColor: '#e4e4e4',
  },
  subview_1_2_2: {
    flex: 1,
    backgroundColor: '#4e4e4e',
    flexDirection:'row'
  },
  subview_1_2_2_1: {
    flex: 2,
    backgroundColor: '#7a7a7a',
  },
  subview_1_2_2_2: {
    flex: 3,
    backgroundColor: '#a7a7a7',
  },
  subview_2_1: {
    flex: 3,
    backgroundColor: '#c6c6c6',
  },
  subview_2_2: {
    flex: 5,
    backgroundColor: '#6c6c6c',
    flexDirection: 'row'
  },
  subview_2_2_1: {
    flex: 1,
    backgroundColor: '#ff77ff'
  },
  subview_2_2_2: {
    flex: 1,
    backgroundColor: '#112233'
  },
  subview_2_2_1_1: {
    flex: 1,
    backgroundColor: '#909090'
  },
  subview_2_2_1_2: {
    flex: 1,
    backgroundColor: '#322322'
  },
  subview_2_2_2_1: {
    flex: 1,
    backgroundColor: '#888888'
  },
  subview_2_2_2_2: {
    flex: 1,
    backgroundColor: '#444433'
  },
  subview_3_1: {
    flex: 1,
    backgroundColor: '#5555aa'
  },
  subview_3_2: {
    flex: 1,
    backgroundColor: '#aa5555'
  },
  subview_3_2_1: {
    flex: 1,
    backgroundColor: '#dd33dd'
  },
  subview_3_2_2: {
    flex: 1,
    backgroundColor: '#33dddd'
  }
});
