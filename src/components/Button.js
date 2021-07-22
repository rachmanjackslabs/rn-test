import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TYPOGRAPHY} from '../assets/styles/typography';

export default function Buttons({
  onPress,
  title,
  buttonStyle,
  titleStyle,
  containerStyle,
  ...props
}) {
  return (
    <Button
      buttonStyle={[styles.button, buttonStyle]}
      titleStyle={[styles.title, titleStyle]}
      onPress={onPress}
      containerStyle={[styles.container, containerStyle]}
      title={title}
      type="outline"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  container: {
    width: wp('85%'),
  },
  title: {
    color: TYPOGRAPHY.COLOR.White,
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
  },
});
