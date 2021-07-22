/* eslint-disable no-alert */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';

import {TYPOGRAPHY} from '../assets/styles/typography';

import OpenScreen from '../pages/Open';
import LoginScreen from '../pages/Login';
import ReadyScreen from '../pages/Ready';
import VehicleScreen from '../pages/Vehicle';
import ScheduleScreen from '../pages/Schedule';
import CashScreen from '../pages/Cash';
import CheckpointScreen from '../pages/Checkpoint';

import TakePictureScreen from '../components/Camera';

/** Uncomment this code to use bottom bar */
/* const Tab = createBottomTabNavigator();

Tab Navigator
const TabNavigator = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Open Page" component={OpenScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}; */

/** Component arror back button */
const ButtonBackNavigation = ({navigation}) => {
  return (
    <Icon
      name="chevron-left"
      color="white"
      onPress={() => navigation.goBack()}
    />
  );
};

/** Custom header button */
const ButtonCustom = () => {
  return (
    <Button
      onPress={() => alert('Forgot password page!')}
      type="clear"
      title="FORGOT?"
      color={TYPOGRAPHY.COLOR.White}
      titleStyle={styles.forgotTitle}
    />
  );
};

const Stack = createStackNavigator();

/** Main route */
const MainNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Open"
        component={OpenScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'GET BACK',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Primary,
          },
          headerTitleStyle: styles.headerTitle,
          headerBackTitle: ' ',
          headerTintColor: 'white',
          headerRight: () => <ButtonCustom />,
          headerLeft: () => <ButtonBackNavigation navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Ready"
        component={ReadyScreen}
        options={{
          headerLeft: false,
          title: 'HOME',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Secondary,
          },
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Stack.Screen
        name="Vehicle"
        component={VehicleScreen}
        options={{
          title: 'VEHICLE CHECK LIST',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Secondary,
          },
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => <ButtonBackNavigation navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: 'SHIFT SCHEDULE',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Secondary,
          },
          headerTitleStyle: styles.headerTitle,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={TakePictureScreen}
        options={{
          title: 'TAKE A PICTURE',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Secondary,
          },
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => <ButtonBackNavigation navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Cash"
        component={CashScreen}
        options={{
          title: 'CASH IN TRANSIT',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Secondary,
          },
          headerTitleStyle: styles.headerTitle,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Checkpoint"
        component={CheckpointScreen}
        options={{
          title: 'CHECKPOINT',
          headerStyle: {
            backgroundColor: TYPOGRAPHY.COLOR.Secondary,
          },
          headerTitleStyle: styles.headerTitle,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

const Root = createStackNavigator();

const RootNavigator = () => {
  return (
    <Root.Navigator mode="modal">
      <Root.Screen
        name="Main"
        component={MainNavigator}
        options={{headerShown: false}}
      />
    </Root.Navigator>
  );
};

/** Uncomment this code to fix bottom bar title */
/* function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'My profile';
  }
} */

const styles = StyleSheet.create({
  forgotTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    color: 'white',
  },
  headerTitle: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    color: 'white',
  },
});

export default RootNavigator;
