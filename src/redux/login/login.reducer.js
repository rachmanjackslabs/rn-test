import {LOGIN} from './login.styles';

const INITIAL_STATE = {
  data: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
