import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, shadows, fonts, metrics} from '../themes';
import { FaIcon } from '../themes';

const HeaderScreen = ({title, hasBack = false, onBack, headerRight}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrap}>
      <View>
        {hasBack ? (
          <Pressable onPress={() => (onBack ? onBack : navigation.goBack())}>
            <FaIcon name="chevron-left" />
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
      <View>
        {headerRight}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    width: metrics.screenWidth,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.shadow_4,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.grayDark,
  },
  button: {
    marginRight: 16,
  },
});

export default HeaderScreen;
