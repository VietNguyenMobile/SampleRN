import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const ImagePickerScreen = () => {
  const openGalleryImage = () => {};

  return (
    <View style={styles.container}>
      <Text>ImagePickerScreen</Text>
      <TouchableOpacity style={styles.btnNavigation} onPress={openGalleryImage}>
        <Text style={styles.title}>Open Gallery Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ImagePickerScreen;
