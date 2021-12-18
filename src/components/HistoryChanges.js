import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../themes';
import {momentFormat} from '../utils/formatter';

const HistoryChanges = ({history}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {history.date ? (
          <Text style={styles.date}>At {momentFormat(history.date)}</Text>
        ) : null}
      </View>
      {history.changes
        ? history.changes.map(el => (
            <View style={styles.changeItem}>
              <Text style={[styles.label, styles.key]}>{el.key} Changed:</Text>
              <Text style={styles.label}>From</Text>
              <Text style={styles.text}>{el.old}</Text>
              <Text style={styles.label}>To</Text>
              <Text style={styles.text}>{el.new}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.gray,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  date: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  text: {
    fontSize: 14,
    color: colors.grayDark,
    fontFamily: fonts.light,
  },
  changeItem: {
    borderTopWidth: 1,
    borderTopColor: colors.grayLight,
    padding: 10,
  },
  key: {
    color: colors.blue,
  },
});

export default HistoryChanges;
