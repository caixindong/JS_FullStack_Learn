'use strict'
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';

//获取屏幕大小
import Dimensions from 'Dimensions';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

//多列布局只能在非水平模式下使用，即必须是horizontal={false}。
//此时组件内元素会从左到右从上到下按Z字形排列，类似启用了flexWrap的布局。
//组件内元素必须是等高的——暂时还无法支持瀑布流布局。
var column = 3;
var cellHeight = 88;

//key默认需要的键，用于区分不同item
var list = [{key:0,title:'1'},{key:1,title:'2'},{key:2, title:'3'},{key:3, title:'4'}];

export default class extends Component {
  constructor() {
      super();
      this.state = {
        refresh: false,
      }
  }

  _onPress = (item) => {
    Alert.alert('I am '+item.title);
  }

  _renderItem = ({item}) => {
    return (<TouchableHighlight underlayColor='#123456' onPress={() => this._onPress(item)}>
      <View style={styles.cellcontainer}>
        <Text style={styles.text}>
          {item.title}
        </Text>
      </View>
    </TouchableHighlight>);
  }

  _ItemSeparatorComponent = () => {
    return (<View style={{backgroundColor: 'gray',height: 20,}}>
      <Text style={{color:'white',fontSize: 10}}>This is Separator
      </Text>
    </View>);
  }

  _ListEmptyComponent = () => {
    return (<View style = {{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent:'center', height:500}}>
      <Text style={{color:'black',fontSize: 20}}>This is Empty List
            </Text>
    </View>);
  }

  _ListFooterComponent = () => {
    return(<View style={{flex: 1, height:44, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'white',fontSize: 20}}>I am footer!
            </Text>
    </View>);
  }

  _ListHeaderComponent = () => {
    return(<View style={{flex: 1, height:44, backgroundColor:'blue', alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'white',fontSize: 20}}>I am header!
      </Text>
    </View>);
  }

  _getItemLayout= (date,index) => ({length:cellHeight, offset: (cellHeight+20)*index,index})

  _onRefresh = () => {
    this.setState({refresh:true});
    //模拟耗时的行为
    let timer =  setTimeout(()=>{
                    clearTimeout(timer);
                    this.setState({refresh:false});
                    Alert.alert('刷新成功');
                },4000);
  }

  render() {
    return (
      <View style= {{flex:1}}>
        <Button title='Refresh' color='blue' onPress={() => {
          this.setState({refresh:true});
          
        }}/>
        <FlatList

          data = {list}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
          ListEmptyComponent={this._ListEmptyComponent}
          ListFooterComponent={this._ListFooterComponent}
          ListHeaderComponent={this._ListHeaderComponent}
          horizontal = {false}
          numColumns = {column}
          getItemLayout = {this._getItemLayout}
          refreshing = {this.state.refresh}
          onRefresh = {this._onRefresh}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  cellcontainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#F6F6F6',
    height: cellHeight,
    width: ScreenWidth/column,
    borderWidth:1,
    borderColor: '#445588'
    },
  text: {
    flex: 1,
    color: 'black'
  },
});
