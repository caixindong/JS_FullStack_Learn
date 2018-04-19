'use strict';

import React, {Component} from 'react';
import {
  Platform,
  Animated,
  Easing,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  TabBarIOS,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class Entrance extends Component {
  static propTypes = {
    hideThis: React.PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      transforAnim: new Animated.Value(1),
      opacityAnim: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.transforAnim,
      {
        toValue: 50,
        duration: 1200,
        delay: 2000,
        easing: Easing.elastic(2),
      },
    ).start();
    Animated.timing(
      this.state.opacityAnim,
      {
        toValue: 0,
        duration: 800,
        easing: Easing.elastic(1),
        delay: 2200,
      },
    ).start();
    setTimeout(() => {
      this.props.hideThis();
    }, 3300);
  }

  render() {
    return (
      <Animated.View style={[styles.entrance, {opacity: this.state.opacityAnim}]}>
      <AnimatedIcon size={60} name='logo-twitter' style={[styles.twitter, {transform:[{scale: this.state.transforAnim}]}]}/>
      </Animated.View>
    );
  }
}

class TwitterPost extends Component {
  constructor() {
    super();
    this.state = {
      isRefreshing: false,
    };
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
    });
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 1000);
  }

  render() {
    return (
      <ScrollView
        refreshControl = {
          <RefreshControl 
            refreshing={this.state.isRefreshing} 
            onRefresh={() => this._onRefresh()}
            tintColor='#ddd'/>}>
        <Image source={require('./img/day3.png')} style={{width: Util.size.width, height: Util.size.height-110}}></Image>
      </ScrollView>
    );
  }
}

class TwitterFlow extends Component {
  render() {
    return (
      <View>
        <View style={styles.nav}>
          <View style={styles.navLeft}>
            <Icon name='ios-person-add' size={23} style={{color: '#1b95e0', paddingLeft:10}}></Icon>
          </View>
          <View style={styles.navMid}>
            <Icon name='logo-twitter' size={27} style={{color: '#1b95e0'}}></Icon>
          </View>
          <View style={styles.navRight}>
            <Icon name='ios-search' size={23} style={{color: '#1b95e0', width: 30}}></Icon>
            <Icon name='ios-create-outline' size={23} style={{color: '#1b95e0', width: 30, paddingRight: 10}}></Icon>
          </View>
        </View>
        <TwitterPost/>
      </View>
    );
  }
}

class TwitterTab extends Component {
  constructor() {
    super();
    this.state ={
      selectedTab: '主页',
      title: '主页',
    };
  }
  _changeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    const iosTabView = <TabBarIOS barTintColor='#fff' tintColor='#1b95e0'>
      <Icon.TabBarItem 
        title='主页' 
        iconName='ios-home-outline' 
        selectedIconName='ios-home'
        onPress={() => this._changeTab('主页')}
        selected={this.state.selectedTab === '主页'}>
        <TwitterFlow/>
      </Icon.TabBarItem>
      <Icon.TabBarItem 
        title='通知' 
        iconName='ios-notifications-outline' 
        selectedIconName='ios-notifications'
        onPress={() => this._changeTab('通知')}
        selected={this.state.selectedTab === '通知'}>
        <TwitterFlow/>
      </Icon.TabBarItem>
      <Icon.TabBarItem 
        title='私信' 
        iconName='ios-mail-outline' 
        selectedIconName='ios-mail'
        onPress={() => this._changeTab('私信')}
        selected={this.state.selectedTab === '私信'}>
        <TwitterFlow/>
      </Icon.TabBarItem>
      <Icon.TabBarItem 
        title='我' 
        iconName='ios-person-outline' 
        selectedIconName='ios-person'
        onPress={() => this._changeTab('我')}
        selected={this.state.selectedTab === '我'}>
        <TwitterFlow/>
      </Icon.TabBarItem>
    </TabBarIOS>
    return (iosTabView);
  }
}

export default class extends Component {
  static navigationOptions = {
    //隐藏导航栏
    header: null,
  }

  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle(0);
    }
  }

  _hideEntrance() {
    this.setState({
      show: false,
    });
  }

  render () {
    let entrance = this.state.show? <Entrance hideThis={() => this._hideEntrance()}/>:<View></View>;
    return (
      <View style={styles.twitterContainer}>
        <TwitterTab/>
        {entrance}
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    twitterContainer: {
      width: Util.size.width,
      height: Util.size.height,
    },
    entrance: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: Util.size.height,
      width: Util.size.width,
      backgroundColor: '#1b95e0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    twitter: {
      color: '#fff',
      position: 'relative',
      top: -20,
      textAlign: 'center',
    },
    nav: {
      flexDirection: 'row',
      paddingTop: 30,
      borderBottomWidth: Util.pixel,
      borderBottomColor: '#ddd',
      paddingBottom: 5,
      backgroundColor: '#fff',
    },
    navLeft: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    navMid: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navRight: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },
  }
);