/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Linking, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigations';
import {Provider} from 'react-redux';
import store from './redux/store';
// import SplashScreen from 'react-native-splash-screen';
import VersionCheck from 'react-native-version-check';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  useEffect(() => {
    // SplashScreen.hide();

    // Check version
    const currentVersion = VersionCheck.getCurrentVersion();
    // VersionCheck.getLatestVersion().then(latestVersion => {
    //   if (currentVersion !== latestVersion) {
    //     if (Platform.OS === 'ios') {
    //       // Linking.openURL();
    //     } else {
    //       // Linking.openURL();
    //     }
    //   }
    // });
    Icon.loadFont();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
