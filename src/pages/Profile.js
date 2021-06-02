import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Profile page!</Text>
    </View>
  );
};

export default ProfileScreen;

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
  },
});
