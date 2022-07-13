import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { FunctionComponent, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SampleLibraryListParamType } from '../../../navigation/SampleLibraryList';
import { CounterStore } from './counter-store';
import CounterStoreLiteModel from './counter-store-lite';
import { Observer } from 'mobx-react-lite';

type ManageStateMobxScreenProps = NativeStackScreenProps<
  SampleLibraryListParamType,
  'ManageStateMobxLite'
>;

const ManageStateMobxLiteScreen: FunctionComponent<
  ManageStateMobxScreenProps
> = ({ navigation, route }) => {
  const [counterStoreLiteModel] = useState(new CounterStoreLiteModel());
  const incrementCount = () => {
    console.log('incrementCount');
    counterStoreLiteModel.increment();
  };

  const decrementCount = () => {
    console.log('decrementCount');
    counterStoreLiteModel.decrement();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Observer>
        {() => {
          return (
            <Text style={[styles.count, { fontSize: 36 }]}>
              {counterStoreLiteModel.count}
            </Text>
          );
        }}
      </Observer>

      <TouchableOpacity onPress={incrementCount} style={styles.btn}>
        <Text style={[styles.count, { color: 'blue' }]}>Increment Count</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrementCount} style={styles.btn}>
        <Text style={[styles.count, { color: 'blue' }]}>Decrement Count</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: { margin: 10 },
  count: { margin: 10, color: 'black', fontSize: 26 },
});

export default ManageStateMobxLiteScreen;
