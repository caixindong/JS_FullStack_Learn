'use strict'
import React, {Component} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

//显示模态视图
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }


  render() {
    return (<View style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={
          () => {
            alert('Modal has been closed');
          }
        }
      >
        <View style={{marginTop: 22}}>
          <View>
            <Text>
              Hello world!
            </Text>
            <TouchableHighlight onPress={ () => {
                this.setState({modalVisible: !this.state.modalVisible});
              }
            }>
              <Text>
                Hide Modal!
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight onPress={
        () => {
          this.setState({modalVisible: true});
        }
      }>
        <Text>
          Show Modal!
        </Text>
      </TouchableHighlight>
    </View>);
  }
}
