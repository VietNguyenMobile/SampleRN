import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { FunctionComponent } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SampleLibraryListParamType } from '../../../navigation/SampleLibraryList';
import counterStore from './counter-store';
// import { observer } from 'mobx-react';
import { observer } from 'mobx-react-lite';

type ManageStateMobxScreenProps = NativeStackScreenProps<
  SampleLibraryListParamType,
  'ManageStateMobx'
>;

const ManageStateMobxScreen: FunctionComponent<ManageStateMobxScreenProps> = ({
  navigation,
  route,
}) => {
  const incrementCount = () => {
    counterStore.increment();
  };

  const decrementCount = () => {
    counterStore.decrement();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.count, { fontSize: 36 }]}>{counterStore.count}</Text>
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

export default observer(ManageStateMobxScreen);
