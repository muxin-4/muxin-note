## web 相关概念回顾

1. 软件架构
   1. C/S：客户端 / 服务器端
   2. B/S：浏览器 / 服务器端
2. 资源分类
   1. 静态资源：所有用户访问后，得到的结果都是一样的，称为静态资源，静态资源可以直接被浏览器解析
      - 如：html、css、JavaScript
   2. 动态资源：每个用户访问相同资源后，得到的结果可能不一样。称为动态资源。动态资源被访问后，需要先转换为静态资源，再返回给浏览器
      - 如：servlet/jsp，php，asp...
3. 网络通信三要素
   1. IP：计算机在网络中的唯一标识。
   2. 端口：应用程序在计算机中的唯一标识。0 ~ 65536
   3. 传输协议：规定了数据通信的规则
      1. 基础协议：
         1. tcp：安全协议，三次握手，速度稍慢
         2. udp：不安全协议，速度快

## web 服务器软件：

- 服务器：安装了服务器软件的计算机
  - 服务器软件：接收用户的请求，处理请求，做出响应
  - 在 web 服务器软件中，可以部署 web 项目，让用户通过浏览器来访问这些项目
- 常见的 java 相关的 web 服务器软件：
  - webLogic：oracle 公司，大型的 JavaEE 服务器，支持所有的 JavaEE 规范，收费的。
  - webSphere：IBM 公司，大型的 JavaEE 服务器，支持所有的 JavaEE 规范，收费的。
  - JBOSS：JBOSS 公司的，大型的 JavaEE 服务器，支持所有的 JavaEE 规范，收费的。
  - Tomcat：Apache 基金组织，中小型的 JavaEE 服务器，仅仅支持少量的 JavaEE 规范，例如，servlet、jsp。开源的，免费的。
- JavaEE：Java 语言在企业级开发中使用的技术规范的总和，一共规定了 13 项大的规范

- Tomcat： web服务器软件

  1. 下载：[https://tomcat.apache.org](https://tomcat.apache.org/)

  2. 安装 

  3. 卸载

  4. 启动：

     1. `sudo bash /Library/Tomcat/bin/startup.sh`
     2. 访问 http://localhost:8080/

  5. 关闭：`sudo bash /Library/Tomcat/bin/shutdown.sh`

  6. 配置

     1. 修改启动端口,`sudo vim /Library/Tomcat/conf/server.xml`

        1. 修改这个文件下所有的 port
        2. 一般会将 tomcat 的默认端口号修改为 80。80 端口号是 http 协议的默认端口号。

        ```
        <Server port="8006" shutdown="SHUTDOWN">
        <Connector port="8888" protocol="HTTP/1.1"
                     connectionTimeout="20000"
                     redirectPort="8445" />
        <Connector port="8010" protocol="AJP/1.3" redirectPort="8445" />
        ```

  7. 部署

     1. 将项目打包成一个 war 包，再将 war 包放到 webapps 目录下即可。

        - war 包会自动解压缩

     2. 配置 /Library/Tomcat/conf/server.xml 文件

        - 在 <Host> 标签体中配置
        - <Context docBase="/Users/wgy/Downloads/test" path="/hehe" />
          - docBase：项目存放的路径
          - path：虚拟目录

     3. 在 `/Library/Tomcat/conf/Catalina/localhost` 中创建任意名称（任意名称为虚拟目录名）的 xml 文件。（推荐）

        - 在文件中编写 `<Context docBase="/Users/wgy/Downloads/test" />`

        - 虚拟目录为 xml 文件的名称

        



Tomcat 目录：

```
.
├── LICENSE
├── NOTICE
├── RELEASE-NOTES
├── RUNNING.txt			 
├── bin              // 可执行文件
├── conf             // 配置文件
├── lib              // 依赖 jar 包
├── logs						 // 日志文件
├── temp						 // 临时文件
├── webapps					 // 存放 web 项目
└── work						 // 存放运行时的数据
```



Tomcat web项目根目录 /webapps/ROOT

```
.
├── RELEASE-NOTES.txt
├── WEB-INF
│   ├── web.xml       // web 项目的核心配置文件
│   ├── classes 目录   // 防止字节码文件的目录
│   ├── lib 目录       // 放置依赖的 jar 包
```



#### Tomcat 集成到 IDEA 中

- 将 Tomcat 集成到 IDEA 中，并且创建 JavaEE 的项目，部署项目。

























