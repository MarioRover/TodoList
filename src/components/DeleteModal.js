import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import PureModal from './PureModal';
import {colors, FaIcon, fonts} from '../themes';

const DeleteModal = ({visible, onClose, onDelete}) => {
  return (
    <PureModal visible={visible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={onClose} style={styles.close}>
            <FaIcon name="times" />
          </Pressable>
          <Text style={styles.headerTitle}>Delete Task</Text>
        </View>

        <Text style={styles.title}>Do you want delete this taks?</Text>

        <View style={styles.row}>
          <Pressable onPress={onDelete} style={[styles.btn, styles.btnBlue]}>
            <Text style={styles.btnText}>Yes</Text>
          </Pressable>
          <Pressable onPress={onClose} style={[styles.btn, styles.btnRed]}>
            <Text style={styles.btnText}>No</Text>
          </Pressable>
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
    marginBottom: 20,
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
    justifyContent: 'center'
  },
  col: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 12,
  },
  close: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
  title: {
    fontSize: 16,
    color: colors.grayDark,
    fontFamily: fonts.boldExtra,
    marginBottom: 20
  },
  btn: {
    width: '30%',
    paddingVertical: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal: 10
  },
  btnText: {
    fontFamily: fonts.bold,
    color: colors.white
  },
  btnRed: {
    backgroundColor: colors.red
  },
  btnBlue: {
    backgroundColor: colors.blue
  }
});

export default DeleteModal;
