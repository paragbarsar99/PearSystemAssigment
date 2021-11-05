import React, {useState} from 'react';
import {StyleSheet, Text, View,Dimensions} from 'react-native';
import {ListItem, Badge, Divider} from 'react-native-elements';
import {data_1} from '../../utils/FaqData';

const {width,height} = Dimensions.get("window")
export default function FaqListitem({title, dis}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <ListItem.Accordion
        containerStyle={{backgroundColor: '#F6F6FB'}}
        content={
          <>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontSize: 8,
                  fontWeight: '400',
                  lineHeight: 9.6,
                  fontStyle: 'normal',
                  color: 'black',
                  left: 20,
                }}>
                {title}
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {dis.map((l, i) => (
          <ListItem
            key={l.key}
            bottomDivider
            style={{backgroundColor: '#F6F6FB'}}>
            
            <ListItem.Content>
            <Badge badgeStyle={{backgroundColor:"black",top:17,}} />

              <ListItem.Subtitle
                style={{
                  width: width-(width/8),
                  height: 25,
                  left: 20,
                  fontStyle: 'normal',
                  fontFamily: 'lato',
                  lineHeight: 12,
                  fontWeight: '400',
                  color: 'gray',
                  fontSize: 8,
                }}>
                {l.dis1}
              </ListItem.Subtitle>
              <Divider width={5} />
              <Badge badgeStyle={{backgroundColor:"black",top:17,}} />
              <ListItem.Subtitle
                style={{
                  width: width-(width/8),
                  height: 25,
                  left: 20,
                  fontStyle: 'normal',
                  fontFamily: 'lato',
                  lineHeight: 12,
                  fontWeight: '400',
                  color: 'gray',
                  fontSize: 8,
                  lineHeight: 12,
                }}>
                {l.dis2}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({});
