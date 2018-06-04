# JSONP



#### 1. 为什么要有JSONP？

回答这个问题之前，大家先想想什么是AJAX，JSONP就是一种能够解决AJAX办不到的事情而存在的一种取数据的技术。什么事情是AJAX办不到的呢？就是跨域！

**跨域**：顾名思义，就是当前网页的地址和我们要取的数据地址不在一个域下。这是因为浏览器都有一个“同源策略”— 两个页面的域名必须在同域的情况下，才能允许通信。

> 怎么才算一个域呢？
>
> 相同域名，相同端口，相同协议（因为不是这里的重点，大家可以请教Google）

**“同源策略”的意义**:“同源策略”有效地阻止了一些危险行为，比如你进入$\color{Red}{www.aaa.com}$，同时浏览器又开了一个$\color{Red}{www.bbb.com}$，如果这个$\color{Red}{www.bbb.com}$是一个木马网站，在没有“同源策略”的情况下，它就可能嵌入一些代码，来取得你在$\color{Red}{www.aaa.com}$的信息（因为这时两个页面是可以通信的） 。而正是因为有了“同源策略”，刚才可以通信的情况才不会发生。

**“同源策略”带来的麻烦**:上面的例子是我们在不知情的情况下，保护我们的网络安全的，但如果我们就是要让`www.aaa.com`取得`www.bbb.com`上的数据，行不行呢？答：不行！还是因为”同源策略”！我们想从自己信任的网页上取得数据都不行，这可怎么办呢？

#### 2. JSONP出现

在需要跨域通信的岁月里，一些卓越的前端工程师们想到了这个”作弊”的办法来逃避”同源策略”。”同源策略”虽然很厉害，阻止了一个页面到另一个页面的通信，可是$\color{Red}{src}$指向的路径它放过了，提到$\color{Red}{src}$，大家是不是想起了$\color{Red}{}$？对，JSONP就是利用”同源策略”的这一”漏洞”来进行”作弊”的。（其实有$\color{Red}{src}$属性的不止有$\color{Red}{}$,还有$\color{Red}{<img>}$和$\color{Red}{<iframe>}$，而$\color{Red}{<iframe>}$也是能够运用$\color{Red}{JSONP}$的）。
$\color{Red}{}$

下面看看`JSONP`的原理:

`JSONP`:`JSON with Padding`，`JSON`大家这都知道，是一种数据通信格式，而”Padding”是什么意思，别急，往下看就知道了。

我们先举一个简单的例子：

`www.aaa.com`中：

```
<script type="text/javascript" src="http://www.bbb.com/abc.js"></script>
<script type="text/javascript">
    function abc(json){
        alert(json['name']); 
    }
</script>
```

`www.bbb.com/abc.js`中：

```
abc({'name':'risker','age':24});
```

页面会弹出`risker`，有感觉了么？

**JSONP是这样工作的**：像前面所说的那样，我们可以取到`www.bbb.com/abc.js`，里面是一个`abc`函数，这个函数也会被加载到`www.aaa.com`。加载完成后，就应该执行`abc`了，然后我们在`www.aaa.com`定义`abc`函数，这个函数里写一些处理数据的语句。这样其实就简单地实现了跨域访问数据了，这也就是`JSONP`的原理了。而`JSON with Padding`的意思，就是`abc(json)`中的`json`：
`abc({'name':'risker','age':24})`。

这个JSON对象被包在abc这个函数中当作参数来被处理，而`JSON with Padding`这个词很形象地形容了这个过程。



#### JSONP总结

1. JSONP是为了传数据而存在的技术。网页之间的通信原本有AJAX就够了，而AJAX因为浏览器“同源策略”面对跨域情况就束手无策了。JSONP就这样被发明了，利用`<script>`的`src`属性不受“同源策略”的控制，“作弊”般地巧妙地逃过了浏览器的这一限制。
2. JSONP方法本质是创建`<script>`标签，其`src`指向我们的数据地址。地址后面附带一个回调函数（名字一般是callback或者是别的什么，就看后台给我们的是什么了，函数名是我们起的）。然后，声明这个回调函数。这样，只要一引入上面的`<script>`标签，就相当于执行了那个回调函数。
3. 虽然jQuery把JSONP内置在了AJAX里，但是我们一定要清楚，AJAX和JSONP是完全不一样的，一定不要混淆！以后我会更新一篇介绍AJAX的文章的。
4. 这里是前端和后台的交汇之处，想要真正融会贯通，还要学学后台的知识。我也是在学了PHP之后才把JSONP搞懂的


#### 参考文章
[浅谈JSONP](https://segmentfault.com/a/1190000003746509)

[Ajax总结篇](http://blog.poetries.top/2016/11/26/Ajax-summary/)

