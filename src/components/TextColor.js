import React from 'react';
import {View, StyleSheet} from 'react-native';
import Label from './Label';
import {colors, metrics} from '../themes';
import {colorOptions} from '../models';
import ColorBox from './ColorBox';

const TextColor = ({onChoose, selectedColor}) => {
  return (
    <View style={styles.contaienr}>
      <Label text="Task color" />
      <View style={styles.colorsContaienr}>
        {colorOptions.map(item => (
          <ColorBox
            key={item.name}
            color={item.color}
            selected={selectedColor === item.color}
            onPress={() => {
              onChoose(item.color);
            }}
          />
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
