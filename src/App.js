import {tsBigIntKeyword} from '@babel/types';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Contact from './Screens/components/Contact';
import Divider from './Screens/components/Divider';
import ExpandableListView from './Screens/components/ExpandableListView';
import Faq from './Screens/components/Faq';
import Header from './Screens/components/Header';
import IntroHeader from './Screens/components/IntroHeader';
import PersonalizeProgramCom from './Screens/components/PersonalizeProgramCom';
import ServicesCom from './Screens/components/ServicesCom';
import UserBio from './Screens/components/UserBio';

const {height, width} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}>
        <Header />
        <IntroHeader />
        <ServicesCom />
        <PersonalizeProgramCom />
        <Divider padding={50} />
        <ExpandableListView
          title={'Prevention'}
          subtitle={'Access Your Diabetes Risk'}
          price1={'₹590 per month ||'}
          price2={'1490 for 3 months'}
          subtitle2={'Know More'}
          image={require('../src/Assests/Images/heart.png')}
          backcolor={"#F1F6FF"}
          linearcolor={"#FF9F47"}

        />
        <ExpandableListView
          title={'Reversal'}
          subtitle={'Check Your Eligibility'}
          price1={'₹590 per month ||'}
          price2={'1490 for 3 months'}
          subtitle2={'Know More'}
          image={require('../src/Assests/Images/man2.png')}
          backcolor={"#FFF5E1"}
          linearcolor={"#F97045"}

        />
        <ExpandableListView
          title={'Management'}
          subtitle={'Check Your Eligibility'}
          price1={'₹1990 per month ||'}
          price2={'5550 for 3 months'}
          subtitle2={'Know More'}
          image={require('../src/Assests/Images/injection.png')}
          backcolor={"#FFEDED"}
          linearcolor={"#F94545"}
        />
        <UserBio />
        <Faq />
        <Contact />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
