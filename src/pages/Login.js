import React, {useState} from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {Text, Input, CheckBox, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {login} from '../redux/login/login.action';

import ButtonComponent from '../components/Button';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const makeCall = () => {
    Linking.openURL('tel:6697 5686');
  };

  const loginFunction = values => {
    dispatch(login(values, navigation));
  };

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
                checkedColor="#c7976b"
              />
              <View style={{alignItems: 'center'}}>
                <ButtonComponent title="LOGIN" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText} onPress={makeCall}>
          need an account? Call 6697 5686
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3733',
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
  footerText: {
    color: 'white',
    paddingTop: hp('2%'),
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  title: {
    color: 'white',
    paddingTop: hp('5%'),
    fontFamily: 'Playfair Display',
  },
  loginInput: {
    marginTop: hp('5%'),
  },
  loginInputStyle: {
    color: 'white',
    fontFamily: 'Bebas Neue',
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
    fontFamily: 'Montserrat',
  },
  invalidText: {
    fontSize: 10,
    color: 'red',
    paddingLeft: 10,
  },
});
