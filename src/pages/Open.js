import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VersionCheck from 'react-native-version-check';

import {TYPOGRAPHY} from '../styles/typography';

import Buttons from '../components/Button';
import Call from '../components/Call';

export default function OpenScreen({navigation}) {
  const getStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.jpeg')}
          />
          <Image
            style={styles.title}
            source={require('../assets/images/logo-title.png')}
          />
          <Text style={styles.text}>V {VersionCheck.getCurrentVersion()}</Text>
        </View>
        <View style={styles.contentBottom}>
          <Buttons
            title="GET STARTED"
            onPress={getStarted}
            containerStyle={{width: wp('85%')}}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Call />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Black,
  },
  content: {
    flex: 0.9,
  },
  contentTop: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  text: {
    color: TYPOGRAPHY.COLOR.White,
    paddingTop: '5%',
    fontFamily: TYPOGRAPHY.FONT.Montserrat,
    fontSize: 12,
  },
  logo: {
    width: 225,
    height: 225,
  },
  title: {
    marginTop: hp('5%'),
  },
});
