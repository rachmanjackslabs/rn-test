import instance from '../../services';
import {LOGIN} from './login.styles';

export const login = payload => async dispatch => {
  try {
    const res = await instance.post('/login', payload);
    dispatch({
      type: LOGIN,
      payload: res.data.data,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};
