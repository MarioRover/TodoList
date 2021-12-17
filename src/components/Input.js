import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Label from './Label';
import {colors, fonts, metrics} from '../themes';

const Input = ({
  label,
  value,
  onChange,
  maxLength = 40,
  multiline = false,
  isRequired,
  placeholder,
  returnKeyType = 'next'
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const textInputStyle = {
    textAlignVertical: multiline ? 'top' : 'center',
    borderColor: isFocus ? colors.blue : colors.grayLight,
  };

  return (
    <View style={styles.container}>
      {label ? <Label text={label} isRequired={isRequired} /> : null}
      <TextInput
        value={value}
        onChangeText={onChange}
        returnKeyType={returnKeyType}
        style={[styles.textInput, textInputStyle]}
        underlineColorAndroid={colors.white}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={multiline ? 5 : 1}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={colors.grayLight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  textInput: {
    width: metrics.screenWidth - 32,
    backgroundColor: colors.white,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    fontFamily: fonts.normal,
    color: colors.grayDark
  },
});

export default Input;
