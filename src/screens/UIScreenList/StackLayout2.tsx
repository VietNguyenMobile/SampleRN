import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');
const box_count = 3;

const StackLayout2 = () => {
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
  },
  box: {
    // flex: 1,
  },
  //header
  box1: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  //content
  box2: {
    flex: 1,
    backgroundColor: '#8BC34A',
  },
  //footer
  box3: {
    flex: 1,
    backgroundColor: '#e3aa1a',
  },
});

export default StackLayout2;
