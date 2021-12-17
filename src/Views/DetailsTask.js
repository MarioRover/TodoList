import React, {useMemo} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeView, HeaderScreen, ColorBox} from '../components';
import {FaIcon, colors, fonts} from '../themes';
import {screenName} from '../utils/constans';

const DetailsTask = ({navigation, route}) => {
  const task = useSelector(state => {
    if (route.params && route.params.id) {
      return state.taskList.list[route.params.id];
    }
  });

  return (
    <SafeView>
      <HeaderScreen
        title="Details"
        hasBack
        headerRight={
          <Pressable
            style={styles.icon}
            onPress={() =>
              navigation.navigate(screenName.create, {
                task,
              })
            }>
            <FaIcon name="edit" />
          </Pressable>
        }
      />
      <View style={styles.screen}>
        {task.name ? (
          <View style={styles.col}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{task.name}</Text>
          </View>
        ) : null}
        {task.desc ? (
          <View style={styles.col}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>{task.desc}</Text>
          </View>
        ) : null}
        {task.color ? (
          <View style={styles.col}>
            <Text style={styles.label}>Color</Text>
            <Text style={styles.value}>
              <ColorBox color={task.color} />
            </Text>
          </View>
        ) : null}
        {task.priority ? (
          <View style={styles.col}>
            <Text style={styles.label}>Priority</Text>
            <Text style={styles.value}>{task.priority}</Text>
          </View>
        ) : null}
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  col: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    color: colors.black,
    fontFamily: fonts.boldExtra,
    textAlign: 'left',
  },
  value: {
    fontSize: 16,
    color: colors.grayDark,
    fontFamily: fonts.normal,
    textAlign: 'left',
  },
});

export default DetailsTask;
