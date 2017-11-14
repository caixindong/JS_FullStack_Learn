'use strict'
import React, {Component} from 'react';
import {
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

export default class extends Component {
  static navigationOptions = {
    title: 'Animation 02'
  }

  constructor(props) {
    super(props);
    this.state = {
      w: 100,
      h: 100,
    };
  }

  _onPress = ()=> {
    LayoutAnimation.spring();
    this.setState({w:this.state.w+15, h:this.state.h+15});
  }

  render() {
    return (<View style={styles.container}>
      <View style={[styles.box, {width: this.state.w, height: this.state.h}]}/>
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
