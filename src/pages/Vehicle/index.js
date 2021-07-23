import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {Text, CheckBox} from 'react-native-elements';
import {useSelector} from 'react-redux';

import {styles} from './Style';
import Buttons from '../../components/Button';
import Header from './Header';

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

export default function VehicleScreen({navigation}) {
  const loginState = useSelector(state => state.login);

  const [question, setQuestion] = useState(questionList);

  const checkedList = index => () => {
    let newArr = [...questionList];
    newArr[index].checked = !newArr[index].checked;

    setQuestion(newArr);
  };

  const seeSchedule = () => {
    navigation.navigate('Schedule');
  };

  const renderItem = ({item, index, separators}) => (
    <View
      style={styles.questionContainer}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.questionContent}>
        <Text style={styles.question}>{item.question}</Text>
        <Text> :</Text>
      </View>
      <CheckBox
        containerStyle={styles.checkbox}
        checked={item.checked}
        checkedColor="#c7976b"
        onIconPress={checkedList(index)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header props={loginState} />

      <View style={styles.body}>
        <FlatList
          data={question}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.content}>
          <Buttons
            title="SEE SCHEDULE"
            onPress={seeSchedule}
            iconRight={true}
            icon={{
              name: 'chevron-right',
              size: 15,
              color: 'white',
            }}
            containerStyle={styles.scheduleButton}
          />
        </View>
      </View>
    </View>
  );
}
