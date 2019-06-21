import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class InstaClone extends Component {

    render() {
        return (
            <View style={{flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <Text>aaa</Text>
                 <Image 
                 style={{ width: 100 + '%', height: 240 }}
                 source={{ uri:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*' }} />
            </View>
        )
    }
}

export default InstaClone