import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { colors } from '../themes';

const SafeView = ({style, children}) => (
  <SafeAreaView style={{flex: 1, backgroundColor: colors.white, ...style}}>
    {children}
  </SafeAreaView>
);

export default SafeView