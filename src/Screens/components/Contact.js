import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

export default function Contact() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: width,
        }}>
        <TouchableOpacity style={styles.callbtn}>
          <FontAwesome
            name="phone"
            size={18}
            color="#F18261"
            style={{alignSelf: 'center', left: 31}}
          />
          <Text
            style={{
              alignSelf: 'center',
              left: 42,
              fontSize: 14,
              color: '#2D3E4D',
              width: 78,
              height: 16,
            }}>
            Call Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callbtn}>
          <Ionicons
            name="chatbubble-ellipses"
            size={18}
            color="#F18261"
            style={{alignSelf: 'center', left: 31}}
          />
          <Text
            style={{
              alignSelf: 'center',
              left: 42,
              fontSize: 14,
              color: '#2D3E4D',
            }}>
            Chat With Us
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: width,
          height: 50,
          left: -1,
          backgroundColor: '#FFB4AC',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 10,
            fontWeight: '400',
            lineHeight: 12,
            left: 20,
            color: 'white',
          }}>
          Term & conditions{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 100,
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../Assests/Images/in.png')}
            style={{width: 13.75, height: 13.75}}
          />
          <Image
            source={require('../../Assests/Images/insta.png')}
            style={{width: 13.75, height: 13.75}}
          />
          <Image
            source={require('../../Assests/Images/fb.png')}
            style={{width: 13.75, height: 13.75}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    height: 170,
    top: 100,
  },
  callbtn: {
    borderRadius: 32,
    width: 170,
    height: 40,
    flexDirection: 'row',
    borderColor: '#F18261',
    borderWidth: 1,
    top: 40,
  },
  chatbtn: {
    borderRadius: 32,
    width: 170,
    height: 40,
    flexDirection: 'row',
    borderColor: '#F18261',
    borderWidth: 1,
    top: 40,
  },
});
