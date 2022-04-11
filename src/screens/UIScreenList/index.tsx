import React, { useCallback, FunctionComponent } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { UIScreenParamType } from '../../navigation/UIScreenList';

type UIScreenListProps = NativeStackScreenProps<UIScreenParamType, 'UIScreen'>;

const UIScreenList: FunctionComponent<UIScreenListProps> = ({
  navigation,
  route,
}) => {
  const navigateToBlurLoginScreen = useCallback(() => {
    navigation.navigate('BlurLoginScreen');
  }, []);

  const navigateToFlatListPagination = useCallback(() => {
    navigation.navigate('FlatListPagination');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>UI Screen List</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToBlurLoginScreen}>
          <Text style={styles.title}>Blur Login Screen</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFlatListPagination}>
          <Text style={styles.title}>FlatList Pagination</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default UIScreenList;

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
