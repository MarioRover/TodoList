import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderScreen, SafeView, CreateButton, TaskItem} from '../components';
import {colors, fonts, metrics, shadows} from '../themes';
import {screenName} from '../utils/constans';

const DashboardPage = ({navigation}) => {
  const list = useSelector(state => state.taskList.list);
  
  return (
    <SafeView>
      <HeaderScreen title="All Tasks" />
      <View style={styles.screen}>
        <FlatList
          data={Object.values(list)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <TaskItem item={item} />}
        />

        <View style={styles.createBtnWrapper}>
          <CreateButton
            onPress={() => navigation.navigate(screenName.create)}
          />
        </View>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  createBtnWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardPage;
