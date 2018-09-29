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

- 以上两种写法效果等价,

- 但是优先考虑写法2，因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

2.js文件使用export命令，输出函数或类（class）





































