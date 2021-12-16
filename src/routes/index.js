import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import { DashboardPage, CreateTask } from '../views';
import {screenName} from '../utils/constans';
import {colors} from '../themes';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName={screenName.dashboard}
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name={screenName.dashboard} component={DashboardPage} />
        <Stack.Screen name={screenName.create} component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
