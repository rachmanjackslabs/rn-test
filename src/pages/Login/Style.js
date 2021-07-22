import {StyleSheet} from 'react-native';
import {TYPOGRAPHY} from '../../assets/styles/typography';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    borderTopColor: TYPOGRAPHY.COLOR.White,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  title: {
    color: TYPOGRAPHY.COLOR.White,
    paddingTop: hp('5%'),
    fontFamily: TYPOGRAPHY.FONT.Playfair,
  },
  loginInput: {
    marginTop: hp('5%'),
  },
  loginInputStyle: {
    color: TYPOGRAPHY.COLOR.White,
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
  },
  loginInputContainer: {
    borderColor: TYPOGRAPHY.COLOR.White,
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
  buttonContainer: {
    alignItems: 'center',
  },
});

export default styles;
