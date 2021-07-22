import React, {useState} from 'react';
import {View, Linking} from 'react-native';
import {Text, Icon, Switch} from 'react-native-elements';
import {useSelector} from 'react-redux';

import {styles} from './Style';
import Buttons from '../../components/Button';

import Header from './Header';
import Alert from './Alert';
import {TYPOGRAPHY} from '../../assets/styles/typography';

export default function ReadyScreen({navigation}) {
  const [questionList, setQuestionList] = useState([
    {
      id: 1,
      question: 'Have you had any alcohol in the last 24-hours?',
      checked: true,
      color: 'grey',
    },
    {
      id: 2,
      question: 'Have you slept at least 8 hours in the past 24 hours?',
      checked: true,
      color: 'grey',
    },
    {
      id: 3,
      question:
        'Have you had at leas 10 hours break between shifts at herne’s security?',
      checked: true,
      color: 'grey',
    },
  ]);
  const [visible, setVisible] = useState(false);

  const loginState = useSelector(state => state.login);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const checkedList = index => () => {
    let newArr = [...questionList];
    newArr[index].checked = !newArr[index].checked;

    setQuestionList(newArr);
  };

  const handleCallAdmin = () => {
    setVisible(false);
    navigation.navigate('Open');
    Linking.openURL('tel:6697 5686');
  };

  const handleStartShift = () => {
    const error = [];
    questionList.map(data => {
      if (!data.checked) {
        error.push(data);
      }
    });

    if (error.length > 0) {
      setVisible(true);
    } else {
      navigation.navigate('Vehicle');
    }
  };

  return (
    <>
      <View style={styles.body}>
        <Header state={loginState} />

        <View style={styles.bodyBottom}>
          <View>
            {questionList.map((data, index) => {
              return (
                <View style={styles.listContainer} key={data.id}>
                  <View style={styles.listContent}>
                    <Icon name="circle" size={40} color={data.color} />
                    <Text style={styles.questionText}>{data.question}</Text>
                  </View>
                  <Switch
                    value={data.checked}
                    color={TYPOGRAPHY.COLOR.Default}
                    onValueChange={checkedList(index)}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.buttonContainer}>
            <Buttons
              title="START SHIFT"
              onPress={handleStartShift}
              iconRight={true}
              icon={{
                name: 'chevron-right',
                size: 15,
                color: 'white',
              }}
              containerStyle={styles.buttonShift}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer} />

      <Alert
        visible={visible}
        onPress={toggleOverlay}
        onPressCall={handleCallAdmin}
      />
    </>
  );
}
