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
import ImagePickerScreen from 'screens/SampleLibraryList/ImagePicker/image-picker-screen';
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
  ImagePickerScreen: undefined;
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
        name="ImagePickerScreen"
        component={ImagePickerScreen}
      />
    </StackSampleLibraryList.Navigator>
  );
};

export default SampleLibraryNavigator;
