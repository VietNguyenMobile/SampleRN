import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomDrawer from './CustomDrawer';
import OnBoarding from '../../screens/FoodDelivery/OnBoarding/OnBoarding';
import SignUp from '../../screens/FoodDelivery/Authentication/SignUp';
import SignIn from '../../screens/FoodDelivery/Authentication/SignIn';
import ForgotPassword from '../../screens/FoodDelivery/Authentication/ForgotPassword';
import OTP from '../../screens/FoodDelivery/Authentication/Otp';
import FoodDetail from '../../screens/FoodDelivery/Food/FoodDetail';
import MyCart from '../../screens/FoodDelivery/Cart/MyCart';
import MyCard from '../../screens/FoodDelivery/Card/MyCard';
import AddCard from '../../screens/FoodDelivery/Card/AddCard';
import Checkout from '../../screens/FoodDelivery/Cart/Checkout';
import Success from '../../screens/FoodDelivery/Cart/Success';
import DeliveryStatus from '../../screens/FoodDelivery/Delivery/DeliveryStatus';
import Map from '../../screens/FoodDelivery/Delivery/Map';

export type AuthParamType = {
  FoodDelivery_Onboarding: undefined;
  FoodDelivery_SignUp: undefined;
  FoodDelivery_SignIn: undefined;
  FoodDelivery_ForgotPassword: undefined;
  FoodDelivery_OTP: undefined;
};

export type MainParamType = {
  FoodDelivery_Home: undefined;
  FoodDelivery_FoodDetail: undefined;
  FoodDelivery_MyCart: undefined;
  FoodDelivery_MyCard: undefined;
  FoodDelivery_AddCard: {
    selectedCard: {
      name: string;
      id: number;
      icon: string;
      card_no: string;
    };
  };
  FoodDelivery_Checkout: {
    selectedCard: {
      name: string;
      id: number;
      icon: string;
      card_no: string;
    };
  };
  FoodDelivery_Success: undefined;
  FoodDelivery_DeliveryStatus: undefined;
  FoodDelivery_Map: undefined;
};

export type RootStackType = {
  Main: undefined;
  Auth: undefined;
};

const RootStack = createNativeStackNavigator<RootStackType>();

const MainStack = createNativeStackNavigator<MainParamType>();

const AuthStack = createNativeStackNavigator<AuthParamType>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="FoodDelivery_Onboarding"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="FoodDelivery_Onboarding" component={OnBoarding} />
      <AuthStack.Screen name="FoodDelivery_SignUp" component={SignUp} />
      <AuthStack.Screen name="FoodDelivery_SignIn" component={SignIn} />
      <AuthStack.Screen
        name="FoodDelivery_ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen name="FoodDelivery_OTP" component={OTP} />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="FoodDelivery_Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="FoodDelivery_Home" component={CustomDrawer} />
      <MainStack.Screen name="FoodDelivery_FoodDetail" component={FoodDetail} />
      <MainStack.Screen name="FoodDelivery_MyCart" component={MyCart} />
      <MainStack.Screen name="FoodDelivery_MyCard" component={MyCard} />
      <MainStack.Screen name="FoodDelivery_AddCard" component={AddCard} />
      <MainStack.Screen name="FoodDelivery_Checkout" component={Checkout} />
      <MainStack.Screen
        name="FoodDelivery_Success"
        component={Success}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="FoodDelivery_DeliveryStatus"
        component={DeliveryStatus}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen name="FoodDelivery_Map" component={Map} />
    </MainStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="FoodDelivery_Auth">
      <RootStack.Screen name="FoodDelivery_Auth" component={AuthNavigator} />
      <RootStack.Screen name="FoodDelivery_Main" component={MainNavigator} />
    </RootStack.Navigator>
  );
};

export default Navigation;
