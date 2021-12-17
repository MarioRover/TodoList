import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import PureModal from './PureModal';
import CheckBox from './CheckBox';
import {colors, FaIcon, fonts} from '../themes';
import {priorityOptions} from '../models';

const FilterModal = ({visible, onClose, filters, handleFilters}) => {
  return (
    <PureModal visible={visible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={onClose} style={styles.close}>
            <FaIcon name="times" />
          </Pressable>
          <Text style={styles.headerTitle}>Filters</Text>
        </View>

        <View style={styles.col}>
          <Text style={styles.title}>Status</Text>
          <CheckBox
            title="Just tasks done"
            value={filters.status}
            onPress={() => handleFilters('status', null)}
          />
        </View>
        <View style={styles.col}>
          <Text style={styles.title}>Priority</Text>
          {priorityOptions.map(item => (
            <View style={styles.margin} key={item}>
              <CheckBox
                title={item}
                value={filters.priorites.includes(item)}
                onPress={() => handleFilters('priorites', item)}
              />
            </View>
          ))}
        </View>
      </View>
    </PureModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: colors.grayDark,
    fontFamily: fonts.boldExtra,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 12,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
  },
  title: {
    fontSize: 16,
    color: colors.grayDark,
    fontFamily: fonts.boldExtra,
    marginBottom: 5
  },
  margin: {
    marginBottom: 5,
  },
});

export default FilterModal;
