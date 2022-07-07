import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import SampleLibrary from '../screens/SampleLibraryList';

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
} from '../constants/NikeStoreApp/constants';

export type SampleLibraryListParamType = {
  SampleLibrary: undefined;
  RNShare: undefined;
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
    </StackSampleLibraryList.Navigator>
  );
};

export default SampleLibraryNavigator;
