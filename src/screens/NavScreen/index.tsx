import React, { useCallback, FunctionComponent } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import { HomeParamType } from '../../navigation';
import { SampleAppParamType } from '../../navigation/SampleAppList';

type Nav = NativeStackNavigationProp<HomeParamType, 'SampleAppList'>;
type NavScreenApp = NativeStackNavigationProp<
  SampleAppParamType,
  'NikeStoreApp'
>;

type SampleAppListScreenProps = {
  navigation: CompositeNavigationProp<Nav, NavScreenApp>;
  route: RouteProp<NativeStackScreenProps<HomeParamType, 'SampleAppList'>>;
};

const SampleAppList: FunctionComponent<SampleAppListScreenProps> = ({
  navigation,
  route,
}) => {
  const navigateToNikeStoreApp = useCallback(() => {
    navigation.navigate('NikeStoreApp');
  }, []);

  const navigateToHomeCosmetics = useCallback(() => {
    navigation.navigate('CosmeticsApp');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>Screen Sample App List</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToNikeStoreApp}>
          <Text style={styles.title}>Nike Store App</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToHomeCosmetics}>
          <Text style={styles.title}>Cosmetics App UI</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SampleAppList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  btnNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#adf',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    height: 60,
    borderRadius: 8,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
});
