import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import taskReducer from './task/taskReducer';

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      logger,
      serializableCheck: false
    }),
});
