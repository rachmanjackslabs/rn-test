import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {TYPOGRAPHY} from '../../assets/styles/typography';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 0.7,
  },
  text: {
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    color: TYPOGRAPHY.COLOR.White,
  },
  content: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  questionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionContent: {
    flexDirection: 'row',
  },
  question: {
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    fontSize: 14,
    maxWidth: width / 2,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  scheduleButton: {
    width: wp('35%'),
  },
});

const headerStyle = StyleSheet.create({
  header: {
    flex: 0.3,
    backgroundColor: 'black',
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
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    color: 'white',
  },
  regoInputStyle: {
    color: 'white',
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    fontSize: 36,
  },
  regoInputContainer: {
    borderColor: 'transparent',
    marginTop: 10,
  },
  loginInputStyle: {
    color: 'white',
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    fontSize: 14,
  },
  loginInputContainer: {
    borderColor: 'grey',
  },
  loginContainer: {
    width: '40%',
  },
  regoInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export {styles, headerStyle};
