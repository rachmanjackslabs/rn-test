import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Text, Input, CheckBox, Icon} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as yup from 'yup';
import {sha256} from 'js-sha256';

import styles from './Style';
import {login} from '../../redux/login/login.action';

import Buttons from '../../components/Button';
import Call from '../../components/Call';
import {TYPOGRAPHY} from '../../assets/styles/typography';

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

const FormLogin = ({onChange, onBlur, value, errors, touched, ...props}) => (
  <>
    <Input
      inputStyle={styles.loginInputStyle}
      inputContainerStyle={styles.loginInputContainer}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      {...props}
    />

    {errors && touched && <Text style={styles.invalidText}>{errors}</Text>}
  </>
);

const catchError = ({data}) => {
  let errMessage = '';
  Object.keys(data.errors).map(val => {
    errMessage = data.errors[val][0];
  });

  return Alert.alert(data.message, errMessage);
};

export default function LoginScreen({navigation}) {
  const [checked, setChecked] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const loginFunction = values => {
    setLoading(true);

    const payload = {
      email: values.email,
      password: sha256(values.password),
    };

    dispatch(login(payload)).then(response => {
      const {data} = response;
      if (data.success) {
        navigation.navigate('Ready');
      } else {
        let errMessage = '';
        Object.keys(data.errors).map(val => {
          errMessage = data.errors[val][0];
        });

        Alert.alert(data.message, errMessage);
      }
      setLoading(false);
    });
  };

  const handleIsPassword = () => {
    setIsPassword(value => !value);
  };

  const handleRememberMe = () => {
    setChecked(value => !value);
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
          initialValues={{
            email: 'irwan@discoverydata.com.au',
            password: '12345678',
          }}
          onSubmit={loginFunction}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.loginInput}>
                <FormLogin
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errors={errors.email}
                  touched={touched.email}
                />
                <FormLogin
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={isPassword}
                  rightIcon={
                    <Icon
                      name={isPassword ? 'eye-off-outline' : 'eye-outline'}
                      type="ionicon"
                      size={24}
                      color="white"
                      onPress={handleIsPassword}
                    />
                  }
                  errors={errors.password}
                  touched={touched.password}
                />
              </View>
              <CheckBox
                title="REMEMBER ME?"
                checked={checked}
                onPress={handleRememberMe}
                containerStyle={styles.rememberContainer}
                textStyle={styles.rememberText}
                checkedColor={TYPOGRAPHY.COLOR.Default}
              />
              <View style={styles.buttonContainer}>
                <Buttons
                  loading={loading}
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
