'use strict';

import React,{Component} from 'react';
import {
  Alert,
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {NativeModules, NativeEventEmitter} from 'react-native';

import MapView from './View/MapView'

var CalendarManager = NativeModules.CalendarManager;
var date = new Date();
CalendarManager.addEvent('Birthday Party', {
  location: '4 Privet Drive, Surrey',
  time: date.getTime(),
});


// CalendarManager.findEvents((error, events) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(events);
//   }
// });

async function updateEvents() {
  try {
    var events = await CalendarManager.findEvents();
    console.log('updateEvents' + events);
  } catch (e) {
    console.error(e);
  }
}

updateEvents();

console.log(CalendarManager.firstDayOfTheWeek);

class DemoView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var PostEventToJsManager = NativeModules.PostEventToJsManager;

    const eventEmitterManagerEmitter = new NativeEventEmitter(PostEventToJsManager);

    const EventEmitterManagerEvent = PostEventToJsManager.EventEmitterManagerEvent;

    this.listener = eventEmitterManagerEmitter.addListener(
      EventEmitterManagerEvent,
      (data) => Alert.alert('来了 来了 ->'+ data)
    );
  }

  componentDidMount() {
    var PostEventToJsManager = NativeModules.PostEventToJsManager;
    PostEventToJsManager.postNotificationEvent('张杨事件传递');
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  onRegionChange(event) {
    console.log('I am here');
  }

  render() {
    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return (<View style={styles.container}>
      <Text style={styles.text}>{this.props.text}
      </Text>
      <MapView
        region={region}
        pitchEnabled={true}
        onRegionChange={this.onRegionChange}
        style={{height:200, width:200, margin:20}}/>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
});

AppRegistry.registerComponent('DemoView', () => DemoView);
