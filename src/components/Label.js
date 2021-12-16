import React from 'react';
import {Text,View, StyleSheet} from 'react-native';
import {fonts, colors} from '../themes';

const Label = ({text = '', isRequired = false, style}) => {
  return (
    <View style={styles.contaienr}>
      {isRequired ? <Text style={styles.required}>*</Text> : null}
      <Text style={[styles.label, style]}>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  contaienr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: fonts.bold,
    color: colors.blue,
  },
  required: {
    color: colors.red,
    fontSize: 18,
    fontFamily: fonts.bold,
    marginRight: 2
  }
});

export default Label;
