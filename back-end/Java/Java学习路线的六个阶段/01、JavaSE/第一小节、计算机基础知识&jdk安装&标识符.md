# 第一阶段 第一小节.计算机基本原理
- 软件开发
  - 什么是软件？
    - 软件：一系列按照特定顺序组织的计算机数据和指令的集合
    - 常见的软件：
      - 系统软件:
        - 如：DOS（磁盘操作系统）、windows、Linux等。
      - 应用软件：
        - 如：扫雷，迅雷，QQ等。
  - 什么是开发？
    - 制作软件
- 人机交互方式
  - 软件的出现实现了人与计算机之间更好的交互。
  - 交互方式：
    - 图形化界面（Graphical User Interface GUI）:这种方式简单直观，使用者易于接受，容易上手操作。
    - 命令行方式（Command Line Interface CLI）: 需要有一个控制台，输入特定的指令，让计算机完成一些操作。较为麻烦，需要记录一些命令。



### 1.1  什么是计算机语言？

- **语言： 是人与人之间用于沟通的一种方式。**

  ​	例如: 中国人与中国人沟通用中文。

  ​	而中国人要和韩国人交流，就要学习韩语。

- **计算机语言：人与计算机交流的方式。**
   ​    如果人要与计算机交流，那么就要学习计算机语言。

   - 计算机语言分类
      - 机器语言
      - 汇编语言
      - 高级语言

### 1.2  Java语言概述

- 是SUN（Stanford University Network，斯坦福大学网络公司）1995年推出的一门高级编程语言。
- 是一种面向Internet的编程语言。
- 随着Java技术在web方面的不断成熟，已经成为Web应用程序的首选开发语言。
- 是简单易学，完全面向对象，安全可靠，与平台无关的编程语言。

#### 1.2.1  Java语言的三种技术架构

- **JAVASE**（Java 2 Platform Standard Edition） 标准版  桌面应用开发
- JAVAEE**（Java 2 Platform Enterprise Edition）企业版  web应用程序开发
- **JAVAME** (Java 2 Platform Micro Edition) 微型版 嵌入式设备

#### 1.2.2  Java语言的特点：跨平台性（跨操作系统平台）、开源

![](https://ws4.sinaimg.cn/large/006tNbRwgy1fy0d45539yj30om0dc76g.jpg)

**JVM**: Java 虚拟机（Java virtual machine，JVM）是运行 Java 程序必不可少的机制。

#### 1.2.3 Java语言发展史

- JAVASE 5.0（1.5.0） Tiger         老胡

- JAVASE 6.0（1.6.0） Mustang   野马

- JAVASE 7.0（1.7.0） Dolphin    海豚

#### 1.2.4  Java语言的环境搭建

- 明确什么是JRE,JDK

**JRE:** JRE (Java Runtime Environment  Java运行环境) 包括**JVM**和**Java程序所需的核心类库**等，如果想要运行一个开发好的Java程序，计算机中只需要安装JRE即可。

**JDK：**JDK（Java Development Kit  Java开发工具包）

JDK是提供给Java开发人员使用的，其中包含了java的开发工具，也包括了JRE。所以安装了JDK，就不用再单独安装JRE了。JDK其中包含的开发工具：编译工具（javac.exe） 打包工具（jar.exe）

JRE：JVM+类库   JDK：JRE + JAVA的开发工具

**简单而言：使用JDK开发完成的java程序，交给JRE去运行。**

![](https://ws1.sinaimg.cn/large/006tNbRwgy1fy0ecnpxksj30y40hg10n.jpg)

- 下载JDK、安装JDK、配置环境变量


[MAC安装JDK及环境变量配置](https://blog.csdn.net/vvv_110/article/details/72897142) 

- 验证是否成功


`java -version`

- 常用的DOS命令

```dos
dir:   // 列出当前目录下的文件以及文件夹
md:    // 创建目录
rd:    // 删除目录
cd:    // 进入指定目录
cd..:  // 退回上一级目录
cd\:   // 退回到根目录
del:   // 删除文件
exit:  // 退出dos命令行
help:  // 命令提示
```

#### 1.3  java环境变量配置

[MAC安装JDK及环境变量配置](https://blog.csdn.net/vvv_110/article/details/72897142) 

#### 1.3.1 JKD安装路径下的目录

- `bin`目录： 该目录用于存放一些可执行程序
  - 如javac.exe（java编译器）、java.exe（java运行工具）、java.exe（打包工具）和javadoc.exe（文档生成工具）等。
- `db`目录：`db`目录是一个小型数据库，从JDK 6.0开始，Java引用了一个新的成员JavaDB，这是一个纯Java实现、开源的数据库管理系统。这个数据库不仅轻便，而且支持JDBC 4.0所有的规范，在学习JDBC时，不再需要额外地安装一个数据库软件，选择直接使用JavaDB即可。
- `jre`目录：`jre`是`Java Runtime Environment`的缩写，意为Java程序运行时环境。
- `inclue`目录：由于JDK是通过C和C++实现的，因此在启东时需要引入一些C语言的头文件，该目录就是用于存放这些头文件的。
- `lib`目录：`lib`是`library`的缩写，意为Java类库或库文件，是开发工具使用的归档包文件。
- `src.zip`文件：`src.zip`为src文件夹的压缩文件，src中放置的是JDK核心类的源代码，通过该文件可以查看Java基础类的源代码。

####1.4  Java程序开发体验- -Hello World

1. 将`java`代码编写到扩展名为`.java` 的文件中
2. 通过`javac`命令对该java文件进行编译
3. 通过`java`命令对生成的`class`文件进行运行

#### 1.5 常见命名规则

- 包：其实就是文件夹，用于解决相同类名问题
  - 包名要求全部小写，一般是公司的域名倒着写
  - `www.baidu.com`
  - `com.baidu.包的作用`

- 类或接口
  - 如果是一个单词，要求首字母大写
  - 如果是多个单词，要求每个单词首字母大写（驼峰命名）
- 方法和变量
  - 如果是一个单词，每个字母都小写
  - 如果是多个单词，从第二个单词开始首字母大写
- 常量
  - 如果是一个单词，所有字母大写  `MAX`
  - 如果是多个单词，所有字母大写，但是用下划线分开 `MAX_VALUE`

#### 1.6 Hello world

```
class HelloWorld {
        public static void main(String[] args) {
                System.out.println("Hello World");
        }
}
```



