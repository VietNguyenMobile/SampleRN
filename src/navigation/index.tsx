import 'react-native-gesture-handler';
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

export type HomeParamType = {
  HomeScreen: undefined;
  SampleAppList: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
