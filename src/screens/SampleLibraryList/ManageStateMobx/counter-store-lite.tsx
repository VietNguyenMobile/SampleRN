import { action, makeObservable, observable } from 'mobx';

class CounterStoreLite {
  count = 0;
  constructor() {}

  increment() {
    console.log('increment');
    this.count += 1;
  }

  decrement() {
    console.log('decrement');
    this.count -= 1;
  }
}

export default CounterStoreLite;
