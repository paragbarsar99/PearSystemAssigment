import React from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import {ListItem} from 'react-native-elements';
import FaqListitem from './FaqListitem';
import {data_1, data_2,data_3,data_4} from '../../utils/FaqData'
import Divider from './Divider';
const {height, width} = Dimensions.get('window');

export default function Faq() {
  return (
    <View style={styles.container}>
    <Text style={{fontSize:18,fontWeight:'500',lineHeight:21.6,alignSelf:"center",top:10}}>Frequently Asked Questions</Text>
      <Divider padding={10}/>
      <FaqListitem title={data_1[0].title} dis={data_1} />
      <FaqListitem title={data_2[0].title} dis={data_2}/>
      <FaqListitem title={data_3[0].title} dis={data_3}/>
      <FaqListitem title={data_4[0].title} dis={data_4}/>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 299,
    left: -1,
    marginTop: 20,
    backgroundColor: '#F6F6Fb',
    alignSelf:"center"
  },
});
