import React from 'react';
import {Linking, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {TYPOGRAPHY} from '../styles/typography';

export default function Call() {
  const makeCall = () => {
    Linking.openURL('tel:6697 5686');
  };

  return (
    <Text style={styles.footerText} onPress={makeCall}>
      need an account? Call 6697 5686
    </Text>
  );
}

const styles = StyleSheet.create({
  footerText: {
    color: TYPOGRAPHY.COLOR.White,
    paddingTop: hp('2%'),
    fontFamily: TYPOGRAPHY.FONT.Montserrat,
    fontSize: 12,
  },
});
