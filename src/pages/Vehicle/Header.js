import React from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {Text, Input} from 'react-native-elements';

import {headerStyle as styles} from './Style';

const FormInput = ({
  inputStyle,
  inputContainerStyle,
  placeholder,
  ...props
}) => {
  return (
    <Input
      inputStyle={styles.loginInputStyle}
      inputContainerStyle={styles.loginInputContainer}
      placeholder={placeholder}
      textAlign="center"
      placeholderTextColor="#AAAAAA"
      containerStyle={styles.loginContainer}
      {...props}
    />
  );
};

const Header = ({props}) => {
  return (
    <KeyboardAvoidingView
      style={styles.header}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.rego}>
        <View style={styles.regoHeader}>
          <Text style={styles.text}>{props.data.user_name}</Text>
          <Text style={styles.text}>{new Date().toDateString()}</Text>
        </View>
        <Input
          inputStyle={styles.regoInputStyle}
          inputContainerStyle={styles.regoInputContainer}
          placeholder="INPUT REGO"
          textAlign="center"
          placeholderTextColor="#AAAAAA"
        />
      </View>
      <View style={styles.regoInput}>
        <FormInput placeholder="ODD START" />

        <FormInput placeholder="ODD FINISH" />
        {/* <Input
          inputStyle={styles.loginInputStyle}
          inputContainerStyle={styles.loginInputContainer}
          placeholder="ODD START"
          textAlign="center"
          placeholderTextColor="#AAAAAA"
          containerStyle={styles.loginContainer}
        />
        <Input
          inputStyle={styles.loginInputStyle}
          inputContainerStyle={styles.loginInputContainer}
          placeholder="ODD FINISH"
          textAlign="center"
          placeholderTextColor="#AAAAAA"
          containerStyle={styles.loginContainer}
        /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Header;
