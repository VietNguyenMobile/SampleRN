import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CounterStore {
  count = 0;
  constructor() {
    // makeAutoObservable(this)
    makeObservable(
      this,
      { increment: action, decrement: action, count: observable },
      { autoBind: true },
    );
    makePersistable(this, {
      name: 'CounterPersistStore',
      properties: ['count'],
      storage: AsyncStorage,
    });
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export { CounterStore };

export default counterStore = new CounterStore();
