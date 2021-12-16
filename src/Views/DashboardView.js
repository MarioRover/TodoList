import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {HeaderScreen, SafeView, CreateButton} from '../components';
import {colors, fonts, metrics, shadows} from '../themes';
import {screenName} from '../utils/constans';

const DashboardPage = ({navigation}) => {
  return (
    <SafeView>
      <HeaderScreen title="All Tasks" />
      <View style={styles.screen}>
        <Text style={styles.title}>Dashboard Page</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    position: 'relative',
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.bold,
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
