/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {Text, Icon, Switch, Button} from 'react-native-elements';

import {styles} from './Style';

const {width} = Dimensions.get('screen');

export default function CashScreen() {
  const [questionList, setQuestionList] = useState([
    {
      id: 1,
      question: 'Have you signed bags off',
      checked: true,
      color: 'grey',
    },
    {
      id: 2,
      question: 'Does site ‘X’ require CHANGE RETURN',
      checked: true,
      color: 'grey',
    },
  ]);

  const checkedList = index => () => {
    let newArr = [...questionList];
    newArr[index].checked = !newArr[index].checked;

    setQuestionList(newArr);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyBottom}>
          <View>
            {questionList.map((data, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 20,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  key={data.id}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <Icon name="circle" size={40} color={data.color} />
                    <Text
                      style={{
                        fontFamily: 'Bebas Neue',
                        fontSize: 14,
                        maxWidth: width / 2,
                        marginLeft: 20,
                      }}>
                      {data.question}
                    </Text>
                  </View>
                  <Switch
                    value={data.checked}
                    color="#ED9923"
                    onValueChange={checkedList(index)}
                  />
                </View>
              );
            })}
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}>
            <Button
              buttonStyle={styles.startButton}
              titleStyle={styles.startButtonText}
              title="NEXT"
              containerStyle={styles.startButtonContainer}
              icon={{
                name: 'chevron-right',
                size: 15,
                color: '#AAAAAA',
              }}
              iconRight={true}
              onPress={() => console.log('a')}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </View>
  );
}
