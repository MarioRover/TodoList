import {createAsyncThunk} from '@reduxjs/toolkit';
import navigation from '../../routes/NavigationService';

export const createTaskAction = createAsyncThunk(
  'taskList/createTask',
  ({data}) => {
    let now = new Date();
    const task = {
      ...data,
      id: Date.now(),
      created_at: now,
      updated_at: now,
      status: false,
    };
    navigation.goBack();
    return task;
  },
);

export const updateTaskAction = createAsyncThunk(
  'taskList/updateTask',
  (data, {getState}) => {
    let task = getState().taskList.list[data.id];
    if(task) {
        task = {
            ...data,
            updated_at: new Date()
        }
    }
    return task
  },
);
