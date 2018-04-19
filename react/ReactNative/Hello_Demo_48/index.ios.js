

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Day11 from './View/day11';
import Day12 from './View/day12';
import Day13 from './View/day13';
import Day14 from './View/day14';
import Day15 from './View/day15';
import Day16 from './View/day16';
import Day17 from './View/day17';
import Day18 from './View/day18';
import Day19 from './View/day19';
import Day20 from './View/day20';
import Day21 from './View/day21';
import Day22 from './View/day22';
import Day23 from './View/day23';
import Day24 from './View/day24';

let list = [{key: 'Touch Event',component:'Day11'},
            {key: 'Animation 01',component:'Day12'},
            {key: 'Animation 02',component:'Day13'},
            {key: 'Timer',component:'Day14'},
            {key: 'ActivityIndicator',component:'Day15'},
            {key: 'DatePickerIOS', component:'Day16'},
            {key: 'Image', component:'Day17'},
            {key: 'FlatList', component:'Day18'},
            {key: 'MaskedViewIOS', component:'Day19'},
            {key: 'Modal', component:'Day20'},
            {key: 'Twitter', component: 'Day21'},
            {key: 'google', component: 'Day22'},
            {key: 'Map', component: 'Day23'},
            {key: 'Map_2', component: 'Day24'},];

class MainScreen extends Component {
  static navigationOptions = {
    title: 'React-Native 0.48.0',
  }

  _renderItem = ({item}) => {
    return (<TouchableHighlight underlayColor='#dddddd' onPress={() => this._rowPress(item)}>
      <View style={styles.cellcontainer}>
        <Text style={styles.text}>{item.key}</Text>
      </View>
    </TouchableHighlight>);
  }


  _rowPress = (item) => {
    console.log('item is '+item);
    const { navigate } = this.props.navigation;
    navigate(item.component);
  }

  render() {
    return (<FlatList data={list}
      renderItem={this._renderItem}
            />);
  }
}

export const Hello_Demo_48 = new StackNavigator({
  Main:  {screen: MainScreen},
  Day11: {screen: Day11},
  Day12: {screen: Day12},
  Day13: {screen: Day13},
  Day14: {screen: Day14},
  Day15: {screen: Day15},
  Day16: {screen: Day16},
  Day17: {screen: Day17},
  Day18: {screen: Day18},
  Day19: {screen: Day19},
  Day20: {screen: Day20},
  Day21: {screen: Day21},
  Day22: {screen: Day22},
  Day23: {screen: Day23},
  Day24: {screen: Day24},
});

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

AppRegistry.registerComponent('Hello_Demo_48', () => Hello_Demo_48);
