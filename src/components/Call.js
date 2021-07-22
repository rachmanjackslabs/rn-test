import React from 'react';
import {Linking, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {TYPOGRAPHY} from '../assets/styles/typography';

const callNumber = '6697 5686';

export default function Call() {
  const makeCall = () => {
    Linking.openURL(`tel:${callNumber}`);
  };

  return (
    <Text style={styles.footerText} onPress={makeCall}>
      need an account? Call {callNumber}
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
