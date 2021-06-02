import {combineReducers} from 'redux';
import exampleReducer from './example/example.reducer';

// Import your reducer here
import loginReducer from './login/login.reducer';
import cameraReducer from './camera/camera.reducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  login: loginReducer,
  camera: cameraReducer,
});

export default rootReducer;
