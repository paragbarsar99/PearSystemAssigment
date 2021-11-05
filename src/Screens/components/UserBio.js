import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import userdata from '../../utils/userdata.json';

export default function UserBio() {
  function RenderItem({item}) {
    return (
      <View
        style={{
          backgroundColor: '#FFF9ED',
          width: 262,
          height: 123,
          left: 15,
          borderRadius: 6,
          alignSelf: 'center',
          margin: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{height: 123, left: 0, borderRadius: 6, width: 70}}
          source={require('../../Assests/Images/laddy.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 13,
              color: '#2D3E4D',
              left: 11,
              fontWeight: '400',
              fontStyle: 'normal',
              lineHeight: 13.9,
              top:7
            }}>
            {item.name}
          </Text>

          <Text
            style={{
              left: 10,
              fontWeight: '700',
              lineHeight: 13.9,
              fontSize: 10,
              width: 172,
              height: 105,
              top:7,
              paddingTop:2
            }}>
            {' '}
            {item.discription}
          </Text>
        </View>
        <Image source={require("../../Assests/Images/comma.png") } style={{width:26.09,height:21.65,}}/>
      </View>
    );
  }

  function HeaderCom() {
    return (
      <View>
        <Text
          style={{
            width: 173,
            height: 16,
            fontSize: 16,
            lineHeight: 15.22,
            fontStyle: 'normal',
            color: '#1D5471',
            left: 15,
            fontWeight: '500',
            marginTop: 30,
          }}>
          HB Plus Delivers Results
        </Text>
        <Text
          style={{
            width: 345,
            height: 32,
            left: 15,
            fontFamily: 'lato',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 16,
            marginTop: 15,
          }}
          numberOfLines={2}>
          From weight loss to reversing lifestyle diseases, we have transformed
          many lives!
        </Text>
      </View>
    );
  }
  return (
    <>
      <HeaderCom />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.containerContain}
        data={userdata}
        keyExtractor={item => item.id}
        renderItem={RenderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  containerContain: {
    marginTop: 20,
    paddingRight:20
  },
});
