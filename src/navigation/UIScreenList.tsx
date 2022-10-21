import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UIScreen from '../screens/UIScreenList';
// import FlatListPagination from 'screens/UIScreenList/FlatListPagination';
// import StackLayout from 'screens/UIScreenList/StackLayout';
// import StackLayout2 from 'screens/UIScreenList/StackLayout2';
// import HorizontalStackLayouts from 'screens/UIScreenList/HorizontalStackLayouts';
// import JustifyContent from 'screens/UIScreenList/JustifyContent';
// import AlignItems from 'screens/UIScreenList/AlignItems';
// import GridLayout from 'screens/UIScreenList/GridLayout';
// import AbsoluteLayout from 'screens/UIScreenList/AbsoluteLayout';
// import AbsoluteLayout2 from 'screens/UIScreenList/AbsoluteLayout2';
import {
  CustomModal,
  FlatListPagination,
  StackLayout,
  StackLayout2,
  HorizontalStackLayouts,
  JustifyContent,
  AbsoluteLayout,
  AbsoluteLayout2,
  AlignItems,
  GridLayout,
} from 'screens';

export type UIScreenParamType = {
  UIScreen: undefined;
  BlurLoginScreen: undefined;
  FlatListPagination: undefined;
  StackLayout: undefined;
  StackLayout2: undefined;
  HorizontalStackLayouts: undefined;
  JustifyContent: undefined;
  AlignItems: undefined;
  GridLayout: undefined;
  AbsoluteLayout: undefined;
  AbsoluteLayout2: undefined;
  CustomModal: undefined;
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
      <StackUIScreenList.Screen
        name="StackLayout"
        component={StackLayout}
        options={{ headerShown: false }}
      />
      <StackUIScreenList.Screen
        name="StackLayout2"
        component={StackLayout2}
        options={{ headerShown: false }}
      />

      <StackUIScreenList.Screen
        name="HorizontalStackLayouts"
        component={HorizontalStackLayouts}
        options={{ headerShown: false }}
      />

      <StackUIScreenList.Screen
        name="JustifyContent"
        component={JustifyContent}
        options={{ headerShown: false }}
      />

      <StackUIScreenList.Screen
        name="AlignItems"
        component={AlignItems}
        options={{ headerShown: false }}
      />

      <StackUIScreenList.Screen
        name="GridLayout"
        component={GridLayout}
        options={{ headerShown: false }}
      />
      <StackUIScreenList.Screen
        name="AbsoluteLayout"
        component={AbsoluteLayout}
        options={{ headerShown: false }}
      />

      <StackUIScreenList.Screen
        name="AbsoluteLayout2"
        component={AbsoluteLayout2}
        options={{ headerShown: false }}
      />
      <StackUIScreenList.Screen
        name="CustomModal"
        component={CustomModal}
        options={{ headerShown: false }}
      />
    </StackUIScreenList.Navigator>
  );
};

export default UIScreenNavigator;
