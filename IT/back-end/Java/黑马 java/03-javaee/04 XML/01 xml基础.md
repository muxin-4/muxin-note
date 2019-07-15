## 01 xml基础

1. 概念：Extensible Markup Language 可扩展标记语言

   - 可扩展：标签都是自定义的  <user> <student>
   - 功能
     - 存储数据
       1. 配置文件
       2. 在网络中传输
   - xml 与 html 的区别
     1. xml 标签都是自定义的，html 标签是预定义的。
     2. xml 的语法严格，html 语法松散
     3. xml 是存储数据的，html 是展示数据的

2. 语法：

   - 基本语法：

     1. xml 文档的后缀名 .xml
     2. xml 第一行必须定义文档声明
     3. xml 文档中有且仅有一个根标签
     4. 属性值必须使用引号（单双都可）引起来
     5. 标签必须正确关闭
     6. xml 标签名称区分大小写

     

   - 快速入门:

     ```xml
     <?xml version='1.0' ?>
     <users>
     	<user id='1'>
     		<name>zhangsan</name>
     		<age>23</age>
     		<gender>male</gender>
     	</user>
     	<user id='2'>
     		<name>lisi</name>
     		<age>24</age>
     		<gender>female</gender>
     	</user>
     </users>
     ```

     

   - 组成部分:

     1. 文档声明

        1. 格式：<?xml 属性列表 ?>
           - version: 版本号
           - encoding：编码方式。告知解析引擎当前文档使用的字符集，默认值：ISO-8859-1
           - standalone: yes/no 现在一般不使用

     2. 指令（了解）：加载 css 样式，现在一般不使用

     3. 标签：标签名称自定义的

        - 规则
          - 名称可以包含字母、数字以及其他的字符
          - 名称不能以数字或者标点符号开始
          - 名称不能以字母 xml（或者 XML、Xml 等等）开始
          - 名称不能包含空格

     4. 属性

        - id 属性值唯一

     5. 文本

        - CDATA 区：在该区域中的数据会被原样展示

          - 格式：

            ```xml
            <![CDATA[ 数据 ]]>
            ```

   - 约束：规定 xml 文档的书写规则

     - 作为框架的使用者（程序员）：

       1. 能够在 xml 中引入约束文档
       2. 能够简单的读懂约束文档

     - 分类：

       1. DTD：一种简单的约束技术

          ```
          // 引入 dtd 文档到 xml 文档中
          * 内部dtd：将约束规则定义在 xml 文档中 // 不推荐使用
          * 外部dtd：将约束规则定义在外部的 dtd 文件中
          		* 本地：<!DOCTYPE 根标签 SYSTEM "dtd 文件的位置">
          		* 网络：<!DOCTYPE 根标签 PUBLIC "dtd文件名字" "dtd文件url">
          ```

          

       2. Schema：一种复杂的约束技术

          ```
          1.填写xml文档的根元素
          2.引入xsi前缀.  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          3.引入xsd文件命名空间.  xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd"
          4.为每一个xsd约束声明一个前缀,作为标识  xmlns="http://www.itcast.cn/xml" 
          
          <students   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          			xmlns="http://www.itcast.cn/xml"
          			xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd"
          >
          ```

3. 解析：操作 xml 文档，将文档中的数据读取到内存中

   - **操作 xml 文档**
     1. 解析（读取）：将文档中的数据读取到内存中
     2. 写入：将内存中的数据保存到 xml 文档中。持久化的存储
   - **解析 xml 的方式**
     1. DOM：将标记语言文档一次性加载进内存，在内存中形成一棵 DOM 树
        - 优点：操作方便，可以对文档进行 CRUD 的所有操作
        - 缺点：占内存
     2. SAX：逐行读取，基于事件驱动的
        - 优点：不占内存
        - 缺点：只能读取，不能增删改
   - **xml 常见解析器：**
     1. JAXP：sun 公司提供的解析器，支持 dom 和 sax 两种思想
     2. DOM4J：一款非常优秀的解析器
     3. Jsoup：jsoup 是一款 Java 的 HTML 解析器，可直接解析某个 URL 地址、HTML 文本内容。它提供了一套非常省力的 API，可通过 DOM、CSS 以及类似于 jQuery 的操作方法来取出和操作数据。
     4. PULL：Android 操作系统内置的解析器，SAX 方式的。

4. JavaJsoup

















