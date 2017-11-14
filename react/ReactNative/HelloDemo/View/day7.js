'use strict'
import React,{Component} from 'react';
import {ListView,StyleSheet, Text, View} from 'react-native';

export default class extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
    this.state = {dataSource:ds.cloneWithRows([ 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])};
  }


  render(){
    return(
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}
        />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 20
  },
  item: {
    fontSize: 16,
    backgroundColor: '#ff0033',
    height: 44,
    borderWidth: 2,
    borderColor: '#ffffff',
    textAlign: 'center',
    color: '#ffffff'
  },
  item_sub: {

  }
})
