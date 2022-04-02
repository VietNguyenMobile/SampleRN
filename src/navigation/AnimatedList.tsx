import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type AnimatedParamType = {
  NavAnimatedList: undefined;
  TodoAnimated: undefined;
};

import TodoAnimated from './TodoAnimated';
import NavAnimatedList from '../screens/AnimatedList';

const StackAnimatedList = createNativeStackNavigator<AnimatedParamType>();

const AnimatedListNavigator = () => {
  return (
    <StackAnimatedList.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackAnimatedList.Screen
        name="NavAnimatedList"
        component={NavAnimatedList}
      />
      <StackAnimatedList.Screen name="TodoAnimated" component={TodoAnimated} />
    </StackAnimatedList.Navigator>
  );
};

export default AnimatedListNavigator;
