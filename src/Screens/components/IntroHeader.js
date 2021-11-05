import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function IntroHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.docimage}
        source={require('../../Assests/Images/docimage.png')}
      />
      <View style={styles.dialogsContainer}>
        <Text style={styles.header}> Diabetes Program</Text>
        <Text style={styles.subheader}>
          A physician supervised clinically proven program to tackle diabetes,
          reduce blood sugar and prevent health complications.
        </Text>
        <Text style={styles.subheader}>
          Our Plans are combined of Diet and proper medication.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 196,
    width: width,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFE8B9',
  },
  docimage: {
    height: 165,
    width: 159,
    bottom: 0,
    position: 'absolute',
    left: -1,
  },
  dialogsContainer: {
    height: 110 + 35.77,
    left: 135,
    position: 'absolute',
    top: 20,
    justifyContent: 'space-around',
  },
  header: {
    fontStyle: 'normal',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28.8,
    color: '#8D6A23',
    fontFamily: 'lato',
    right:10,
  },
  subheader: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'lato',
    lineHeight: 12,
    letterSpacing: 1,
    color: '#8D6A23',
    width: 234,
  },
});
