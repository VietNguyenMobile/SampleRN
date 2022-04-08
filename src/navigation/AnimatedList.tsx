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
  DoubleTapToHeartAnimation: undefined;
};

import TodoAnimated from './TodoAnimated';
import NavAnimatedList from '../screens/AnimatedList';
import DoubleTapToHeartAnimation from '../screens/DoubleTapToHeartAnimation';

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
      <StackAnimatedList.Screen
        name="DoubleTapToHeartAnimation"
        component={DoubleTapToHeartAnimation}
      />
    </StackAnimatedList.Navigator>
  );
};

export default AnimatedListNavigator;
