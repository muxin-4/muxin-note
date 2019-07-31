# MyBatis 入门

#### 总纲

- MyBatis 概述
- 开发环境搭建
- 项目案例效果演示
- 数据库 + 界面准备工作
- MyBatis 基础操作
- 项目整合开发

## 一. MyBatis 概述

#### 本节大纲

- ORM 模型简介
- MyBatis 概述
- MyBatis 使用优势及应用场景

### 1. ORM 模型简介

#### ORM：对象关系映射（Object Relation Mapping）

- Object 指代 Java 程序中的实体类对象
- Realtion 指代数据库中的表
- Mapping 指代 Java 程序中的实体类对象和数据库中的表的对应关系



![](https://ws2.sinaimg.cn/large/006tKfTcgy1g0o4qqsu1ij310209ctdt.jpg)



orm 模型传统方式下是通过 JDBC 程序来实现的

####  传统 JDBC 程序的设计缺陷

- 大量配置信息硬编码，导致在开发过程中，降低了代码的灵活性。

  - 比如将数据库连接字符串、数据库登录账号、数据库登录密码，硬编码到了我们的代码中，这样就会造成了数据库迁移、数据库密码更新的困扰
  - 比如数据库密码需要定期更换，在更换的过程中需要对硬编码，也就是 Java 代码进行修改，已达到我们要求，这是违反我们软件开发 OCP（开闭原则） 原则的

- 大量的无关业务处理的编码，不得不写大量的代码，完成以下功能

  - 数据库的连接、打开和关闭
  - SQL 语句的发送来完成 CRUD 操作


- 扩展优化极为不便

  - JDBC 中为了扩展功能，我们不得不对源代码进行大量的修改，以达到我们的目的
  - 为了优化程序，常规情况我们会选择**数据库连接池**来进行优化，需要开发人员自己写**数据库连接池**，或者使用开源数据库连接池

    - 用户每次请求都需要向数据库获得链接，而数据库创建连接通常需要消耗相对较大的资源，创建时间也较长。
    - 假设网站一天10万访问量，数据库服务器就需要创建10万次连接，极大的浪费数据库的资源，并且极易造成数据库服务器内存溢出、拓机。

#### 2. MyBatis 概述

**MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架。**

- 避免传统 JDBC 硬编码
- XML 配置或注解
- POJO 对象（Java 普通对象）和数据库记录直接映射
- 完善的文档支持

**MyBatis 的使用优势**

- 简单易学，快速上手，学习成本低
- 数据库交互信息配置化
- 动态 SQL 处理

**MyBatis 的使用场景**

- 更加关注 SQL 优化的项目
- 需求频繁更新改动的项目

## 二、MyBatis 开发环境搭建

#### 本节大纲

- MyBatis 的下载
- 项目中引入 MyBatis 支持
- 入门程序
- 了解 MyBatis 的工作原理

#### 1. MyBatis 的下载

**获取 MyBatis**

- 官方网站：http://www.mybatis.org/mybatis-3/
- 下载离线项目包：https://github.com/mybatis/mybatis-3/releases
- maven 仓库获取 mybatis 依赖：

**传统项目中使用 MyBatis**

- 下载地址：https://github.com/mybatis/mybatis-3/releases
- 项目中引入
  - 作为 classpath 依赖路径引入
  - 作为依赖项目引入

maven 方式引入

- 查询配置
  -  https://mvnrepository.com/ 查询 maven 依赖配置
  - maven 项目的 pom.xml 中添加配置
  - 查看项目依赖
  - 了解 maven 本地仓库

**入门程序**

- 开发环境

  mac + jdk1.8 + IntelliJ idea + MySQL

- 需求：完成一个数据的查询流程

- 目的：了解 mybatis 核心 api 的操作流程

- 扩展：了解 mybatis 的工作流程



maven 配置 jar 包：https://mvnrepository.com/

1. orm，搜索关键字 mybatis ，找到 [org.mybatis](https://mvnrepository.com/artifact/org.mybatis) » [mybatis](https://mvnrepository.com/artifact/org.mybatis/mybatis)
2. mysql 连接 驱动 jar包，搜索关键字 mysql，找到 [mysql](https://mvnrepository.com/artifact/mysql) » [mysql-connector-java](https://mvnrepository.com/artifact/mysql/mysql-connector-java)
   - 一般在项目中，用 5 版本比较多



































