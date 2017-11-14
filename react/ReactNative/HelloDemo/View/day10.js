'use strict';
import React,{Component} from 'react';
import {Image, View} from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //名字必须是一个静态字符串,不能使用变量！因为require是在编译时期执行，而非运行时期执行
    //加载网络资源需要手动指定图片的尺寸
    return (<Image source={{uri: 'lion'}}>
      <Image source={require('../resource/timg.png')} style={{width:200, height:200}}/>
      <Image source={{uri: 'lion'}} style={{width:200, height:200}}/>
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        style={{width: 200, height: 200}} />
    </Image>)
  }
}
