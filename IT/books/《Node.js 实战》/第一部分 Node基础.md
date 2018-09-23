# 第一部分 Node基础

#### Node.js是什么？

官网定义：Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/).

- 一个搭建在Chrome JavaScript运行时上的平台，用于构建高速、可伸缩的网络程序。
- Node.js采用的事件驱动、非阻塞I/O模型，使它既轻量又高效，并成为构建运行在分布式设备上的数据密集型实时程序的完美选择。



#### 基础知识：

- 为什么JavaScript对服务端开发很重要

  - 一种语言编写整个web应用
  - JSON是目前非常流行的数据交换格式
  - 一些NoSQL数据库（MongoDB、CouchDB）用的就是JavaScript语言
  - JavaScript是一门编译目标语言，现在有很多可以编译成JavaScript的语言
  - Node用的虚拟机（V8）会紧跟ECMAScript标准，比浏览器更新更快

- 浏览器如何用JavaScript处理I/O

- ```
  // I/O操作（ajax请求)
  $.post('/resource.json'， function(data) { // I/O不会阻塞执行
      console.log(data);
  });
  // 脚本继续执行
  ```

- ```
  var data = $.post('/resource.json'); // 在I/O完成之前程序会被阻塞
  console.log(data);
  ```

- Node在服务端如何处理I/O

  在Node中，I/O几乎总是在主事件轮询之外进行，使得服务器可以一直处于高效并且随时能够做出响应的状态，就像NGINX一样。这样进程就更加不会受I/O限制，因为I/O延迟不会拖垮服务器，或者像在阻塞方式下那样占用很多资源。

- DIRT(data-intensive real-time)程序是什么意思，为什么适用于Node开发

  数据密集型实时程序（data-intensive real-time），它善于将数据从一个管道混排或代理到另一个管道上，这能在处理大量请求时持有很多开放的连接，并且只占用一小部分的内存。它的设计目标是保证响应能力，跟浏览器一样。



####Node程序

1. 简单的异步程序（文件系统（fs）模块从硬盘中加载resource.json）

```
var fs = require('fs');
fs.readFile('./resource.json', function (er, data) {
    console.log(data);
})
```

- 这段程序要从硬盘里读取resource.json文件。当所有数据都读出来后，会调用那个匿名函数（即“回调函数”），传给它的参数是er（如果出现错误）和data（文件中的数据）
- 这个过程是在后台完成的，这样在该过程中，我们可以继续处理其他任何操作，直到数据准备好。



2. Hello World HTTP服务器

 ```javascript
   var http = require('http');
   http.createServer(function (req, res) {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello World\n');
   }).listen(3000);
   console.log('Server running at http://localhost: 3000/');
 ```

  - 只要有请求过来，Node就会激发回调函数function(req, res)，把"Hello World"写入到响应中返回去
  - 这个事件模型和浏览器中对onclick事件的监听类似

3. 流数据

```javascript
var stream = fs.createReadStream('./resource.json')
stream.on('data', function(chunk) {
    console.log(chunk)
})
stream.on('end', function() {
    console.log('finished')
})
```

- 只要有新的数据块准备好，就会激发data时间，当所有数据块都加载完之后，会激发一个end事件。

- 由于数据类型不同，数据块的大小可能会发生变化。有了对读取流的底层访问，程序就可以边读取边处理，这要比等着所有数据都缓存到内存中再处理效率高得多。

```javascript
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('./image.png').pipe(res);
}).listen(3000);
```



#### 小结

Node是：

- 构建在JavaScript之上的
- 事件触发和异步的
- 专为数据密集型实时程序设计的






