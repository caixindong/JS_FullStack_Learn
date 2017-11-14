'use strict'
import React,{Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }

  render(){
    return (<View style={{padding: 100}}>
      <TextInput style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text:text})}/>
      <Text style={{padding: 10, fontSize: 30}}>
        {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
      </Text>
    </View>);
  }
}
