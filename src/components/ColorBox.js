import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import { FaIcon, colors } from '../themes';

const ColorBox = ({color, selected, onPress}) => {
  return (
    <Pressable
      style={[styles.colorBox, {backgroundColor: color}]}
      onPress={onPress}>
      {selected ? (
        <FaIcon name="check" color={colors.white} />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    marginHorizontal: 5,
  },
});

export default ColorBox;
