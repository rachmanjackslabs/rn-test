import {LOGIN} from './login.styles';

export const login = value => dispatch => {
  dispatch({
    type: LOGIN,
    payload: value,
  });

  return;
};
