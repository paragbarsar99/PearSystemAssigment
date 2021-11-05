import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function PersonalizeProgramCom() {
  function FlowChart({number, txt}) {
    return (
      <View style={{flexDirection: 'row', left: 25, top: 20}}>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: '#E1EAED',
            width: 28,
            height: 28,
          }}>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 18.76,
              fontFamily: 'lato',
              color: '#668099',
              alignSelf: 'center',
              padding: 2,
              fontWeight: '700',
            }}>
            {number}
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.txtflow}>{txt}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Personalised program for you</Text>
      </View>
      <FlowChart number={1} txt={'Fill in our questionnaire'} />
      <Text style={styles.dot}>:</Text>

      <FlowChart
        number={2}
        txt={
          'Opt in for our Diabetes Prevention, Reversal or Management Program'
        }
      />
      <Text style={styles.dot}>:</Text>

      <FlowChart number={3} txt={'Select a method of communication'} />
      <Text style={styles.dot}>:</Text>

      <FlowChart number={4} txt={'Make payment'} />
      <Text style={styles.dot}>:</Text>
      <FlowChart number={5} txt={'Select a slot to speak to the doctors'} />

      <View
        style={{
          justifyContent: 'space-between',
          width: '100%',
          top: 50,
        }}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}> 

        <Text
          style={{
            width: 136,
            height: 19,
            left: 23,
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 18.78,
            color: '#000000',
            fontFamily: 'lato',
          }}>
          Be free from Diabetes
        </Text>
        <View style={{borderRadius:6,backgroundColor:"#FFE8B9",right:10,width:135,height:23}}>
             <Text style={{alignSelf:"center",fontSize:12,lineHeight:14.64,fontWeight:'400',padding:2,color:'#2D3E4D'}}>Starting at INR 1450</Text>
        </View>
        </View>
        <Text
          style={{
            width: 343,
            left: 23,
            fontSize: 12,
            lineHeight: 19,
            letterSpacing: 1,
            fontWeight:'400',
            fontFamily:"lato",
            top:20,
            color:"#2D3E4D"
          }}>
          Diabetes management need to be looked at holistically keeping in mind
          kidney, liver, heart and cholestrol functions. We provide medical
          grade support, looking into pre-existing medical conditions. We have
          curated 3 packages cobsidering the stages of Diabetes which are
          Prevent Diabetes, Reverse Diabetes, and Manage Diabetes. Find detail
          below.{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    width: 234,
    height: 23,
    left: 23,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'lato',
    lineHeight: 22.55,
    color: '#1D5471',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  txtflow: {
    width: 221,
    left: 20,
    fontFamily: 'lato',
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 18.76,
    color: '#2D3E4D',
    fontSize: 14,
  },
  dot: {
    left: 35,
    width: 8,
    top: 15,
    fontSize: 20,
    color: '#B7BBC6',
  },
});
