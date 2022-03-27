import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import NikeStoreApp from '../screens/SampleApp/NikeStoreApp';
import NavScreen from '../screens/NavScreen';
import CosmeticsApp from './CosmeticsAppBottomTabs';

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
} from '../constants/NikeStoreApp/constants';

export type SampleAppParamType = {
  NikeStoreApp: undefined;
  NavScreen: undefined;
  CosmeticsApp: undefined;
};

const StackSampleAppList = createNativeStackNavigator<SampleAppParamType>();

// export type NavigationUploadProps = StackNavigationProp<
//   RootParamType,
//   'UploadPhotoOptions'
// >;

const SampleAppNavigator = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SampleAppParamType>>();

  return (
    <StackSampleAppList.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <StackSampleAppList.Screen name="NavScreen" component={NavScreen} />
      <StackSampleAppList.Screen
        name="NikeStoreApp"
        component={NikeStoreApp}
        options={{
          title: 'SHOE SELECTOR',
          headerTintColor: COLORS.lightGray,
          headerShadowVisible: false,
          headerTitleStyle: {
            ...FONTS.navTitle,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={
                {
                  // marginLeft: SIZES.padding
                }
              }>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={
                {
                  // marginLeft: SIZES.padding
                }
              }>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <StackSampleAppList.Screen
        name="CosmeticsApp"
        component={CosmeticsApp}
        options={{ headerShown: false }}
      />
    </StackSampleAppList.Navigator>
  );
};

export default SampleAppNavigator;
