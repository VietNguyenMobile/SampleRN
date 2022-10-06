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

// export type AnimatedListParamType = {
//   TodoAnimated: undefined;
// };

import { AnimatedParamType } from '../../navigation/AnimatedList';

type AnimatedListScreenProps = NativeStackScreenProps<
  AnimatedParamType,
  'AnimatedList',
>;

const AnimatedListScreen: FunctionComponent<AnimatedListScreenProps> = ({
  navigation,
  route,
}) => {
  const navigateToTodoAnimated = useCallback(() => {
    navigation.navigate('TodoAnimated');
  }, []);

  const navigateToDoubleTapToHeartAnimation = useCallback(() => {
    navigation.navigate('DoubleTapToHeartAnimation');
  });

  const navigateToFoodAppUIScroll = useCallback(() => {
    navigation.navigate('FoodAppUIScroll');
  });

  const navigateToMomoHeaderAnimation = useCallback(() => {
    navigation.navigate('MomoHeaderAnimation');
  });

  const navigateToDraggableBottomSheet = useCallback(() => {
    navigation.navigate('DraggableBottomSheet');
  });

  const navigateToFabButtonAnimated = useCallback(() => {
    navigation.navigate('FabButtonAnimated');
  });

  const navigateToCustomTabBar = () => navigation.navigate('CustomTabBar');

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>Animated List</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToTodoAnimated}>
          <Text style={styles.title}>Todo Animated</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToDoubleTapToHeartAnimation}>
          <Text style={styles.title}>Double Tap To Heart Animation</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFoodAppUIScroll}>
          <Text style={styles.title}>Food App UI Scroll</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToMomoHeaderAnimation}>
          <Text style={styles.title}>Momo Header Animation</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToDraggableBottomSheet}>
          <Text style={styles.title}>Draggable Bottom Sheet</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFabButtonAnimated}>
          <Text style={styles.title}>Fab Button Animated</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCustomTabBar}>
          <Text style={styles.title}>Custom Tab Bar</Text>
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
