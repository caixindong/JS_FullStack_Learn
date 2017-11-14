'use strict'
import React,{Component} from 'react';
import {TouchableHighlight, View, StyleSheet, Text} from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '没数据'
    }
  }

  _onPressButtom() {
    console.log('click');

    fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({text:json.movies.map(obj => obj.title).join(',')});
    })
    .catch(error => {
      console.log(error);
      this.setState({text:"error"});
    });
  }

  render() {
    return (<View style={styles.container}>
      <Text style={styles.showtext}>{this.state.text}
      </Text>
      <TouchableHighlight style={styles.button} onPress={this._onPressButtom.bind(this)}>
        <Text style={{color: 'white'}}>测试网络API
        </Text>
            </TouchableHighlight>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#445566',
    height: 50,
    width: 100,
    marginTop: 10,
  },
  showtext: {
    color: 'black',
    height: 200,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
  }
});
