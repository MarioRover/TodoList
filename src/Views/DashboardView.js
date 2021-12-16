import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {HeaderScreen, SafeView} from '../components';
import {colors, fonts} from '../themes';
import {screenName} from '../utils/constans';

const DashboardPage = ({navigation}) => {
  return (
    <SafeView>
      <HeaderScreen title="All Tasks" />
      <View style={styles.screen}>
        <Pressable onPress={() => navigation.navigate(screenName.create)}>
          <Text style={styles.title}>Dashboard Page</Text>
        </Pressable>
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
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.bold
  },
});

export default DashboardPage;
