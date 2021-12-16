import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

import taskReducer from './task/taskReducer';

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

export const store = configureStore({
  reducer: {
    taskList: persistReducer(persistConfig, taskReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const presistor = persistStore(store)