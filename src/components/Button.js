import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ButtonComponent({onPress, ...props}) {
  return (
    <Button
      buttonStyle={[styles.button, props.buttonStyle]}
      titleStyle={[styles.title, props.titleStyle]}
      onPress={onPress}
      containerStyle={[styles.container, props.containerStyle]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: '#ED9923',
  },
  container: {
    width: wp('85%'),
  },
  title: {
    color: 'white',
    fontFamily: 'BebasNeue',
  },
});
