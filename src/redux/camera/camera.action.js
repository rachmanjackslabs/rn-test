import {TAKE} from './camera.styles';

export const takeImage = value => dispatch => {
  dispatch({
    type: TAKE,
    payload: value,
  });
};
