import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Label from './Label';
import {colors, FaIcon, fonts, metrics} from '../themes';
import {priorityOptions} from '../models';

const Priority = ({selected, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Label text="Task priority" />
      <View style={styles.chooseBox}>
        <Pressable
          onPress={() => setIsOpen(prevState => !prevState)}
          style={styles.row}>
          <Text style={styles.label}>{selected}</Text>
          <FaIcon name="chevron-down" />
        </Pressable>
        {isOpen &&
          priorityOptions.map(item => (
            <Pressable
              onPress={() => {
                onSelect(item);
                setIsOpen(false);
              }}
              style={[
                styles.row,
                {
                  backgroundColor:
                    selected === item ? colors.blue : colors.white,
                },
              ]}>
              <Text style={styles.label}>{item}</Text>
            </Pressable>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 30,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  chooseBox: {
    flexDirection: 'column',
    width: metrics.screenWidth - 32,
    backgroundColor: colors.white,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.grayLight,
  },
  label: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.bold,
  },
});

export default Priority;
