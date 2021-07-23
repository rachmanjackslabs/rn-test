import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Overlay, Input, Avatar, Image} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import {viewStyle as styles} from './Style';
import Buttons from '../../components/Button';

const AddSchedule = ({visibility, onPress}) => (
  <Overlay
    isVisible={visibility}
    onBackdropPress={() => onPress(false)}
    overlayStyle={styles.overlay}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.headerContent}>
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
          inputStyle={styles.addressInputStyle}
          inputContainerStyle={styles.addressInputContainer}
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
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://statik.tempo.co/data/2019/01/23/id_813830/813830_720.jpg',
          }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.body}>
          <View style={styles.avatar}>
            <Avatar
              size="small"
              rounded
              title="C"
              containerStyle={styles.avatarAddSchedule}
            />
          </View>
          <View style={styles.bodyContent}>
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
            onPress(false);
          }}
          containerStyle={styles.buttonCreate}
        />
      </View>
    </KeyboardAvoidingView>
  </Overlay>
);

export default AddSchedule;
