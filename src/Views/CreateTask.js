import React, {useReducer, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Pressable,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {HeaderScreen, Input, SafeView, TextColor} from '../components';
import {colors, FaIcon} from '../themes';
import {createTaskAction, updateTaskAction} from '../redux/task/taskActions';
import Priority from '../components/Priority';
import {priorityOptions} from '../models';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  const {type, value, input, isValid} = action;
  if (type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [input]: value,
    };
    const updatedValidaties = {
      ...state.inputvalidaties,
      [input]: isValid,
    };

    let updatedFormIsValid = true;

    for (const key in updatedValidaties) {
      updatedFormIsValid = updatedFormIsValid && updatedValidaties[key];
    }

    return {
      ...state,
      inputValues: updatedValues,
      inputvalidaties: updatedValidaties,
      formIsValid: updatedFormIsValid,
    };
  }
};

const CreateTask = ({route}) => {
  const task = useMemo(() => {
    if (route.params && route.params.task) {
      return route.params.task;
    }
  }, [route]);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: task ? task.name : '',
      desc: task ? task.desc : '',
      color: task ? task.color : '',
      priority: task ? task.priority : priorityOptions[0],
    },
    inputvalidaties: {
      name: true,
      desc: true,
      color: true,
      priority: true,
    },
    formIsValid: false,
  });

  const changeInput = (input, text) => {
    let isValid = true;
    switch (input) {
      case 'name':
        if (text.length == 0) {
          isValid = false;
        }
        break;
      case 'desc':
        break;

      default:
        break;
    }

    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      input,
      isValid,
    });
  };

  const submitForm = () => {
    if (formState.formIsValid) {
      // Submit Form
      if (task) {
        // Update
        dispatch(
          updateTaskAction({
            data: {
              ...task,
              ...formState.inputValues,
            },
            goBack: true,
          }),
        );
      } else {
        // Create
        dispatch(
          createTaskAction({
            data: formState.inputValues,
          }),
        );
      }
    }
  };

  return (
    <SafeView>
      <HeaderScreen
        title={task ? 'Edit' : 'Create'}
        hasBack
        headerRight={
          <Pressable style={styles.icon} onPress={submitForm}>
            <FaIcon
              name="check"
              color={formState.formIsValid ? colors.black : colors.grayLight}
            />
          </Pressable>
        }
      />
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Task name:"
            value={formState.inputValues.name}
            onChange={changeInput.bind(this, 'name')}
            isRequired
          />
          <Input
            label="Task description:"
            maxLength={140}
            multiline
            value={formState.inputValues.desc}
            onChange={changeInput.bind(this, 'desc')}
          />
          <TextColor
            onChoose={changeInput.bind(this, 'color')}
            selectedColor={formState.inputValues.color}
          />
          <Priority
            selected={formState.inputValues.priority}
            onSelect={changeInput.bind(this, 'priority')}
          />
        </ScrollView>
      </Pressable>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray,
    padding: 16,
  },
  title: {
    fontSize: 12,
    color: colors.black,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default CreateTask;
