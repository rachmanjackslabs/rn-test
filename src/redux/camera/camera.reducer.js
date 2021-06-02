import {TAKE} from './camera.styles';

const INITIAL_STATE = {
  data: null,
  images: [],
  imagesSiteType: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TAKE:
      if (state.imagesSiteType.includes(action.payload.siteType)) {
        state.images.map((data, index) => {
          if (data.siteType === action.payload.siteType) {
            state.images[index].dataImage.uri = action.payload.dataImage.uri;
          }
        });
        return {...state};
      } else {
        return {
          ...state,
          data: action.payload,
          images: [...state.images, action.payload],
          imagesSiteType: [...state.imagesSiteType, action.payload.siteType],
        };
      }
    default:
      return state;
  }
};

export default reducer;
