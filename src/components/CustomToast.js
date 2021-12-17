import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {colors, FaIcon, fonts, shadows} from '../themes';

const {width} = Dimensions.get('screen');

const CustomToast = ({type, text1, text2, ...props}) => {
  let backgroundColor;

  switch (type) {
    case 'success':
      backgroundColor = colors.green;
      break;
    case 'error':
      backgroundColor = colors.red;
      break;
    default:
      backgroundColor = colors.white;
      break;
  }

  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <View style={styles.iconWrap}>
        {type === 'success' ? (
          <FaIcon name="check-circle" color={colors.white} size={20} />
        ) : type === 'error' ? (
          <FaIcon name="times-circle" color={colors.white} size={20} />
        ) : null}
      </View>
      <View style={styles.messageBox}>
        {text1 ? <Text style={styles.text1}>{text1}</Text> : null}
        {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 32,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    ...shadows.shadow_3,
  },
  text1: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'left',
    fontFamily: fonts.bold,
  },
  text2: {
    fontSize: 14,
    color: colors.white,
    marginTop: 5,
    textAlign: 'left',
    fontFamily: fonts.normal,
  },
  iconWrap: {
    marginRight: 10
  },
});

export default CustomToast;
