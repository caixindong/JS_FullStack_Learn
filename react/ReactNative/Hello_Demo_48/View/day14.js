'use strict';
import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';


export default class  extends Component {
  static navigationOptions = {
    title: 'Timer'
  }

  constructor(props) {
    super(props);
    this.state = {
      text_01: 1,
      text_02: '我在等一个函数响应，它1秒后响应',
    }
  }

//务必在卸载组件前清除定时器
  componentDidMount() {
    this.timer_01 = setInterval(
      () => {
        var i = this.state.text_01;
        this.setState({text_01: i+1});
      },
      1000
    );

    this.timer_02 = setTimeout(
      () => {
        this.setState({text_02: '我响应啦'});
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer_01);
    clearTimeout(this.timer_02);
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:30, color:'black', margin:60}}>{this.state.text_01}</Text>
        <Text style={{fontSize:50, color: 'red', margin: 60}}>{this.state.text_02}</Text>
      </View>);
  }
}
