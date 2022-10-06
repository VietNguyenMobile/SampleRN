import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SampleLibrary from '../screens/SampleLibraryList';
import ManageStateMobxScreen from 'screens/SampleLibraryList/ManageStateMobx/manage-state-mobx-screen';
import ManageStateMobxLiteScreen from 'screens/SampleLibraryList/ManageStateMobx/manage-state-mobx-lite-screen';
import VisionCamera from 'screens/SampleLibraryList/VisionCamera/VisionCamera';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
} from '../constants/NikeStoreApp/constants';

export type SampleLibraryListParamType = {
  SampleLibrary: undefined;
  ManageStateMobx: undefined;
  ManageStateMobxLite: undefined;
  VisionCamera: undefined;
};

const StackSampleLibraryList =
  createNativeStackNavigator<SampleLibraryListParamType>();

const SampleLibraryNavigator = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<SampleAppParamType>>();


  return (
    <StackSampleLibraryList.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackSampleLibraryList.Screen
        name="SampleLibrary"
        component={SampleLibrary}
      />
      <StackSampleLibraryList.Screen
        name="ManageStateMobx"
        component={ManageStateMobxScreen}
      />
      <StackSampleLibraryList.Screen
        name="ManageStateMobxLite"
        component={ManageStateMobxLiteScreen}
      />
      <StackSampleLibraryList.Screen
        name="VisionCamera"
        component={VisionCamera}
      />
    </StackSampleLibraryList.Navigator>
  );
};

export default SampleLibraryNavigator;
