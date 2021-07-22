/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon, Text, Overlay, Image, Avatar, Input} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import Buttons from '../components/Button';

const {width} = Dimensions.get('screen');

export default function CreateScheduleScreen(props) {
  const {openList, navigation, setVisible} = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'orange',
          padding: 20,
          justifyContent: 'center',
        }}>
        <RNPickerSelect
          placeholder={{label: 'Site Check', value: ''}}
          onValueChange={value => console.log(value)}
          items={[
            {label: 'Site Unsecure', value: '1'},
            {label: 'Maintenance', value: '2'},
            {label: 'Staff Escort', value: '3'},
            {label: 'Emergency', value: '4'},
            {label: 'Suspicious Activity', value: '5'},
            {label: 'Welfare Check', value: '6'},
            {label: 'First Aid', value: '7'},
            {label: 'Other', value: '8'},
          ]}
          useNativeAndroidPickerStyle={false}
          style={{
            inputIOSContainer: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            inputIOS: {
              fontFamily: 'Montserrat',
              color: 'white',
            },
            placeholder: {
              color: 'white',
              fontFamily: 'Montserrat',
            },
            inputAndroidContainer: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            inputAndroid: {
              fontFamily: 'Montserrat',
              color: 'white',
            },
          }}
        />
        <Input
          inputStyle={styles.regoInputStyle}
          inputContainerStyle={styles.regoInputContainer}
          placeholder="ENTER ADDRESS"
          textAlign="center"
          placeholderTextColor="#FFFF"
        />
        {/* <View style={{width: 100}}>
          <DateTimePicker
            value={new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            style={{width: '100%'}}
          />
        </View> */}
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={{
            uri:
              'https://statik.tempo.co/data/2019/01/23/id_813830/813830_720.jpg',
          }}
          style={{width: 220, height: 200}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              flex: 0.2,
            }}>
            <Avatar
              size="small"
              rounded
              title="1"
              containerStyle={{backgroundColor: '#ABC873'}}
            />
          </View>
          <View
            style={{
              flex: 0.8,
            }}>
            <Input
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainer}
              placeholder="ENTER ADDRESS"
              placeholderTextColor="#FFFF"
            />
          </View>
        </View>
        <Buttons
          title="Create New Route"
          onPress={() => {
            setVisible(false);
          }}
          containerStyle={{width: wp('60%'), marginTop: hp('5%')}}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 0.9,
  },
  footer: {
    flex: 0.13,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  regoInputStyle: {
    color: 'white',
    fontFamily: 'Bebas Neue',
    fontSize: 24,
  },
  regoInputContainer: {
    borderColor: 'transparent',
    marginTop: 10,
  },
  inputStyle: {
    fontFamily: 'Bebas Neue',
    fontSize: 24,
  },
  inputContainer: {
    borderColor: 'grey',
    marginTop: 10,
  },
});
