import React, { FunctionComponent, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CosmeticsAppBottomTabsParamType } from '../../../../navigation/CosmeticsAppBottomTabs';
import { COLORS } from '../../../../constants/CosmeticsAppUI/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
Icon.loadFont();

type CosmeticsAppProductDetailProps = NativeStackScreenProps<
  CosmeticsAppBottomTabsParamType,
  'CosmeticsAppProductDetail'
>;

const CosmeticsAppProductDetail: FunctionComponent<
  CosmeticsAppProductDetailProps
> = ({ navigation, route }) => {
  const name = route.params.name;
  const image = route.params.image;
  const description = route.params.description;
  const price = route.params.price;

  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CosmeticsAppHome');
          }}>
          <Icon name="chevron-left" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View
          style={[
            styles.nameAndQuantity,
            // { backgroundColor: 'red' }
          ]}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={[
              styles.quantityContainer,
              // { backgroundColor: 'red' }
            ]}>
            <TouchableOpacity
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}>
              <View style={styles.quantityIcon}>
                <Icon name="minus" size={10} color={COLORS.primary} />
              </View>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
              }}>
              <View style={styles.quantityIcon}>
                <Icon name="plus" size={10} color={COLORS.primary} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.subtitle}>Total Price</Text>
            <Text style={styles.price}>$ {price * quantity}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.basketContainer}>
              <Text style={styles.addToBasket}>Add to basket</Text>
              <View style={styles.basketIcon}>
                <Icon name="shopping-basket" size={20} color={COLORS.primary} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CosmeticsAppProductDetail;
