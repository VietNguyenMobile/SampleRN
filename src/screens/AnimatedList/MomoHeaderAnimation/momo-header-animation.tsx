import React, { useRef } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
  Text,
  Dimensions,
} from 'react-native';
import { getFeatureViewAnimation } from '../../../Utils/utils';

const { width: WINDOW_WIDTH, height } = Dimensions.get('window');

const UPPER_HEADER_HEIGHT = 40;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT = 96;
const SCROLL_SNAPPING_THRESHOLD = 20;
const WINDOW_HEIGHT = height;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const MomoHeaderAnimation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const searchInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 50
          outputRange: [1, 0], // chua scroll output = 1, scroll len output = 0
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 25
          outputRange: [0, -100], // user scroll xuống thì có search input sẽ càng di chuyển qua bên trái
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 25
      outputRange: [1, 0], // ban đầu bằng 1,
      extrapolate: 'clamp',
    }),
  };

  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 30
          outputRange: [1, 0], // chua scroll output = 1, scroll len output = 0
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 30
      outputRange: [1, 0], // ban đầu bằng 1,
      extrapolate: 'clamp',
    }),
  };

  const depositViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 36],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100], // <-------- 100
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const withDrawViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -16],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const qrViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -56],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scanViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -92],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceHolder}></View>
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../../assets/momo/search.png')}
              style={styles.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tim kiem"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={[styles.searchInput, searchInputAnimation]}
            />
          </View>
          <Image
            source={require('../../../assets/momo/bell.png')}
            style={styles.bellIcon}
          />
          <Image
            source={require('../../../assets/momo/avatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('../../../assets/momo/deposit-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../../assets/momo/deposit.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              NẠP TIỀN
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, withDrawViewAnimation]}>
            <Animated.Image
              source={require('../../../assets/momo/withdraw-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../../assets/momo/withdraw.png')}
              style={[
                styles.featureIcon,
                { width: 16, height: 20 },
                featureIconAnimation,
              ]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              RÚT TIỀN
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, qrViewAnimation]}>
            <Animated.Image
              source={require('../../../assets/momo/qr-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../../assets/momo/qr.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              Mã QR
            </Animated.Text>
          </Animated.View>

          <Animated.View style={[styles.feature, scanViewAnimation]}>
            <Animated.Image
              source={require('../../../assets/momo/scan-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../../assets/momo/scan.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              QUÉT MÃ
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>
      <ScrollView
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          console.log('offsetY: ', offsetY);
          animatedValue.setValue(offsetY);
        }}
        scrollEventThrottle={16} // sau 16 mili second sẽ call hàm onScroll
        onScrollEndDrag={() => {
          // khi user bỏ tay ra ko scroll nữa
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0, // <-------- 100
            animated: true,
          });
        }}>
        <View style={styles.paddingForHeader}></View>
        <View style={styles.scrollViewContent}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    width: '100%',
    // height: 136,
    backgroundColor: '#AF0C6E',
    // zIndex: 100,
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
    // backgroundColor: 'red',
  },
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: 'white',
  },
  upperHeaderPlaceHolder: {
    height: UPPER_HEADER_HEIGHT,
    // backgroundColor: 'red',
    // zIndex: 100,
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  searchContainer: {
    // flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  bellIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  avatar: {
    height: 28,
    width: 28,
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  feature: {
    alignItems: 'center',
  },
  featureIconCircle: {
    width: 32,
    height: 32,
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
  featureName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 14,
    marginTop: 12,
  },
});

export default MomoHeaderAnimation;
