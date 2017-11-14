'use strict'

import React, {Component} from 'react';
import {
  View,
  Image,
} from 'react-native';
//与静态资源不同的是，网络加载需要手动指定图片的尺寸

// resizeMode enum('cover', 'contain', 'stretch', 'repeat', 'center')
// 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。
// cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
// contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白
// stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
// repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸。仅iOS可用。
// center: 居中不拉伸。

//blurRadius(模糊半径)：为图片添加一个指定半径的模糊滤镜

export default class extends Component {
  constructor() {
    super();
  }
  render() {
    return (<View style={{flex: 1}}>
      <Image style={{width:200 ,height:200, backgroundColor: 'red'}}
        source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510464463&di=40925278c7f3dd8c0e96aa411c521320&imgtype=jpg&er=1&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F05%2F23%2F146397295100845261.PNG'}}
        resizeMode='contain'
        blurRadius={2}
        onPartialLoad={() => {
          console.log('逐步加载');
        }}
        onProgress={(e) => {
          console.log('total is '+e.nativeEvent.total+',current is '+e.nativeEvent.loaded);
        }}
        onError={(e) => {
          console.log('error is ' + e.nativeEvent.error);
        }}/>
    </View>);
  }
}
