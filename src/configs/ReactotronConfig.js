import {DebugConfig} from './DebugConfig';
import Reactotron from 'reactotron-react-native';

if (DebugConfig.useReactotron) {
  Reactotron.configure({name: 'Hernes', host: 'localhost', port: 9090})
    .useReactNative()
    .connect();

  Reactotron.clear();
  console.tron = Reactotron;
}
