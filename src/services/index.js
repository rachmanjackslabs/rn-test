import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../env.json';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    const token = AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = token;
    } else {
      delete instance.defaults.headers.common.Authorization;
    }

    return config;
  },

  error => Promise.reject(error),
);

export default instance;
