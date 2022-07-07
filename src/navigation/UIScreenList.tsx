import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UIScreen from '../screens/UIScreenList';
import FlatListPagination from 'screens/UIScreenList/FlatListPagination';

export type UIScreenParamType = {
  UIScreen: undefined;
  BlurLoginScreen: undefined;
  FlatListPagination: undefined;
};

const StackUIScreenList = createNativeStackNavigator<UIScreenParamType>();

const UIScreenNavigator = () => {
  return (
    <StackUIScreenList.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackUIScreenList.Screen name="UIScreen" component={UIScreen} />
      <StackUIScreenList.Screen
        name="FlatListPagination"
        component={FlatListPagination}
        options={{ headerShown: false }}
      />
    </StackUIScreenList.Navigator>
  );
};

export default UIScreenNavigator;
