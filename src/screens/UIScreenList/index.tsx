import React, { useCallback, FunctionComponent } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { UIScreenParamType } from '../../navigation/UIScreenList';

type UIScreenListProps = NativeStackScreenProps<UIScreenParamType, 'UIScreen'>;

const UIScreenList: FunctionComponent<UIScreenListProps> = ({
  navigation,
  route,
}) => {
  const navigateToFlatListPagination = useCallback(() => {
    navigation.navigate('FlatListPagination');
  }, []);

  const navigateToStackLayout = useCallback(() => {
    navigation.navigate('StackLayout');
  }, []);

  const navigateToStackLayout2 = useCallback(() => {
    navigation.navigate('StackLayout2');
  }, []);

  const navigateToHorizontalStackLayouts = useCallback(() => {
    navigation.navigate('HorizontalStackLayouts');
  }, []);

  const navigateToJustifyContent = useCallback(() => {
    navigation.navigate('JustifyContent');
  }, []);

  const navigateToAlignItems = useCallback(() => {
    navigation.navigate('AlignItems');
  }, []);

  const navigateToGridLayouts = useCallback(() => {
    navigation.navigate('GridLayout');
  }, []);

  const navigateToAbsoluteLayout = useCallback(() => {
    navigation.navigate('AbsoluteLayout');
  }, []);

  const navigateToAbsoluteLayout2 = useCallback(() => {
    navigation.navigate('AbsoluteLayout2');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>UI Screen List</Text>
        {/* <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFlatListPagination}>
          <Text style={styles.title}>FlatList Pagination</Text>
        </Pressable> */}

        <Pressable style={styles.btnNavigation} onPress={navigateToStackLayout}>
          <Text style={styles.title}>Stack Layout</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToStackLayout2}>
          <Text style={styles.title}>Stack Layout 2</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToHorizontalStackLayouts}>
          <Text style={styles.title}>Horizontal Stack Layouts</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToJustifyContent}>
          <Text style={styles.title}>Justify Content</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToAlignItems}>
          <Text style={styles.title}>Align Items</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToGridLayouts}>
          <Text style={styles.title}>Grid Layout</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAbsoluteLayout}>
          <Text style={styles.title}>Absolute Layout</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAbsoluteLayout2}>
          <Text style={styles.title}>Absolute Layout 2</Text>
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
