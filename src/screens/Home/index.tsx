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

import { HomeParamType } from '../../navigation';

type HomeScreenProps = NativeStackScreenProps<HomeParamType, 'HomeScreen'>;

const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  navigation,
  route,
}) => {
  const navigateToSampleApplication = useCallback(() => {
    navigation.navigate('SampleAppList');
  }, []);

  const navigateToAnimatedList = useCallback(() => {
    navigation.navigate('AnimatedList');
  }, []);

  const navigateToSampleLibraryList = useCallback(() => {
    navigation.navigate('SampleLibraryList');
  }, []);

  const navigateToUIScreenList = useCallback(() => {
    navigation.navigate('UIScreenList');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>Navigation Screen</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSampleApplication}>
          <Text style={styles.title}>Sample Application</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAnimatedList}>
          <Text style={styles.title}>Animated List</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSampleLibraryList}>
          <Text style={styles.title}>Sample Library List</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToUIScreenList}>
          <Text style={styles.title}>UI Screen List</Text>
        </Pressable>
      </View>
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

export default HomeScreen;
