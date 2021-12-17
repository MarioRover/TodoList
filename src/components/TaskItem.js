import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateTaskAction} from '../redux/task/taskActions';
import {colors, FaIcon, fonts, metrics} from '../themes';

const TaskItem = ({item}) => {
  const dispatch = useDispatch();

  const itemStyle = {
    backgroundColor: item.color ? item.color : colors.white,
  };

  const textStyle = {
    color: item.color ? colors.white : colors.black,
  };

  return (
    <View style={[styles.contaienr, itemStyle]}>
      <Text style={[styles.text, textStyle]}>{item.name}</Text>
      <Checkbox
        status={item.status}
        onPress={() => {
          dispatch(
            updateTaskAction({
              data: {
                ...item,
                status: !item.status,
              }
            }),
          );
        }}
      />
    </View>
  );
};

const Checkbox = ({status, onPress}) => {
  const checkboxStyle = {
    backgroundColor: status ? colors.green : null,
  };
  return (
    <Pressable style={[styles.checkbox, checkboxStyle]} onPress={onPress}>
      {status ? <FaIcon name="check" color={colors.white} /> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contaienr: {
    width: metrics.screenWidth - 32,
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
    fontFamily: fonts.normal,
    fontSize: 16,
  },
  checkbox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 50,
  },
});

export default TaskItem;
