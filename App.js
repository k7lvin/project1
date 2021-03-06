import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import InstaClone from './components/InstaClone'

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <InstaClone/>
        </View>
        <View style={{height: 50, flexDirection: "row"}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}>
              <Image source={require('./components/img/search.png')}/>
            </View>
            <Text style={{fontSize: 10, color:'#545455', marginTop: 4}}>Search</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}>
              <Image source={require('./components/img/inbox.png')}/>
            </View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}>
              <Image source={require('./components/img/go-more.png')}/>
            </View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Camera</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}>
              <Image source={require('./components/img/account.png')}/>
            </View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>My Profile</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{backgroundColor:'white', width: 26, height: 26}}>
              <Image source={require('./components/img/help.png')}/>
            </View>
            <Text style={{fontSize: 10, color:'#545454', marginTop: 4}}>Account Settings</Text>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 92.5+'%',
    backgroundColor: "#F5FCFF"
  }
});
