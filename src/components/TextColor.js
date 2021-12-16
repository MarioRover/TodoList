import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Label from './Label';
import {colors, FaIcon, metrics} from '../themes';
import {colorOptions} from '../models';

const TextColor = ({onChoose}) => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <View style={styles.contaienr}>
      <Label text="Task color" />
      <View style={styles.colorsContaienr}>
        {colorOptions.map(item => (
          <Pressable
            style={[styles.colorBox, {backgroundColor: item.color}]}
            key={item.name}
            onPress={() => {
              setSelectedColor(item.name);
            //   onChoose(item.color);
            }}>
            {selectedColor === item.name ? (
              <FaIcon name="check" color={colors.white} />
            ) : null}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaienr: {
    width: metrics.screenWidth - 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  colorsContaienr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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

export default TextColor;
