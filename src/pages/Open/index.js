import React from 'react';
import {View, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import VersionCheck from 'react-native-version-check';

import styles from './Style';
import Buttons from '../../components/Button';
import Call from '../../components/Call';

export default function OpenScreen({navigation}) {
  const loginState = useSelector(state => state.login);
  console.tron.log(loginState);

  const getStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.jpeg')}
          />
          <Image
            style={styles.title}
            source={require('../../assets/images/logo-title.png')}
          />
          <Text style={styles.text}>V {VersionCheck.getCurrentVersion()}</Text>
        </View>
        <View style={styles.contentBottom}>
          <Buttons
            title="GET STARTED"
            onPress={getStarted}
            containerStyle={styles.button}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Call />
      </View>
    </View>
  );
}
