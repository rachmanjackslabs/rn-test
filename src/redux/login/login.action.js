import {LOGIN} from './login.styles';

export const login = (value, navigation) => dispatch => {
  dispatch({
    type: LOGIN,
    payload: value,
  });
  navigation.navigate('Ready');
};
