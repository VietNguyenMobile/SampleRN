import React, { FunctionComponent, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { CATEGORIES, PRODUCTS } from './data';
import { CosmeticsAppBottomTabsParamType } from '../../../../navigation/CosmeticsAppBottomTabs';
import { COLORS } from '../../../../constants/CosmeticsAppUI/theme';
Icon.loadFont();

type CosmeticsAppHomeProps = NativeStackScreenProps<
  CosmeticsAppBottomTabsParamType,
  'CosmeticsAppHome'
>;

const CosmeticsAppHome: FunctionComponent<CosmeticsAppHomeProps> = ({
  navigation,
  route,
}) => {
  const [categoryId, setCategoryId] = useState('1');

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.titleBold}>Cosmetics that</Text>
          <TouchableOpacity>
            <Icon name="search" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>everyone loves !</Text>
      </View>
      <View style={styles.categoriesTab}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          key={({ item }) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setCategoryId(item.id);
              }}>
              <View
                style={[
                  styles.category,
                  {
                    backgroundColor:
                      item.id === categoryId ? COLORS.primary : 'transparent',
                  },
                ]}>
                <Text
                  style={[
                    styles.subtitle,
                    {
                      color:
                        item.id === categoryId ? COLORS.white : COLORS.accent,
                    },
                  ]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.productContainer}>
        <FlatList
          data={PRODUCTS}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          key={({ item }) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CosmeticsAppProductDetail', {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  price: item.price,
                  description: item.discription,
                });
              }}>
              <View style={styles.product}>
                <TouchableOpacity onPress={() => {}} style={styles.add}>
                  <Icon name="add-outline" size={15} />
                </TouchableOpacity>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.subtitle}>{item.name}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CosmeticsAppHome;
