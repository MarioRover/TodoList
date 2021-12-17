import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  HeaderScreen,
  SafeView,
  CreateButton,
  TaskItem,
  SearchBar,
  FilterAndSort,
} from '../components';
import {colors, FaIcon, metrics} from '../themes';
import {screenName} from '../utils/constans';
import {SwipeListView} from 'react-native-swipe-list-view';
import {deleteTaskAction} from '../redux/task/taskActions';
import { sortOptions } from '../models';

const DashboardPage = ({navigation}) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.taskList.list);

  const [searchText, setSearchText] = useState('');
  const [sortIndex, setSortType] = useState(0);

  // const [showFilter, SetShowFilter] = useState(false)

  const onDeleteTask = id => {
    dispatch(deleteTaskAction({id}));
  };

  const handleSortPress = () => {
    let index = 0;
    if (sortIndex < sortOptions.length - 1) {
      index = sortIndex + 1;
    }
    setSortType(index);
  };

  const compareSort = (a, b) => {
    switch (sortOptions[sortIndex].key) {
      case 'created_at':
        return a.id - b.id;
      case 'alphabet':
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      // case "priority":
      //   return

      default:
        return a.id - b.id;
    }
  };

  const memoizedTask = useMemo(() => {
    let data = Object.values(list);
    data.sort((a, b) => compareSort(a, b));
    data = data.filter(
      item => item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
    );
    return data;
  }, [list, sortIndex, searchText]);

  return (
    <SafeView>
      <HeaderScreen title="All Tasks" />
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.screen}>
        <SearchBar value={searchText} onChangeText={setSearchText} />
        <FilterAndSort
          sort={sortOptions[sortIndex].title}
          onSortPress={handleSortPress}
        />
        <SwipeListView
          data={memoizedTask}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderItem(item, navigation)}
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
      </Pressable>
    </SafeView>
  );
};

const renderItem = (item, navigation) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(screenName.details, {
          id: item.id,
        })
      }>
      <TaskItem item={item} />
    </Pressable>
  );
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
    padding: 16,
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
