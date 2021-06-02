import {ADD} from './example.styles';

export const add = value => dispatch => {
  dispatch({
    type: ADD,
    payload: value,
  });
};
