import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';

import OpenScreen from '../pages/Open';
import LoginScreen from '../pages/Login';
import ReadyScreen from '../pages/Ready';
import VehicleScreen from '../pages/Vehicle';
import ScheduleScreen from '../pages/Schedule';
import CashScreen from '../pages/Cash';
import CheckpointScreen from '../pages/Checkpoint';

import TakePictureScreen from '../components/Camera';

// const Tab = createBottomTabNavigator();

// Tab Navigator
// const TabNavigator = ({navigation, route}) => {
//   React.useLayoutEffect(() => {
//     navigation.setOptions({headerTitle: getHeaderTitle(route)});
//   }, [navigation, route]);

//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Open Page" component={OpenScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

const Stack = createStackNavigator();

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
            backgroundColor: '#3b3733',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
          headerBackTitle: ' ',
          headerTintColor: 'white',
          headerRight: () => (
            <Button
              onPress={() => alert('Forgot password page!')}
              type="clear"
              title="FORGOT?"
              color="#FFFFFF"
              titleStyle={styles.forgotTitle}
            />
          ),
          headerLeft: () => (
            <Icon
              name="chevron-left"
              color="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Ready"
        component={ReadyScreen}
        options={{
          headerLeft: false,
          title: 'HOME',
          headerStyle: {
            backgroundColor: '#edb66d',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Vehicle"
        component={VehicleScreen}
        options={{
          title: 'VEHICLE CHECK LIST',
          headerStyle: {
            backgroundColor: '#edb66d',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              color="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: 'SHIFT SCHEDULE',
          headerStyle: {
            backgroundColor: '#edb66d',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={TakePictureScreen}
        options={{
          title: 'TAKE A PICTURE',
          headerStyle: {
            backgroundColor: '#edb66d',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              color="white"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cash"
        component={CashScreen}
        options={{
          title: 'CASH IN TRANSIT',
          headerStyle: {
            backgroundColor: '#edb66d',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Checkpoint"
        component={CheckpointScreen}
        options={{
          title: 'CHECKPOINT',
          headerStyle: {
            backgroundColor: '#edb66d',
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat',
            fontSize: 10,
            color: 'white',
          },
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
      {/* <Root.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerLeft: false,
        }}
      /> */}
    </Root.Navigator>
  );
};

// Title for tab bottom bar
// function getHeaderTitle(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

//   switch (routeName) {
//     case 'Home':
//       return 'Home';
//     case 'Profile':
//       return 'My profile';
//   }
// }

const styles = StyleSheet.create({
  forgotTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    color: 'white',
  },
});

export default RootNavigator;
