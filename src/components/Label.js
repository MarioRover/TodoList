import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../themes';

const Label = ({text = '', style}) => {
  return <Text style={[styles.label, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: fonts.bold,
    marginBottom: 5,
    color: colors.blue,
  },
});

export default Label;
