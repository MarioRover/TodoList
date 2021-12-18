import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeView, HeaderScreen, ColorBox, HistoryChanges} from '../components';
import {FaIcon, colors, fonts} from '../themes';
import {screenName} from '../utils/constans';
import { momentFormat } from '../utils/formatter';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          {task.name ? (
            <View style={styles.col}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{task.name}</Text>
            </View>
          ) : null}
          {task.priority ? (
            <View style={styles.col}>
              <Text style={styles.label}>Priority</Text>
              <Text style={styles.value}>{task.priority}</Text>
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
          {task.desc ? (
            <View style={styles.col}>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.value}>{task.desc}</Text>
            </View>
          ) : null}
          {task.created_at ? (
            <View style={styles.col}>
              <Text style={styles.label}>Created at</Text>
              <Text style={styles.value}>{momentFormat(task.created_at)}</Text>
            </View>
          ) : null}
          {task.updated_at ? (
            <View style={styles.col}>
              <Text style={styles.label}>Last Updated at</Text>
              <Text style={styles.value}>{momentFormat(task.updated_at)}</Text>
            </View>
          ) : null}
          {task.history.length ? (
            <View style={styles.col}>
              <Text style={styles.label}>Change History</Text>
              {task.history.map(el => (
                <HistoryChanges history={el} key={el.date} />
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
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
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: colors.grayDark,
    fontFamily: fonts.normal,
    textAlign: 'left',
  },
});

export default DetailsTask;
