import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import { colors, metrics } from '../themes';

const modalWidth = metrics.screenWidth - 37 * 2;

const PureModal = ({children, visible, type = 'fade'}) => {
  return (
    visible && (
      <View style={styles.centeredView}>
        <Modal animationType={type} transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>{children}</View>
          </View>
        </Modal>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.grayBackground,
  },
  modalView: {
    flexDirection: 'column',
    width: modalWidth,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
  },
});

export default PureModal

