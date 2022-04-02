import { View, Text, BackHandler, Image, StyleSheet } from 'react-native';
import React, { FunctionComponent, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainParamType } from '../../../navigation/FoodDelivery';

import { FONTS, COLORS, SIZES, images } from '../../../constants/FoodDelivery';
import { TextButton } from '../../../components/FoodDelivery';

type SuccessProps = NativeStackScreenProps<
  MainParamType,
  'FoodDelivery_Success'
>;

const Success: FunctionComponent<SuccessProps> = ({ navigation, route }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={images.success}
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
        />
        <Text
          style={{
            marginTop: SIZES.padding,
            ...FONTS.h1,
            color: COLORS.black,
          }}>
          Congratulations!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            ...FONTS.h3,
          }}>
          Payment was successfully made!
        </Text>
      </View>
      <TextButton
        label="Done"
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.navigate('FoodDelivery_DeliveryStatus')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
});

export default Success;
