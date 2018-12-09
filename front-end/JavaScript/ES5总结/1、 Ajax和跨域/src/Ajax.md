# Ajax

### 一、Ajax简介、优缺点、应用场景以及技术

#### 简介：

`Asynchronous Javascript And XML` （异步的`JavaScript`和`XML`，这一技术可以在不重新刷新页面的情况下与服务器通信，交换数据，更新页面。

你可以使用AJAX最主要的两个特性做下列事：

- 在不重新加载页面的情况下发送请求给服务器。
- 接受并使用从服务器发来的数据

#### 优点：

- 无需刷新页面，用户体验好
- 异步通信，更加快的响应能力。
- 减少冗余请求，减轻了服务器负担
- 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序

#### 缺点：

- `ajax`干掉了`back`按钮，即对浏览器后退机制的破坏。
- 存在一定的安全问题。
- 对搜索引擎的支持比较弱。
- 破坏了程序的异常机制。
- 无法用`URL`直接访问

#### 应用场景

- 场景 1. 数据验证
- 场景 2. 按需取数据
- 场景 3. 自动更新页面

#### 技术

`AJAX` 包含以下五个部分：
`ajax`并非一种新的技术，而是几种原有技术的结合体。它由下列技术组合而成。

- 使用`XMLHttpRequest`来和服务器进行异步通信。

- 使用`CSS`和`XHTML`来表示。
- 使用`DOM`模型来交互和动态显示。
- 数据互换和操作技术，使用`XML`与`XSLT`
- 使用`javascript`来绑定和调用。


