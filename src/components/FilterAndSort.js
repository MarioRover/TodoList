import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors, FaIcon, fonts, metrics} from '../themes';

const FilterAndSort = ({sort, onSortPress, onFilterPress}) => {
  return (
    <View style={styles.row}>
      <Pressable style={styles.item} onPress={onSortPress}>
        <FaIcon size={16} name="sort" />
        <Text style={styles.label}>{sort}</Text>
      </Pressable>
      <Pressable style={styles.item} onPress={onFilterPress}>
        <FaIcon size={16} name="filter" />
        <Text style={styles.label}>Filter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: metrics.screenWidth - 32,
    marginBottom: 18
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12
  },
  label: {
    color: colors.black,
    fontFamily: fonts.bold,
    marginLeft: 5,
    fontSize: 16
  },
});

export default FilterAndSort;
