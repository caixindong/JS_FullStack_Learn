'use strict'
import React, {Component} from 'react';
import {
  MaskedViewIOS,
  Text,
  View,
  Image,
} from 'react-native';
//为组件添加一个透明的遮罩
export default class extends Component {

  render() {
    return (
      <MaskedViewIOS
        style={{ flex: 1 }}
        maskElement={
          <View style={{width:200,height:200,backgroundColor:'#445566'}}>
            <Text style={{flex:1,color:'black', fontSize: 30, opacity:0.5}}>
              Mask
            </Text>
          </View>
        }
      >
        <Image source={require('../resource/timg.png')} style={{width:100, height:100}}/>
      </MaskedViewIOS>
    );
  }
}
