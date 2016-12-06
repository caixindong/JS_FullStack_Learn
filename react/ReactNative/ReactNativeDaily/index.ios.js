/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';

import Utils from './View/Utils';
import Day1 from './View/day1';

let listing = [{title:'Day 1',component:Day1}];

class DemoListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource:ds.cloneWithRows(listing),
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (<TouchableHighlight underlayColor='#dddddd' onPress={() => this.rowPress(rowData)}>
      <View style={styles.cellcontainer}>
        <Text style={styles.text}>{rowData.title}</Text>
      </View>
    </TouchableHighlight>);
  }

  rowPress(rowData) {
    this.props.navigator.push({
      title: rowData.title,
      component: rowData.component,
    });
    console.log(rowData);
  }

  renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
    return (<View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 1,
          backgroundColor: 'black',
        }}/>);
  }

  render() {
    return (<ListView
              dataSource = {this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              renderSeperator={this.renderSeperator.bind(this)}/>);
  }
}


export default class ReactNativeDaily extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{title:'Daily Learn',
                      component:DemoListView}}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  cellcontainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#F6F6F6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactNativeDaily', () => ReactNativeDaily);