<img src='https://github.com/yaoyaoniu/note/blob/master/ES5%E6%80%BB%E7%BB%93/1%E3%80%81%20Ajax/img/Ajax.png?raw=true'  style=' width:500px;height:200 px'/>
![Ajax 属性](https://github.com/yaoyaoniu/note/blob/master/ES5%E6%80%BB%E7%BB%93/1%E3%80%81%20Ajax/img/Ajax-property.png?raw=true)



### 二、创建ajax的步骤

> `Ajax`的原理简单来说通过`XmlHttpRequest`对象来向服务器发异步请求，从服务器获得数据，然后用`javascript`来操作`DOM`而更新页面。这其中最关键的一步就是从服务器获得请求数据。原生创建`ajax`可分为以下四步

#### 1、创建`XMLHttpRequest`对象

- 创建 `XMLHttpRequest`对象的语法：



`var xhr = new XMLHttpRequest();`

- 老版本的 `Internet Explorer`（IE5 和 IE6）使用`ActiveX` 对象：

`var xhr = new ActiveXObject("Microsoft.XMLHTTP");`

为了应对所有的现代浏览器，包括 `IE5` 和 `IE6`，请检查浏览器是否支持 `XMLHttpRequest`对象。如果支持，则创建`XMLHttpRequest`对象。如果不支持，则创建`ActiveXObject`：

- 兼容各个浏览器的创建`Ajax`的工具函数

```javascript
function createRequest (){
	try {
		xhr = new XMLHttpRequest();
	}catch (tryMS){
		try {
			xhr = new ActiveXObject("Msxm12.XMLHTTP");
		} catch (otherMS) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (failed) {
				xhr = null;
			}
		}
	}
	return xhr;
}
```
#### 2、准备请求

- 初始化该`XMLHttpRequest`对象，接受三个参数：

  `xhr.open(method,url,async);`

- 第一个参数表示请求类型的字符串，其值可以是`GET`或者`POST`。

- 第二个参数是要作为请求发送目标的URL。

- 第三个参数是`true`或`false`，表示请求是以异步还是同步的模式发出。（默认为`true`，一般不建议为`false`）

  - `false`：同步模式发出的请求会暂停所有javascript代码的执行，知道服务器获得响应为止，如果浏览器在连接网络时或者在下载文件时出了故障，页面就会一直挂起。
  - `true`：异步模式发出的请求，请求对象收发数据的同时，浏览器可以继续加载页面，执行其他javascript代码


#### 3、发送请求

`xhr.send();`

一般情况下，使用`Ajax`提交的参数多是些简单的字符串，可以直接使用`GET`方法将要提交的参数写到`open`方法的`url`参数中，此时`send`方法的参数为`null`或为空。

- `GET`请求：

  ```javascript
  xhr.open("GET",demo.php?name=tsrot&age=24,true);
  xhr.send(null);
  ```

- `POST`请求：
  如果需要像 `HTML` 表单那样 `POST` 数据，请使用 `setRequestHeader()`来添加 `HTTP` 头。然后在`send()`方法中规定您希望发送的数据：


```javascript
xhr.open("POST",demo.php,true);
xhr.setRequestHeder("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
xhr.send();
```

#### 4、处理响应

```javascript
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		console.log(xhr.responseText);
	}
}
```

- `onreadystatechange` ：当处理过程发生变化的时候执行下面的函数
- `readyState` ：`ajax`处理过程
  - 0：请求未初始化（还没有调用 `open()`）。
  - 1：请求已经建立，但是还没有发送（还没有调用 `send()`）。
  - 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
  - 3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
  - 4：响应已完成；您可以获取并使用服务器的响应了。
- `status`属性：
  - 200:”OK”
  - 404: 未找到页面
- `responseText`：获得字符串形式的响应数据

- `responseXML`：获得 `XML`形式的响应数据

- 对象转换为JSON格式使用`JSON.stringify`

- `json`转换为对象格式用`JSON.parse()`

- **返回值一般为`json`字符串，可以用`JSON.parse(xhr.responseText)`转化为`JSON`对象**

  1、首先需要从`XMLHttpRequest`对象取回数据这是一个`JSON`串，把它转换为真正的`JavaScript`对象。使用`JSON.parse(xhr.responseText)`转化为`JSON`对象

  2、遍历得到的数组，向`DOM`中添加新元素

```javascript
function example(responseText){

var saleDiv= document.getElementById("sales");
var sales = JSON.parse(responseText);
    for(var i=0;i<sales.length;i++){
        var sale = sales[i];
         var div = document.createElement("div");
         div.setAttribute("class","salseItem");
        div.innerHTML = sale.name + sale.sales;
        salseDiv.appendChild(div);
    }
}
```

#### 5、封装例子

- 将AJAX请求封装成ajax()方法，它接受一个配置对象params

```javascript
function ajax(params) {
  params = params || {};
  params.data = params.data || {};
  // 判断是ajax请求还是jsonp请求
  var json = params.jsonp ? jsonp(params) : json(params);
  // ajax请求
  function json(params) {
    //  请求方式，默认是GET
    params.type = (params.type || 'GET').toUpperCase();
    // 避免有特殊字符，必须格式化传输数据
    params.data = formatParams(params.data);
    var xhr = null;

    // 实例化XMLHttpRequest对象
    if(window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      // IE6及其以下版本
      xhr = new ActiveXObjcet('Microsoft.XMLHTTP');
    };
```

- 使用实例：

```javascript
ajax({
  url: 'test.php',   // 请求地址
  type: 'POST',   // 请求类型，默认"GET"，还可以是"POST"
  data: {'b': '异步请求'},   // 传输数据
  success: function(res){   // 请求成功的回调函数
    console.log(JSON.parse(res));
  },
  error: function(error) {}   // 请求失败的回调函数
});
```

- 这个过程是一定要记在脑子里的

```javascript
function ajax(url, success, fail){
    // 1. 创建连接
    var xhr = null;
    xhr = new XMLHttpRequest()
    // 2. 连接服务器
    xhr.open('get', url, true)
    // 3. 发送请求
    xhr.send(null);
    // 4. 接受请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else { // fail
                fail && fail(xhr.status);
            }
        }
    }
}
```

























### 参考文章

[Ajax总结篇](http://blog.poetries.top/2016/11/26/Ajax-summary/)



















