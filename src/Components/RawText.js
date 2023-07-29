import React from 'react'
import {SafeAreaView, Text, StyleSheet } from 'react-native'
const RawText = (props) => {
    const {text, textS } =  props
    return(
        <SafeAreaView >
            <Text style={[styles.textStyles, textS]}> {text} </Text>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create(
    {
        
        textStyles : {
        justifyContent : 'center',
        alignSelf : 'center',
        fontWeight: 'bold',
        color : 'white'
        },
    }
)

export default RawText