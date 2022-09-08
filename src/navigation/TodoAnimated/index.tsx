import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';
import theme from '../../constants/TodoAnimated/theme';

import MainScreen from '../../screens/AnimatedList/TodoAnimated/MainScreen';
import AboutScreen from '../../screens/AnimatedList/TodoAnimated/AboutScreen';
import Sidebar from '../../components/TodoAnimated/sidebar';

export type DrawerParamType = {
  TodoAnimated_Main: undefined;
  TodoAnimated_About: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamType>();

const TodoAnimatedApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TodoAnimated_Main"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}>
      <Drawer.Screen name="TodoAnimated_Main" component={MainScreen} />
      <Drawer.Screen name="TodoAnimated_About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

type Props = {
  children: React.ReactNode;
};

export default function AppContainer(props: Props) {
  return (
    <NativeBaseProvider theme={theme}>
      <TodoAnimatedApp />
    </NativeBaseProvider>
  );
}
