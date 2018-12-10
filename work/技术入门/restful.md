[RESTful 架构详解](http://www.runoob.com/w3cnote/restful-architecture.html)

[理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)

[RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

[RESTful API 最佳实践](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)

[如何给老婆解释什么是RESTful](https://zhuanlan.zhihu.com/p/30396391)

[HTTP状态码](http://www.runoob.com/http/http-status-codes.html)



**Rest**:Representational State Transfer（表征性状态转移）

**RESTful**:URL定位资源，用HTTP动词（GET,POST,PUT,DELETE)描述操作。



Level0：关注行为和处理

Level1：**面向资源**，这对构建可伸缩、分布式的架构是至关重要的。

Level2，**HTTP动词**

Level3，使用者**只需要知道如何获取资源的入口**，**之后的每个URI都可以通过请求获得，无法获得就说明无法执行那个请求**



现在绝大多数的RESTful接口都做到了Level2的层次，做到Level3的比较少。

当然，**这个模型并不是一种规范，只是用来理解Restful的工具**。所以，做到了Level2，也就是面向资源和使用Http动词，就已经很Restful了。**Restful本身也不是一种规范**，我比较倾向于用“**风格**"来形容它。如果你想深入了解Level3，可以阅读《Rest in Practice》第五章。