import * as React from 'react';
import {
  NavigationContainer,
  CompositeNavigationProp,
  RouteProp,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import SampleAppList from './SampleAppList';
import AnimatedList from './AnimatedList';
import SampleLibraryList from './SampleLibraryList';
import UIScreenList from './UIScreenList';

export type HomeParamType = {
  HomeScreen: undefined;
  SampleAppList: undefined;
  AnimatedList: undefined;
  SampleLibraryList: undefined;
  UIScreenList: undefined;
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

// export type RootParamType = {};

// export type ReasonDiscontinueNavigationProps = CompositeNavigationProp<
//   NativeStackNavigationProp<RootParamType, 'ReasonDiscontinueModal'>,
//   CompositeNavigationProp<
//     BottomTabNavigationProp<TabParamType, 'Home'>,
//     NativeStackNavigationProp<HomeParamType, 'MedicationList'>
//   >
// >;

// export type ReasonDiscontinueModalProps = {
//   navigation: ReasonDiscontinueNavigationProps;
//   route: RouteProp<RootParamType, 'ReasonDiscontinueModal'>;
// };

const Stack = createNativeStackNavigator<HomeParamType>();

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SampleAppList" component={SampleAppList} />
        <Stack.Screen name="AnimatedList" component={AnimatedList} />
        <Stack.Screen name="SampleLibraryList" component={SampleLibraryList} />
        <Stack.Screen name="UIScreenList" component={UIScreenList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
