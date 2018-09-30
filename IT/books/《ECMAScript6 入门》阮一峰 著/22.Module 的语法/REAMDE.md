## 22.Module 的语法

####1主流模块化方案

1. CommonJS，应用在服务器端

- 下面代码的实质是整体加载`fs`模块（即加载`fs`的所有方法），生成一个对象（`_fs`），然后再从这个对象上面读取 3 个方法。
- 这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

 ```javascript
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
 ```

2. ES6 Moudle

- 下面代码的实质是从`fs`模块加载 3 个方法，其他方法不加载。
- 这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。
- 当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

```javascript
// ES6模块
import { stat, exists, readFile } from 'fs';
```



####2.严格模式

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`。



#### 3.export 命令

- 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
- 如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量。

1.js文件使用export命令，输出一组变量

- 下面是一个 JS 文件，里面使用`export`命令输出变量。

```javascript
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```

```javascript
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
```

```javascript
// mian.js
import { firstName, lastName, year } from "./utils/profile";
```

- 以上两种写法效果等价,
- 但是优先考虑写法2，因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

2.js文件使用export命令，输出函数或类（class）

```javascript
// profile.js
export function multiply(x, y) {
	return x * y;
}
```

```javascript
// profile.js
function multiply(x, y) {
	return x * y;
}
export {multiply}
```



```javascript
// main.js
import { multiply } from "./utils/profile";
```

3.`export`语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```javascript
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```

上面代码输出变量`foo`，值为`bar`，500 毫秒之后变成`baz`。



#### 4.import命令

- `import`命令具有提升效果，会提升到整个模块的头部，首先执行。

- CommonJS 模块的`require`命令和 ES6 模块的`import`命令不要混用

- 模块的整体加载

  - 

    ```javascript
    // circle.js
    
    export function area(radius) {
      return Math.PI * radius * radius;
    }
    
    export function circumference(radius) {
      return 2 * Math.PI * radius;
    }
    ```

    ```javascript
    import * as circle from './circle';
    
    console.log('圆面积：' + circle.area(4));
    console.log('圆周长：' + circle.circumference(14));
    ```

#### 5. export default

```javascript
//a.js
let sex = "boy";
export default sex（sex不能加大括号）
//原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default

对应的导入方式：

//b.js
本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any1 from "./a.js" 
console.log(any,any1)   // boy,boy

```
































