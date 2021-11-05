import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image, ScrollView} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function ServicesCom() {
  return (

    <View style={styles.container}>
      <Text style={styles.header}>
        {' '}
        Holistic care approach designed by medical experts
      </Text>
      <View
        style={{
          width: width,
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <View style={[styles.serviceimgcontainter]}>
          <Image
            source={require('../../Assests/Images/man.png')}
            style={styles.serviceimg}
          />
          <Text style={[styles.txtservice, {width: 35, height: 28}]}>
            24 hour support
          </Text>
        </View>
        <View style={[styles.serviceimgcontainter, {}]}>
          <Image
            source={require('../../Assests/Images/image_2.png')}
            style={styles.serviceimg}
          />
          <Text style={[styles.txtservice]}>Customised Diet</Text>
          <Text style={[styles.txtservice]}>Plan</Text>
        </View>
        <View style={styles.serviceimgcontainter}>
          <Image
            source={require('../../Assests/Images/image_3.png')}
            style={styles.serviceimg}
          />
          <Text style={[styles.txtservice]}>video Excersice</Text>
          <Text style={[styles.txtservice]}>access</Text>
        </View>
        <View style={styles.serviceimgcontainter}>
          <Image
            source={require('../../Assests/Images/image_4.png')}
            style={styles.serviceimg}
          />
          <Text style={[styles.txtservice]}>curated</Text>
          <Text style={[styles.txtservice]}>Resources</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 121,
    width: width,
    left: -1,
    justifyContent: 'space-around',
    backgroundColor:"#F0EFEF"
  },
  header: {
    fontSize: 14,
    lineHeight: 16.8,
    fontWeight: '400',
    fontFamily: 'Lato',
    color: '#3D3D3D',
    left: 19,
  },
  serviceimgcontainter: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  serviceimg: {
    alignSelf: 'center',
  },
  txtservice: {
    fontSize: 10,
    lineHeight: 14.2,
    alignSelf: 'center',
    color:"#000000"
  },
});
