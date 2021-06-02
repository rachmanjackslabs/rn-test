import {ADD} from './example.styles';

const INITIAL_STATE = {
  version: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        version: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
