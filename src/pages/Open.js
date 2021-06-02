import React from 'react';
import {View, Image, Text, StyleSheet, Linking} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import VersionCheck from 'react-native-version-check';

import ButtonComponent from '../components/Button';

export default function OpenScreen({navigation, route}) {
  const makeCall = () => {
    Linking.openURL('tel:6697 5686');
  };

  const getStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Image
            style={styles.logo}
            source={require('/Users/rachmanpratama/Documents/work/react-native/hernes/src/assets/images/logo.jpeg')}
          />
          <Image
            style={styles.title}
            source={require('/Users/rachmanpratama/Documents/work/react-native/hernes/src/assets/images/logo-title.png')}
          />
          <Text style={styles.text}>V {VersionCheck.getCurrentVersion()}</Text>
        </View>
        <View style={styles.contentBottom}>
          <ButtonComponent
            title="GET STARTED"
            type="outline"
            onPress={getStarted}
            containerStyle={{width: wp('85%')}}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text} onPress={makeCall}>
          need an account? Call 6697 5686
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    color: 'white',
    paddingTop: '5%',
    fontFamily: 'Montserrat',
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
