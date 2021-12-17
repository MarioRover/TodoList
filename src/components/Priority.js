import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
import Label from './Label';
import {colors, FaIcon, fonts} from '../themes';
import {priorityOptions} from '../models';

const Priority = ({selected, onSelect}) => {
  const openAnimValue = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const openAnimInterpolate = openAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 250],
  });

  const handleOpenPriority = () => {
    Animated.timing(openAnimValue, {
      toValue: isOpen ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      setIsOpen(prevSate => !prevSate);
    });
  };

  const optionListStyle = {
    height: openAnimInterpolate,
  };

  return (
    <View style={styles.container}>
      <Label text="Task priority" />
      <Animated.View style={[styles.optionsList, optionListStyle]}>
        <Pressable onPress={handleOpenPriority} style={styles.row}>
          <Text style={[styles.label, styles.labelSelected]}>{selected}</Text>
          <FaIcon name="chevron-down" />
        </Pressable>
        {priorityOptions.map(item => (
          <Pressable
            onPress={() => {
              onSelect(item);
              handleOpenPriority()
            }}
            style={[
              styles.row,
              {
                backgroundColor: selected === item ? colors.blue : colors.white,
              },
            ]}>
            <Text style={styles.label}>{item}</Text>
          </Pressable>
        ))}
      </Animated.View>
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
    paddingHorizontal: 16,
    height: 50,
  },
  optionsList: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.grayLight,
    overflow: 'hidden',
  },
  label: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.normal,
  },
  labelSelected: {
    fontFamily: fonts.bold,
  },
});

export default Priority;
