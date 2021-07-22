import React, {useState} from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {Text, Input, CheckBox, Icon} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {login} from '../redux/login/login.action';

import Buttons from '../components/Button';
import Call from '../components/Call';
import {TYPOGRAPHY} from '../styles/typography';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function LoginScreen({navigation}) {
  const [checked, setChecked] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const dispatch = useDispatch();

  const loginFunction = values => {
    dispatch(login(values)).then(() => {
      navigation.navigate('Ready');
    });
  };
  console.log(typeof navigation);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text h1 h1Style={styles.title}>
            Log In
          </Text>
        </View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: 'test@email.com', password: 'asdasdasd'}}
          onSubmit={values => loginFunction(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.loginInput}>
                <Input
                  inputStyle={styles.loginInputStyle}
                  inputContainerStyle={styles.loginInputContainer}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.invalidText}>{errors.email}</Text>
                )}
                <Input
                  inputStyle={styles.loginInputStyle}
                  inputContainerStyle={styles.loginInputContainer}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={isPassword}
                  rightIcon={
                    <Icon
                      name={isPassword ? 'eye-off-outline' : 'eye-outline'}
                      type="ionicon"
                      size={24}
                      color="white"
                      onPress={() => setIsPassword(!isPassword)}
                    />
                  }
                />
                {errors.password && touched.password && (
                  <Text style={styles.invalidText}>{errors.password}</Text>
                )}
              </View>
              <CheckBox
                title="REMEMBER ME?"
                checked={checked}
                onPress={() => setChecked(!checked)}
                containerStyle={styles.rememberContainer}
                textStyle={styles.rememberText}
                checkedColor={TYPOGRAPHY.COLOR.Default}
              />
              <View style={{alignItems: 'center'}}>
                <Buttons
                  title="LOGIN"
                  onPress={handleSubmit}
                  containerStyle={{width: wp('85%')}}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.footer}>
        <Call />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Primary,
  },
  content: {
    flex: 0.9,
    padding: 20,
  },
  contentHeader: {
    alignItems: 'center',
  },
  footer: {
    flex: 0.1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    paddingTop: hp('5%'),
    fontFamily: TYPOGRAPHY.FONT.Playfair,
  },
  loginInput: {
    marginTop: hp('5%'),
  },
  loginInputStyle: {
    color: 'white',
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
  },
  loginInputContainer: {
    borderColor: 'white',
  },
  rememberContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginLeft: 0,
  },
  rememberText: {
    color: 'white',
    fontFamily: TYPOGRAPHY.FONT.Montserrat,
  },
  invalidText: {
    fontSize: 10,
    color: 'red',
    paddingLeft: 10,
  },
});
