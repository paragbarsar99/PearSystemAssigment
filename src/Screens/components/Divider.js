import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Divider({padding}) {
    return (
        <View style={[styles.containter,{padding:padding}]}>
         <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containter:{
        padding:50
    }
})
