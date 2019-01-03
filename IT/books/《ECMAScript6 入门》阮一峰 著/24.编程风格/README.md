## 编程风格

1.块级作用域

let取代var

2.字符串

静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

```
// good
const a = 'foobar';
const b = `foo${a}bar`;
```

3.解构赋值

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```


```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
```

