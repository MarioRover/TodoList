import React, {useState} from 'react';
import {View, Pressable, StyleSheet, TextInput} from 'react-native';
import {colors, FaIcon, metrics} from '../themes';

const SearchBar = ({value, onChangeText}) => {
  const [isFocus, setIsFocus] = useState(false);

  const textInputStyle = {
    borderColor: isFocus ? colors.blue : colors.grayLight,
  };

  return (
    <View style={[styles.searchBox, textInputStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={'Search'}
        placeholderTextColor={colors.grayLight}
        style={styles.searchInput}
        returnKeyType={'search'}
        textAlign="left"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <Pressable
        style={styles.closeBtn}
        onPress={() => value.length > 0 && onChangeText('')}>
        {value.length > 0 && <FaIcon name="times" color={colors.grayDark} />}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    width: metrics.screenWidth - 32,
    height: 46,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  closeBtn: {
    width: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    fontSize: 14,
    fontFamily: fonts.normal,
    color: colors.grayDark,
    paddingLeft: 16,
    textAlignVertical: 'top',
  },
});

export default SearchBar;
