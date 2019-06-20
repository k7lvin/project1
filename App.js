import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}></View>
        <View style={{height: 50, backgroundColor: 'yellow',flexDirection: "row"}}>
          <View style={{backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}></View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>My Profile</Text>
          </View>
          <View style={{backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}></View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}></View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Home</Text>
          </View>
          <View style={{backgroundColor: 'purple', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}></View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Account</Text>
          </View>
          <View style={{backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}></View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Help</Text>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
