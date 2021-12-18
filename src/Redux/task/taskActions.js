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
      history: [],
    };
    navigation.goBack();
    return task;
  },
);

export const updateTaskAction = createAsyncThunk(
  'taskList/updateTask',
  ({data, goBack = false}, {getState}) => {
    let now = new Date();
    let task = getState().taskList.list[data.id];
    if (task) {
      let history = [...task.history];
      let changes = [];

      if (task.status !== data.status) {
        changes.push({
          key: 'Status',
          old: task.status,
          new: data.status,
        });
      }

      if (task.name !== data.name) {
        changes.push({
          key: 'Name',
          old: task.name,
          new: data.name,
        });
      }

      if (task.desc !== data.desc) {
        changes.push({
          key: 'Description',
          old: task.desc,
          new: data.desc,
        });
      }

      if (task.color !== data.color) {
        changes.push({
          key: 'Color',
          old: task.color,
          new: data.color,
        });
      }

      if (task.priority !== data.priority) {
        changes.push({
          key: 'Priority',
          old: task.priority,
          new: data.priority,
        });
      }

      if (changes.length) {
        history.push({
          date: now,
          changes,
        });
      }

      task = {
        ...data,
        updated_at: now,
        history,
      };
    }
    if (goBack) {
      navigation.goBack();
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
