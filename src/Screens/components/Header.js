import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'

const {height, width} = Dimensions.get('window');


export default function Header() {
  return (
    <View style={styles.container}>
       <AntDesign name="arrowleft" style={styles.HeaderLeft} size={20} color="#1D5471"/>
      <Text style={styles.header}>Diabetes Professoinal Programs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 56,

  },
  HeaderLeft: {
    width: 20,
    left:16,
    top:20,

  },
  header:{
      width:342,
      height:24,
      left:51,
      color:"#1D5471",
      fontSize:20,
      fontWeight:"700",
      lineHeight:24,
      fontStyle:"normal",
      fontFamily:"lato",
      
      
  }
});
