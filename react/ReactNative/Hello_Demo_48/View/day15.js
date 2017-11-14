'use strict'
import React,{Component} from 'react';
import {
  ActivityIndicator,
  View,
  Button,
} from 'react-native';

//iOS button 是没有背景颜色，只能通过TouchableOpacity或TouchableNativeFeedback自定义

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (<View style={{flex:1, backgroundColor: 'white', alignItems:'center', justifyContent:'center'}}>
      <ActivityIndicator animating={this.state.animating}
        size="large" style={{height: 80}}/>

      <Button title="Learn More" color="#841584" onPress={() => {
        this.setState({animating: true});
        this.timer = setTimeout(()=>{
          this.setState({animating:false});
        },2000);
      }}/>
    </View>);
  }
}
