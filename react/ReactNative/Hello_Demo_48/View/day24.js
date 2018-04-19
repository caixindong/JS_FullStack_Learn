'use strict';
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  LayoutAnimation,
  ScrollView,
  CameraRoll,
  View,
} from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();
    this.state = {
      images: [],
      widths: [],
      active: false,
      showBtn: false,
      selected: [],
    };
  }

  componentDidMount() {
    const fetchParams = {
      first: 10,
    };
    CameraRoll.getPhotos(fetchParams).done((data) => this._storeImages(data),(err) => this._logImageError(err));
  }

  _storeImages(data) {
    const assets = data.edges;
    const images = assets.map((asset) => asset.node.image);
    const widths = [];
    const selected = [];
    for(var i = 0; i< images.length; i++) {
      if (i == images.length - 1) {
        Image.getSize(images[i].uri,(w,h) => {
          widths.push((w/h) * 130);
          selected.push(false);
          this.setState({images, widths, selected});
        });
      } else {
        Image.getSize(images[i].uri,(w,h) => {
          widths.push((w/h) * 130);
          selected.push(false);
        });
      }
    }
  }

  _logImageError(err) {
    console.log(err);
  }

  _showBtn() {
    this.setState({
      showBtn: true,
    });
  }

  render() {
    const {active, selected, widths, showBtn}  = this.state;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this._showBtn()}>
          <Image style={styles.bg} source={{uri: 'tumblr'}}></Image>
        </TouchableWithoutFeedback>
        {showBtn?
          <View style={styles.drop}>

          </View>
            :
          <View>

          </View>
        }
      </View>);
  }

}

const styles = StyleSheet.create({
  container: {
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor: '#f9f9f9',
  },
  drop: {
    height: Util.size.height,
    width: Util.size.width,
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    left: 0,
    top: 0,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    alignItems: 'center',
  },
  bg: {
    marginTop: 20,
    height: Util.size.height - 20,
    width: Util.size.width,
  }
});
