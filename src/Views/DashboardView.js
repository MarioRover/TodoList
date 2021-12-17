import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderScreen, SafeView, CreateButton, TaskItem} from '../components';
import {colors, FaIcon, fonts, metrics, shadows} from '../themes';
import {screenName} from '../utils/constans';
import {SwipeListView} from 'react-native-swipe-list-view';
import {deleteTaskAction} from '../redux/task/taskActions';

const DashboardPage = ({navigation}) => {
  const list = useSelector(state => state.taskList.list);
  const dispatch = useDispatch();

  const onDeleteTask = id => {
    dispatch(
      deleteTaskAction({
        id,
      }),
    );
  };

  return (
    <SafeView>
      <HeaderScreen title="All Tasks" />
      <View style={styles.screen}>
        <SwipeListView
          data={Object.values(list)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          renderHiddenItem={({item}) => renderHiddenItem(item, onDeleteTask)}
          leftOpenValue={80}
          previewRowKey={'0'}
          previewOpenDelay={3000}
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

const renderItem = ({item}) => {
  return <TaskItem item={item} />;
};

const renderHiddenItem = (item, onDeleteTask) => {
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.backRightBtn}
        onPress={() => {
          onDeleteTask(item.id);
        }}>
        <Text style={styles.backTextWhite}>
          <FaIcon name="trash" color={colors.white} />
        </Text>
      </TouchableOpacity>
    </View>
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
    paddingHorizontal: 16,
  },
  createBtnWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBack: {
    flex: 1,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 60,
    backgroundColor: colors.red,
    borderRadius: 15,
  },
  backTextWhite: {
    color: colors.white,
  },
});

export default DashboardPage;
