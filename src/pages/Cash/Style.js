import {StyleSheet} from 'react-native';

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
    borderTopWidth: 1,
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
  startButton: {
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  startButtonContainer: {
    width: '20%',
    marginTop: '5%',
  },
  startButtonText: {
    color: '#AAAAAA',
    fontFamily: 'Bebas Neue',
  },
  callButton: {
    borderRadius: 20,
    backgroundColor: '#ED9923',
  },
  callButtonContainer: {
    width: '50%',
    marginTop: '5%',
  },
  callButtonText: {
    color: 'white',
    fontFamily: 'BebasNeue',
  },
});

export {styles};
