import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/CosmeticsAppUI/theme';

Ionicons.loadFont();

const BottomTabBar = () => {
  const [tabId, setTabId] = useState(0);
  return (
    <View style={styles.tabRow}>
      <TouchableOpacity
        onPress={() => {
          setTabId(0);
        }}>
        <View
          style={[
            styles.tabIcon,
            {
              backgroundColor: tabId === 0 ? COLORS.accent : COLORS.primary,
            },
          ]}>
          <Ionicons name="home-outline" size={25} color={COLORS.white} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTabId(1);
        }}>
        <View
          style={[
            styles.tabIcon,
            {
              backgroundColor: tabId === 1 ? COLORS.accent : COLORS.primary,
            },
          ]}>
          <Ionicons name="cart-outline" size={25} color={COLORS.white} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTabId(2);
        }}>
        <View
          style={[
            styles.tabIcon,
            {
              backgroundColor: tabId === 2 ? COLORS.accent : COLORS.primary,
            },
          ]}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={25}
            color={COLORS.white}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTabId(3);
        }}>
        <View
          style={[
            styles.tabIcon,
            {
              backgroundColor: tabId === 3 ? COLORS.accent : COLORS.primary,
            },
          ]}>
          <Ionicons
            name="person-circle-outline"
            size={25}
            color={COLORS.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'space-around',
    marginBottom: 25,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 20,
  },
  tabIcon: {
    padding: 10,
    borderRadius: 50,
  },
});

export default BottomTabBar;
