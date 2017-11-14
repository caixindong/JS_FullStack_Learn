'use strict'

import React,{Component, PropTypes} from 'react';
import {requireNativeComponent} from 'react-native';

// requireNativeComponent 自动把这个组件提供给 "RNTMapManager"
var RNTMap = requireNativeComponent('RNTMap',MapView);

export default class MapView extends Component {
  static PropTypes = {
    pitchEnabled: PropTypes.bool,

    region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
    }),

    onRegionChange: PropTypes.func,
  };

  _onRegionChange = (event) => {
    if (!this.props.onRegionChange) {
      return;
    }

    //地图回调
    this.props.onRegionChange(event.nativeEvent);
  }

  render() {
    return (<RNTMap {...this.props} onRegionChange={this._onRegionChange}/>);
  }
}
