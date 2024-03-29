import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
const box_count = 3;
const box_height = height / box_count - 50;

const JustifyContent = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'center',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
  },
  box: {
    height: box_height,
  },
  box1: {
    backgroundColor: '#2196F3',
  },
  box2: {
    backgroundColor: '#8BC34A',
  },
  box3: {
    backgroundColor: '#e3aa1a',
  },
});

export default JustifyContent;
