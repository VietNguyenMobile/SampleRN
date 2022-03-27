// LCRN EP5 - Nike Store App - React Native UI
// Link: https://www.youtube.com/watch?v=R7qK1KKX0rE

import React, { FunctionComponent, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ListRenderItem,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Svg, Polygon } from 'react-native-svg';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SampleAppParamType } from '../../../navigation/SampleAppList';

import {
  images,
  icons,
  COLORS,
  FONTS,
  SIZES,
} from '../../../constants/NikeStoreApp/constants';

import { Trending, RecentlyViewedData } from './data';

type CosmeticsAppHomeProps = NativeStackScreenProps<
  SampleAppParamType,
  'NikeStoreApp'
>;

export type TrendingType = {
  id: number;
  name: string;
  img: any;
  bgColor: string;
  type: string;
  price: string;
  sizes: number[];
};

const NikeStoreApp: FunctionComponent<CosmeticsAppHomeProps> = ({
  navigation,
  route,
}) => {
  const [showAddToBagModal, setShowAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TrendingType | null>(null);
  const [selectedSize, setSelectedSize] = useState('');

  const [trending, setTrending] = useState(Trending);
  const [recentlyViewed, setRecentlyViewed] = useState(RecentlyViewedData);

  const renderTrendingShoes: ListRenderItem<TrendingType> = ({
    item,
    index,
  }) => {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity
        style={[styles.trendingCard, trendingStyle]}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}>
        <Text style={styles.trendingType}>{item.type}</Text>
        <View
          style={[
            styles.trendingBackground,
            { backgroundColor: item.bgColor },
            styles.trendingShadow,
          ]}>
          <View style={{ height: '35%', justifyContent: 'space-between' }}>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {item.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {item.price}
            </Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 27,
            right: 0,
            width: '95%',
            height: '100%',
            // backgroundColor: 'red'
          }}>
          <Svg
            height="100%"
            width="100%"
            // style={{backgroundColor: 'red'}}
          >
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>

        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            // backgroundColor: 'red',
            transform: [
              {
                rotate: '-15deg',
              },
            ],
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderRecentlyView: ListRenderItem<TrendingType> = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{ width: 130, height: 100 }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {item.name}
          </Text>
          <Text style={{ ...FONTS.h3, color: COLORS.black }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  function renderShoeSizes() {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            width: 35,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            marginBottom: 10,
            backgroundColor:
              selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 5,
          }}
          onPress={() => {
            setSelectedSize(item);
          }}>
          <Text
            style={{
              color:
                selectedItem.sizes[index] == selectedSize
                  ? COLORS.black
                  : COLORS.white,
              ...FONTS.body4,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}>
        TRENDING
      </Text>
      {/* Trending */}
      <View style={{ height: 260, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => item.id.toString()}
          renderItem={renderTrendingShoes}
        />
      </View>

      {/* Recently Viewed */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
          borderTopLeftRadius: 30,
          flexDirection: 'row',
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white,
          ...styles.recentlyContainerShadow,
        }}>
        <View style={{ width: 70, marginLeft: SIZES.base }}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View
          style={{
            flex: 1,
            //  backgroundColor: 'red',
            paddingBottom: SIZES.padding,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={item => item.id.toString()}
            renderItem={renderRecentlyView}
          />
        </View>
      </View>
      {/* Modal */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAddToBagModal}>
          <BlurView
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="white">
            {/* Button to close modal */}
            <TouchableOpacity
              style={styles.absolute}
              onPress={() => {
                setSelectedItem(null);
                setSelectedSize('');
                setShowAddToBagModal(false);
              }}></TouchableOpacity>
            {/* Modal Content */}
            <View
              style={{
                justifyContent: 'center',
                width: '85%',
                backgroundColor: selectedItem.bgColor,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -SIZES.padding * 2,
                }}>
                <Image
                  source={selectedItem.img}
                  resizeMode="contain"
                  style={{
                    width: '90%',
                    height: 170,
                    transform: [{ rotate: '-15deg' }],
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body2,
                }}>
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.base / 2,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                {selectedItem.type}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}>
                {selectedItem.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                }}>
                <View>
                  <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                    Select size
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginLeft: SIZES.radius,
                  }}>
                  {renderShoeSizes()}
                </View>
              </View>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 70,
                  marginTop: SIZES.base,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}
                onPress={() => {
                  setSelectedItem(null);
                  setSelectedSize('');
                  setShowAddToBagModal(false);
                }}>
                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>
                  Add to Bag
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingCard: {
    height: 240,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: SIZES.base,
    // backgroundColor: 'red',
  },
  trendingType: {
    color: COLORS.gray,
    ...FONTS.h5,
  },
  trendingBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: SIZES.base,
    borderRadius: 10,
    marginRight: SIZES.padding,
    paddingLeft: SIZES.radius,
    paddingRight: SIZES.padding,
    paddingBottom: SIZES.radius,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  recentlyContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default NikeStoreApp;
