import {StyleSheet, Dimensions} from 'react-native';
import {TYPOGRAPHY} from '../../assets/styles/typography';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  body: {
    flex: 0.9,
  },
  footer: {
    flex: 0.1,
    backgroundColor: TYPOGRAPHY.COLOR.Grey,
  },
  bodyBottom: {
    flex: 0.65,
    justifyContent: 'space-between',
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
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    fontSize: 14,
    maxWidth: width / 2,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonShift: {
    width: wp('35%'),
  },
});

const headerStyle = StyleSheet.create({
  bodyTop: {
    flex: 0.35,
    backgroundColor: TYPOGRAPHY.COLOR.Secondary,
    alignItems: 'center',
    padding: 20,
  },
  contentHeader: {
    borderColor: TYPOGRAPHY.COLOR.White,
    borderWidth: 1,
    width: wp('90%'),
    height: hp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  h2header: {
    color: TYPOGRAPHY.COLOR.White,
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
  },
  headerBodyText: {
    color: 'white',
    fontFamily: TYPOGRAPHY.FONT.Playfair,
    marginTop: 10,
    fontSize: 17,
  },
});

const alertStyle = StyleSheet.create({
  title: {
    fontFamily: TYPOGRAPHY.FONT.Playfair,
  },
  overlay: {
    borderRadius: 20,
    width: '70%',
    padding: 20,
  },
  content: {
    fontFamily: TYPOGRAPHY.FONT.Montserrat,
    marginTop: 10,
  },
  callButton: {
    width: wp('35%'),
    marginTop: hp('5%'),
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  containerTitle: {
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },
  containerCall: {
    alignItems: 'flex-end',
  },
});

export {styles, alertStyle, headerStyle};
