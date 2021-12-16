import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Pressable,
  ScrollView,
} from 'react-native';
import {HeaderScreen, Input, SafeView, TextColor} from '../components';
import {colors, FaIcon} from '../themes';

const CreateTask = () => {
  return (
    <SafeView>
      <HeaderScreen title="Create New" hasBack headerRight={
        <FaIcon name="check" />
      }/>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.screen}>
        <ScrollView>
          <Input label="Task name:" />
          <Input
            label="Task description:"
            maxLength={140}
            multiline
            height={200}
          />
          <TextColor />
        </ScrollView>
      </Pressable>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray,
    padding: 16,
  },
  title: {
    fontSize: 12,
    color: colors.black,
  },
});

export default CreateTask;
