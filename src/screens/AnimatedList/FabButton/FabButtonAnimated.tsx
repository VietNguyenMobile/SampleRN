import React, { useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import IconPlus from './IconPlus';

const { width: WINDOW_WIDTH, height } = Dimensions.get('window');

const SCROLL_SNAPPING_THRESHOLD = 20;
const WINDOW_HEIGHT = height;

const FabButtonAnimated = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const fabExtendAnimation = {
    transform: [
      // {
      //   scaleX: animatedValue.interpolate({
      //     inputRange: [0, 50], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 50
      //     outputRange: [1, 0], // chua scroll output = 1, scroll len output = 0
      //     extrapolate: 'clamp',
      //   }),
      // },
      // {
      //   translateX: animatedValue.interpolate({
      //     inputRange: [0, 40], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 25
      //     outputRange: [0, -50], // user scroll xuống thì có search input sẽ càng di chuyển qua bên trái
      //     extrapolate: 'clamp',
      //   }),
      // },
    ],
    // opacity: animatedValue.interpolate({
    //   inputRange: [0, 25], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 25
    //   outputRange: [1, 0], // ban đầu bằng 1,
    //   extrapolate: 'clamp',
    // }),
  };

  const fabExtendWidth = animatedValue.interpolate({
    inputRange: [0, 20],
    outputRange: [48, 160],
    extrapolate: 'clamp',
  });

  const fabPlusWidth = animatedValue.interpolate({
    inputRange: [0, 20],
    outputRange: [12, 12],
    extrapolate: 'clamp',
  });

  const txtRegisterAnimation = animatedValue.interpolate({
    inputRange: [0, 15, 20], // chua scroll gia tri 0, scroll xuống giá trị tăng len, max 25
    outputRange: [0, 0, 1], // ban đầu bằng 1,
    // extrapolate: 'clamp',
  });

  // console.log('txtRegisterAnimation: ', txtRegisterAnimation)

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);
        }}
        scrollEventThrottle={16} // sau 16 mili second sẽ call hàm onScroll
      >
        <View style={styles.scrollViewContent}></View>
      </ScrollView>
      <Animated.View
        style={[styles.fabBtn, fabExtendAnimation, { width: fabExtendWidth }]}>
        <Animated.View style={[{ position: 'absolute', left: fabPlusWidth }]}>
          <IconPlus />
        </Animated.View>

        <Animated.Text
          style={[styles.txtRegister, { opacity: txtRegisterAnimation }]}>
          ĐĂNG KÝ NGAY
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: 'white',
  },
  fabBtn: {
    height: 48,
    width: 48,
    backgroundColor: '#2E73FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 52,
    right: 24,
    borderRadius: 24,
    shadowColor: 'rgba(22, 63, 161, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    ...Platform.select({
      android: { shadowOpacity: 0.5 },
      ios: { shadowOpacity: 0.9 },
    }),
    shadowRadius: 10,
    elevation: 6,
    flexDirection: 'row',
    padding: 12,
  },
  txtRegister: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 16,
  },
});

export default FabButtonAnimated;
