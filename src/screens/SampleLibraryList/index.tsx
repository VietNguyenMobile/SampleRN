import React, { FunctionComponent, useCallback } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SampleLibraryListParamType } from '../../navigation/SampleLibraryList';

type SampleLibraryListScreenProps = NativeStackScreenProps<
  SampleLibraryListParamType,
  'SampleLibrary'
>;

const SampleLibraryListScreen: FunctionComponent<
  SampleLibraryListScreenProps
> = ({ navigation, route }) => {
  const navigateToMobx = useCallback(() => {
    navigation.navigate('ManageStateMobx');
  });
  const navigateToMobxLite = useCallback(() => {
    navigation.navigate('ManageStateMobxLite');
  });
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>Sample Library List</Text>
      </View>
      <Pressable style={styles.btnNavigation} onPress={navigateToMobx}>
        <Text style={styles.title}>Manage State with Mobx </Text>
      </Pressable>
      <Pressable style={styles.btnNavigation} onPress={navigateToMobxLite}>
        <Text style={styles.title}>Manage State with Mobx Lite</Text>
      </Pressable>
    </ScrollView>
  );
};

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

export default SampleLibraryListScreen;
