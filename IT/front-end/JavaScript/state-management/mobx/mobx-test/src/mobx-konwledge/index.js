import {
  observable,
  isArrayLike,
  extendObservable,
  computed,
  autorun,
  when,
  reaction,
  action,
  runInAction
} from 'mobx'

class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();

  @observable string = 'hello';
  @observable number = 20;
  @observable bool = true;

  @computed get mixed() {
    return store.string + '/' + store.number;
  }

  // @action bar() {
  //   store.string = 'world';
  //   store.number = 30;
  // }
  @action.bound bar() {
    store.string = 'world';
    store.number = 30;
  }
}

// computed
var store = new Store();
var foo = computed(function() {
  return store.string + '/' + store.number;
});

foo.observe(function(change) {
  console.log(change);
});

store.string = 'world';
store.number = 30;

autorun

autorun(() => {
  console.log(store.string + '/' + store.number);
});

autorun(() => {
  console.log(store.mixed);
});

when
console.log('before');
when(()=> store.bool, ()=> console.log("it's true"));
// store.bool = true;
console.log('after');

// reaction
reaction(
  () => [store.string, store.number],
  arr => console.log(arr.join('/'))
);

// store.bar();
runInAction('modify', () => {
  store.string = 'world';
  store.number = 30;
});
// var bar = store.bar;
// bar();

// observable.box
//

// var num = observable.box(20);
// var str = observable.box('hello');
// var bool = observable.box(true);

// num.set(50);
// str.set("world");
// bool.set(false);
// // console.log(num, str, bool);
// console.log(num.get(), str.get(), bool.get());


// // array Object map
// const arr = observable(['a', 'b', 'c']);

// // array
// console.log(arr, isArrayLike(arr));
// console.log(arr[0], arr[1]);
// console.log(arr.pop(), arr.push('d'), arr);

// // object
// const obj = observable({a: 1, b: 1});
// console.log(obj.a, obj.b);

// // map
// const map = observable(new Map());

// // extendObservable()

// map.set('a', 1);
// console.log(map);
// console.log(map.has('a'));

// map.delete('a');
// console.log(map.has('a'));

