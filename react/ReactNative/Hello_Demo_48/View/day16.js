'use strict'
import React, {Component} from 'react';
import {
  View,
  DatePickerIOS,
  Button,
  LayoutAnimation,
} from 'react-native';

//获取屏幕大小
import Dimensions from 'Dimensions';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      show: false,
    };
  }
  _onDateChange = (date) => {
    this.setState({date: date});
  }

  _buttonPress= () => {
    LayoutAnimation.spring();
    this.setState({show: !this.state.show});
  }

  render() {
    var top = ScreenHeight - 30 - 64 - 200;
    console.log('top is '+top);
    return (<View>
      <Button  title='show DatePicker' color='#554466' onPress={()=>this._buttonPress()}/>
      <View style={{height:30,position:'absolute',top:this.state.show?top:ScreenHeight,left:0, right:0,}}>
        <DatePickerIOS
          date={this.state.date} mode="datetime" onDateChange={(date) => this._onDateChange(date)}/>
      </View>

    </View>);
  }
}
