import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import { colors, fonts } from '../themes';
import { FaIcon } from '../themes';

const CheckBox = ({title, value, onPress}) => {
  const checkboxStyle = {
    backgroundColor: value ? colors.blue : colors.white,
    borderWidth: value ? 0 : 1,
  };

  return (
    <Pressable style={styles.row} onPress={onPress}>
      <View style={[styles.checkbox, checkboxStyle]} >
        {value ? <FaIcon name="check" color={colors.white} size={10} /> : null}
      </View>
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.grayDark,
    fontFamily: fonts.bold,
    marginLeft: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default CheckBox
