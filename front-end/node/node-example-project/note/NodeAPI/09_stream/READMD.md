###中文文档
[流](http://nodejs.cn/api/stream.html)
### 参考文章
[英文](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
[中文翻译](https://juejin.im/post/5940a9c3128fe1006a0ab176)

<!--  https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93?gi=e9208a59d0e6 -->

### 流
有方向的数据，如果有大量数据，你可以读一点给你一点。
除了可以操作大量数据，还可以组合。

### Node.js 中有四种基本的流类型：

* Readable - 可读的流 (例如 fs.createReadStream()).
* Writable - 可写的流 (例如 fs.createWriteStream()).
* Duplex - 可读写的流 (例如 net.Socket).
* Transform - 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate()).
