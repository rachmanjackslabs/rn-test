/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
// import {Linking, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigations';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
// import SplashScreen from 'react-native-splash-screen';
// import VersionCheck from 'react-native-version-check';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    // SplashScreen.hide();

    // CHECK APP VERSION
    // const currentVersion = VersionCheck.getCurrentVersion();
    // VersionCheck.getLatestVersion().then(latestVersion => {
    //   if (currentVersion !== latestVersion) {
    //     if (Platform.OS === 'ios') {
    //       // Linking.openURL();
    //     } else {
    //       // Linking.openURL();
    //     }
    //   }
    // });

    Icon.loadFont(); // FOR LOAD VECTOR ICON
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
