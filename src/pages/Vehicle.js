/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, Input, CheckBox} from 'react-native-elements';

import ButtonComponent from '../components/Button';

const questionList = [
  {
    id: 1,
    question: 'PHONE FULL CHARGE',
    checked: true,
  },
  {
    id: 2,
    question: 'FUEL CARD IN CAR',
    checked: true,
  },
  {
    id: 3,
    question: 'APPROPRIATE KEYS',
    checked: false,
  },
  {
    id: 4,
    question: 'CHECK OFF',
    checked: false,
  },
  {
    id: 5,
    question: 'CHECK LIGHTS & HORN',
    checked: false,
  },
  {
    id: 6,
    question: 'CHECK FOR FLAT TYRES',
    checked: false,
  },
  {
    id: 7,
    question: 'DAMAGE TO CAR',
    checked: false,
  },
  {
    id: 8,
    question: 'WINDSCREEN DAMAGE',
    checked: false,
  },
  {
    id: 9,
    question: 'WINDSCREEN WIPERS',
    checked: false,
  },
  {
    id: 10,
    question: 'LOCK/CHAINS IN CAR',
    checked: false,
  },
];

const {width} = Dimensions.get('screen');

export default function VehicleScreen({navigation}) {
  const [question, setQuestion] = useState(questionList);

  const checkedList = index => () => {
    let newArr = [...questionList];
    newArr[index].checked = !newArr[index].checked;

    setQuestion(newArr);
  };

  const seeSchedule = () => {
    navigation.navigate('Schedule');
  };

  const renderItem = ({item, index, separators}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Bebas Neue',
              fontSize: 14,
              maxWidth: width / 2,
            }}>
            {item.question}
          </Text>
          <Text style={{color: 'orange'}}> :</Text>
        </View>
        <CheckBox
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          checked={item.checked}
          checkedColor="#c7976b"
          onIconPress={checkedList(index)}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.rego}>
            <View style={styles.regoHeader}>
              <Text style={styles.text}>LEVI</Text>
              <Text style={styles.text}>thursday 15th of April 2021</Text>
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
            <Input
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
            />
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={question}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View
            style={{
              alignItems: 'flex-end',
              paddingHorizontal: 20,
              paddingBottom: 30,
            }}>
            <ButtonComponent
              title="SEE SCHEDULE"
              onPress={seeSchedule}
              iconRight={true}
              icon={{
                name: 'chevron-right',
                size: 15,
                color: 'white',
              }}
              containerStyle={{width: wp('35%')}}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    backgroundColor: 'black',
  },
  body: {
    flex: 0.7,
  },
  rego: {
    backgroundColor: 'grey',
    marginTop: 10,
    height: '65%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  regoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Bebas Neue',
    color: 'white',
  },
  regoInputStyle: {
    color: 'white',
    fontFamily: 'Bebas Neue',
    fontSize: 36,
  },
  regoInputContainer: {
    borderColor: 'transparent',
    marginTop: 10,
  },
  loginInputStyle: {
    color: 'white',
    fontFamily: 'Bebas Neue',
    fontSize: 14,
  },
  loginInputContainer: {
    borderColor: 'grey',
  },
  regoInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  loginContainer: {
    width: '40%',
  },
});
