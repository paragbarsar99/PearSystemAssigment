import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ExpandableListView({
  title,
  subtitle,
  subtitle2,
  image,
  price1,
  price2,
  backcolor,
  linearcolor
}) {
  const [Expanded, setExpanded] = useState(false);
  return (
    <View style={[styles.container,{backgroundColor:backcolor}]}>
      <View
        style={{
          width: 381 - 129,
          height: 186,
        }}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection: 'row', marginBottom: 0}}>
          <Text style={styles.price}>{price1} </Text>
          <Text style={styles.price}>{price2}</Text>
        </View>
        {/* ListView_1 */}
        <Text style={styles.expandtxt}>
          {subtitle}
          {<AntDesign name="down" size={10} color="#FB9085" />}
        </Text>
        <Text style={styles.expandtxt}>
          {subtitle2}
          {<AntDesign name="down" size={10} color="#FB9085" />}
        </Text>

        {/* ListView_2 */}

        <View style={styles.activePlanebtn}>
          <Text style={styles.activeplantxt}>Activate the Plan</Text>
        </View>
      </View>

      <LinearGradient
        start={{x:0.0 , y: 0.0}}
        end={{x: 1.0, y:1.0}}
        colors={["rgba(255, 159, 71, 0.2)", "rgba(0,0,0,0)","rgba(255, 255, 255, 1)"]}
        style={styles.linearGradient}>
        <View
          style={{
            width: 129,
            height: 186,
            top: -1,
            left: 0,
            borderTopLeftRadius: 40,
          }}>
          <Image style={styles.heartimg} source={image} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 381 - 30,
    height: 186,
    backgroundColor: '#F1F6FF',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    height: 24,
    left: 20,
    fontFamily: 'lato',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    color: '#2D3E4D',
    top: 10,
  },
  price: {
    top: 20,
    fontSize: 12,
    lineHeight: 14.64,
    fontWeight: '400',
    fontFamily: 'lato',
    color: '#2DC9D6',
    left: 19,
    height: 15,
  },
  activePlanebtn: {
    width: 133,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#F18261',
    top: 60,
    left: 20,
  },
  activeplantxt: {
    fontWeight: '500',
    fontFamily: 'roboto',
    lineHeight: 17.58,
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    padding: 6,
  },
  heartimg: {
    width: 65,
    height: 65,
    alignSelf: 'center',
    top: 66,
  },
  expandtxt: {
    left: 20,
    fontSize: 12,
    top: 30,
    lineHeight: 14.4,
    color: '#FB9085',
    padding: 2,
  },
  linearGradient: {
    width: 129,
    height: 186,
    top: -1,
    left: 0,
    borderTopLeftRadius: 40,
    opacity:0.7
   },
});
