import {LOGIN} from './login.styles';

const INITIAL_STATE = {
  login: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
