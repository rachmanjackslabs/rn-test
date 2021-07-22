import {StyleSheet} from 'react-native';
import {TYPOGRAPHY} from '../../assets/styles/typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Black,
  },
  content: {
    flex: 0.9,
  },
  contentTop: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  text: {
    color: TYPOGRAPHY.COLOR.White,
    paddingTop: '5%',
    fontFamily: TYPOGRAPHY.FONT.Montserrat,
    fontSize: 12,
  },
  logo: {
    width: 225,
    height: 225,
  },
  title: {
    marginTop: hp('5%'),
  },
  button: {
    width: wp('85%'),
  },
});

export default styles;
