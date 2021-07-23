import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 0.9,
  },
  footer: {
    flex: 0.13,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  avatar: {
    flex: 0.15,
  },
  content: {
    marginLeft: 10,
    flexDirection: 'row',
    flex: 0.85,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  contentBody: {flex: 0.9},
  contentTitle: {
    fontFamily: 'Bebas Neue',
    fontSize: 14,
    maxWidth: width / 2,
  },
  contentType: {
    fontFamily: 'Montserrat',
    fontSize: 7,
    maxWidth: width / 2,
  },
  contentTime: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    maxWidth: width / 2,
    marginLeft: 20,
  },
});

const viewStyle = StyleSheet.create({
  overlay: {
    width: '70%',
    padding: 0,
  },
  headerContent: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 20,
    justifyContent: 'center',
  },
  headerTitleType: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    color: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Bebas Neue',
    color: 'white',
  },
  headerTime: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: 'white',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 200,
  },
  body: {
    flexDirection: 'row',
    marginTop: 20,
  },
  avatar: {
    flex: 0.2,
  },
  bodyContent: {
    flex: 0.8,
  },
  bodyText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    maxWidth: width / 2,
  },
  buttonArrived: {
    width: wp('30%'),
    marginTop: hp('5%'),
  },
  buttonCreate: {
    width: wp('50%'),
    marginTop: hp('5%'),
  },
  avatarAddSchedule: {
    backgroundColor: '#ED2AB6',
  },
  addressInputStyle: {
    color: 'white',
    fontFamily: 'Bebas Neue',
    fontSize: 24,
  },
  addressInputContainer: {
    borderColor: 'transparent',
    marginTop: 10,
  },
  inputStyle: {
    fontFamily: 'Bebas Neue',
    fontSize: 24,
  },
  inputContainer: {
    borderColor: 'grey',
    marginTop: 10,
  },
});

export {styles, viewStyle};
