## Rest API 接口测试

杜涵

从事软件测试10年，曾就职于IBM等大型外企和创业公司，也参与过客户支持和项目咨询，多年外企工作经验和项目管理经验。熟悉测试流程，接口测试，自动化测试，压力性能测试和项目管理。熟悉JMeter，Selenium等测试工具。



接口测试

集成测试

单元测试



### 背景介绍

#### 1.为什么要做接口测试

很多系统关联都是基于**接口**来实现，接口测试可以将复杂的系统关联进行**简化**。

接口功能比较**单一**，能够比较好的进行**测试覆盖**，也相对容易实现**自动化持续集成**。



#### 2.软件开发生命周期

接口测试在单元测试之后，UI测试之前。

接口测试可以获得较高的**投资回报**。



####3.什么是接口测试

接口测试又称API测试 Application Programming Interface

接口测试是测试系统组件间接口的一种测试。重点关注数据传递。

接口测试一般会用于多系统间交互开发，或者拥有多个子系统的应用系统开发的测试。



#### 4.Web Service

Web Service 一种跨编程语言和跨操作系统平台的远程调用技术。

最重要的两种实现方式：SOAP & REST

Web 2.0时代，REST方法的广泛普及。



**SOAP - Simple Object Access Protocol**

交换数据是一种**协议规范**，是一种**轻量**的、**简单**的、基于**XML**的协议。



**Rest - Representational State Transfer**

一种**软件架构**风格，可以降低开发的**复杂性**，提高系统的**可伸缩性**。



SOAP 与 REST 区别：

安全性： SOAP会好于REST

效率和易用性： REST更胜一筹

成熟度：总的来说SOAP在成熟度优于REST



REST 和 RESTFUL

区别：

RESTful 是 REST 的形容词形式

RESTful API 指的是 REST 风格的接口

一般来说REST等于RESTful，区别一个是名词一个是形容词



REST API

出现： REST最早是由Roy Fielding 博士发表的论文中提到的

官方定义： 简单来说REST是一种系统架构设计风格（而非标准），一种分布式系统的应用层解决方案

白话定义：URL定位资源，用HTTP动词（GET,POST,PUT,DELETE)描述操作。

目的：Client 和 Server端进一步解耦

应用：最为经典的莫过于github API



核心思想是资源

POST

GET

PUT

DELETE





####REST 特点总结：

面向资源的接口设计

抽象操作为基础的CRUD

Http是应用协议而非传输协议



**REST 支持的方法：**

| Verd |   描述 |
| ------ | -----: |
| HEAD（SELECT） | 只获取某个资源的头部信息 |
| GET（SELECT） | 获取资源 |
| POST（CREATE） | 创建资源 |
| PATCH（UPDATE） | 更新资源的部分属性（很少用，一般用POST代替） |
| PUT（UPDATE） | 更新资源，客户端需要提供新建资源的所有属性 |
| DELETE（DELETE） | 删除资源 |



**幂等性**（Idempotent）：是一个数学上的概念，在这里表示发送一次和多次请求引起的边界效应是一致的。

Post是不幂等方法。

幂等性可以理解为，发送一次和多次请求引起的效果是一样的。

**安全性**：GET、HEAD和OPTIONS均被认为是安全的方法，因为它们旨在实现对数据的获取，并不具有“边界效应（Side Effect）”



#### REST API 接口规范

**设计规范：**

协议：使用HTTPs协议，确保交互数据的传输安全。

域名：应该尽量将API部署在专用域名之下。

https：//api.example.com

版本控制： 将版本号放在URL或者Header中

路径：只能包含名词，不能包括动词

过滤信息： `?limit=10   ?offset=10  ?page=1  ?sortby=name`

Hypermedia API: 在返回结果中提供相关资源的链接，连向其他API方法

**验证**（Authentication）: 确定用户是其申明的身份，比如提供账户的密码

**授权**（Authentication）：保证用户有对请求资源特定操作的权限。比如用户的私人信息只能自己能访问，其他人无法看到；有些特殊的操作只能管理员可以操作，其他用户有只读的权限等。



**常见的HTTP status code 状态码**

| HTTP status    |                 描述 |
| -------------- | -------------------: |
| 200（OK）      | 如果现有资源已被创建 |
| 201（created） |     如果新资源被创建 |
| 202（accepted） | 已接受处理请求但尚未完成（异步处理） |
| 301（Moved Permanently） | 资源的URI被更新 |
| 303（See Other） | 其他（如，负载均衡） |
| 400（bad request） | 指代坏请求 |
| 404（not found） | 资源不存在 |
| 406（not acceptable） | 服务端不支持所需表示 |
| 409（conflict） | 通用冲突 |
| 412（Precondition Failed） | 前置条件失败（如执行条件更新时的冲突） |
| 415（unsupported media type） | 接受到的表示不受支持 |
| 500（internal server error） | 通用错误响应 |
| 503（Service Unavailable） | 服务器当前无法处理请求 |



#### 返回结果设计：

通用错误码，具体产品由具体产品api文档给出。

```
{
    "msg":"uri_not_found",
    "code": 1001,
    "request": "GET \/v2\/photo\/132"
}
```



#### REST API 接口实例

- `GET /product`:列出所有商品
- `POST /product`:新建一个商品
- `GET /product/ID`:  获取某个指定商品的信息
- `PUT /product/ID`:更新某个指定商品的信息
-  `DELETE /product/ID`:删除某个商品
- `GET /product/ID/purchase`: 列出某个指定商品的所有投资者
- `GET /product/ID/purchase/ID`:获取某个指定商品的指定投资者信息





#### 接口测试流程

测试方法：

借助工具完成

拼接参数执行请求



自动化测试

测试方法：

编写自动化脚本实现

一劳永逸，加入回归测试集合

需要一定编码经验



#### 测试工具

常见的测试工具：

Postman：接口测试

JMeter：压力测试、性能测试、接口测试

RestClient等等



#### 测试覆盖

业务流程

边界值，特殊字符

参数类型，必选项，可选项等



#### 性能测试

测试覆盖：

并发数

吞吐量，tps

出错率等



####安全性测试

测试覆盖：

敏感数据加密

恶意攻击



#### 测试步骤

1. 了解接口格式

2. 编写测试用例

3. 测试用例评审
4. 开始测试
5. 完成测试报告
6. 结束



#### Postman介绍

主要功能包括：

- 模拟各种HTTP requests
- Collection 功能（测试集合）
- 人性化的Response整理
- 内置测试脚本语言
- 设置变量与环境



#### HTTP Header：

| 消息头         |                                           描述 |
| -------------- | ---------------------------------------------: |
| Accept         |                   指定客户端能够接收的内容类型 |
| Accept-Charset |                     浏览器可以接受的字符编码集 |
| Authorization  |                             HTTP授权的授权证书 |
| Content-Type   |                     请求的与实体对应的MIME信息 |
| Referer        | 先前的网页的地址，当前请求网页紧随其后，即来路 |
| Accept-Charset |                     浏览器可以接受的字符编码集 |

**content-Type:**

application/x-www-form-urlencoded: 请求默认方法，数据是简单、平面的key-value键值对

**application/json:数据是复杂的嵌套关系，有多层数据**

multipart/form-data: 既可以发送文本数据也支持二进制数据下载























