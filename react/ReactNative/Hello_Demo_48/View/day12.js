'use strict'
import React, {Component} from 'react';
import {
  Animated,
  Text,
} from 'react-native';

export default class extends Component {
  static navigationOptions = {
    title: 'Animation 01'
  }

  render() {
    return (<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue', margin: 30}}>
      <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
    </FadeInView>);
  }
}

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        duration: 2000,
        toValue: 1,
        useNativeDriver: true,
      }
    ).start();
  }

  render() {
    return (<Animated.View style={{
      ...this.props.style,
      opacity: this.state.fadeAnim,
    }}>
      {this.props.children}
    </Animated.View>);
  }
}
