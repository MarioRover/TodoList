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
  ({data, goBack = false}, {getState}) => {
    let task = getState().taskList.list[data.id];
    if (task) {
      task = {
        ...data,
        updated_at: new Date(),
      };
    }
    if(goBack) {
      navigation.goBack()
    }
    return task;
  },
);

export const deleteTaskAction = createAsyncThunk(
  'taskList/deleteTask',
  ({id}, {getState}) => {
    let newList = {...getState().taskList.list};
    if (newList[id]) {
      delete newList[id];
    }
    return newList;
  },
);
