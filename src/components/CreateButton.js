import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {colors, FaIcon, shadows} from '../themes';

const CreateButton = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FaIcon name="plus" color={colors.white} size={20} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    ...shadows.shadow_3,
  },
});

export default CreateButton;
