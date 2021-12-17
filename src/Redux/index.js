import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

import taskReducer from './task/taskReducer';
import config from '../utils/config';

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

let middleware = []
if(config.debug) {
  middleware.push(logger)
}

export const store = configureStore({
  reducer: {
    taskList: persistReducer(persistConfig, taskReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const presistor = persistStore(store)