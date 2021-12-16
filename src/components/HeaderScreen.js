import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, shadows} from '../themes';
import {ChevronLeft} from '../themes/icons';

const HeaderScreen = ({title, hasBack = false, onBack}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrap}>
      <View>
        {hasBack ? (
          <Pressable onPress={() => (onBack ? onBack : navigation.goBack())}>
            <ChevronLeft />
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.shadow_4,
  },
  headerTitle: {
    fontSize: 16,
    // fontFamily: fonts.bold,
    color: colors.grayDark,
  },
  button: {
    marginRight: 16,
  },
});

export default HeaderScreen;
