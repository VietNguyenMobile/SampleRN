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

export type AnimatedListParamType = {
  TodoAnimated: undefined;
};

type AnimatedListScreenProps = NativeStackScreenProps<
  AnimatedListParamType,
  'AnimatedList'
>;

const AnimatedListScreen: FunctionComponent<AnimatedListScreenProps> = ({
  navigation,
  route,
}) => {
  const navigateToTodoAnimated = useCallback(() => {
    navigation.navigate('TodoAnimated');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>Animated List</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToTodoAnimated}>
          <Text style={styles.title}>Todo Animated</Text>
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

export default AnimatedListScreen;
