/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Linking,
  Platform,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, Icon, Switch, Overlay} from 'react-native-elements';
import {useSelector} from 'react-redux';

import ButtonComponent from '../components/Button';

const {width} = Dimensions.get('screen');

export default function ReadyScreen({navigation, route}) {
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

  const startShift = () => {
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

  const callNow = () => {
    setVisible(false);
    navigation.navigate('Open');
    Linking.openURL('tel:6697 5686');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.contentHeader}>
            <Text h2 h2Style={styles.h2header}>
              GOOD EVENING {loginState.data.email}
            </Text>
            <Text style={styles.headerBodyText}>
              Are you ready for your shift today?
            </Text>
          </View>
        </View>
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
                    color="#ED9923"
                    onValueChange={checkedList(index)}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              title="START SHIFT"
              onPress={startShift}
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
      </View>
      <View style={styles.footer} />

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{borderRadius: 20, width: '70%', padding: 20}}>
        <View style={{alignItems: 'flex-end'}}>
          <Icon
            name="close-circle-outline"
            size={40}
            type="ionicon"
            color="#ED9923"
            onPress={toggleOverlay}
          />
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'orange'}}>
          <Text
            h3
            h3Style={{
              fontFamily: 'Playfair Display',
            }}>
            C'mon mate!!!
          </Text>
        </View>
        <Text style={{fontFamily: 'Montserrat', marginTop: 10}}>
          You were drinking before your shift. Please call Adrian on 0123456789.
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          <ButtonComponent
            title="Call now"
            onPress={callNow}
            containerStyle={{width: wp('35%'), marginTop: hp('5%')}}
          />
        </View>
      </Overlay>
    </View>
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
    flex: 0.1,
    borderTopColor: 'grey',
    borderTopWidth: 10,
    backgroundColor: '#282828',
  },
  bodyTop: {
    flex: 0.35,
    backgroundColor: '#edb66d',
    alignItems: 'center',
    padding: 20,
  },
  bodyBottom: {
    flex: 0.65,
    justifyContent: 'space-between',
  },
  contentHeader: {
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  h2header: {
    color: 'white',
    fontFamily: 'BebasNeue',
  },
  headerBodyText: {
    color: 'white',
    fontFamily: 'Playfair Display',
    marginTop: 10,
    fontSize: 17,
  },
  listContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  questionText: {
    fontFamily: 'Bebas Neue',
    fontSize: 14,
    maxWidth: width / 2,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
