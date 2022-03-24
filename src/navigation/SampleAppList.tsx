import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NikeStoreApp from '../screens/SampleApp/NikeStoreApp';
import NavScreen from '../screens/NavScreen';
import CosmeticsApp from './CosmeticsAppBottomTabs';

export type SampleAppParamType = {
  NikeStoreApp: undefined;
  NavScreen: undefined;
  CosmeticsApp: undefined;
};

const StackSampleAppList = createNativeStackNavigator<SampleAppParamType>();

const SampleAppNavigator = () => {
  return (
    <StackSampleAppList.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackSampleAppList.Screen name="NavScreen" component={NavScreen} />
      <StackSampleAppList.Screen name="NikeStoreApp" component={NikeStoreApp} />
      <StackSampleAppList.Screen name="CosmeticsApp" component={CosmeticsApp} />
    </StackSampleAppList.Navigator>
  );
};

export default SampleAppNavigator;
