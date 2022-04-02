import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CosmeticsAppHome from '../screens/SampleApp/CosmeticsAppUI/Home';
import CosmeticsAppProductDetail from '../screens/SampleApp/CosmeticsAppUI/ProductDetail';
import BottomTabBar from '../components/CosmeticsApp/BottomTabBar';

// export type CosmeticsAppParamType = {
//   CosmeticsAppHome: undefined;
//   CosmeticsAppProductDetail: undefined;
// };

export type CosmeticsAppBottomTabsParamType = {
  CosmeticsAppHome: undefined;
  CosmeticsAppProductDetail: {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
  };
};

// const CosmeticsAppStack = createNativeStackNavigator<CosmeticsAppParamType>();

// const CosmeticsAppNavigator = () => {
//   return (
//     <CosmeticsAppStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <CosmeticsAppStack.Screen
//         name="CosmeticsAppHome"
//         component={CosmeticsAppHome}
//       />
//       <CosmeticsAppStack.Screen
//         name="CosmeticsAppProductDetail"
//         component={CosmeticsAppProductDetail}
//       />
//     </CosmeticsAppStack.Navigator>
//   );
// };

const MyTabBar = (
  {
    // state, descriptors, navigation
  },
) => {
  return (
    <View
      style={{
        // flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}>
      {/* {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })} */}
      <BottomTabBar />
    </View>
  );
};

const CosmeticsAppBottomTabs =
  createBottomTabNavigator<CosmeticsAppBottomTabsParamType>();

const CosmeticsAppTabNavigator: FunctionComponent = () => {
  return (
    <CosmeticsAppBottomTabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => (
        <MyTabBar
        //  {...props}
        />
      )}>
      <CosmeticsAppBottomTabs.Screen
        name="CosmeticsAppHome"
        component={CosmeticsAppHome}
      />
      <CosmeticsAppBottomTabs.Screen
        name="CosmeticsAppProductDetail"
        component={CosmeticsAppProductDetail}
      />
    </CosmeticsAppBottomTabs.Navigator>
  );
};

export default CosmeticsAppTabNavigator;
