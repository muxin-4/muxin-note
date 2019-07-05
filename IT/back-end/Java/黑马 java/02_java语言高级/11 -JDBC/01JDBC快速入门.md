## JDBC

1. 概念： Java DataBase Connectivity （Java 数据库连接）

JDBC 本质：其实是官方（sun 公司）定义的一套操作所有关系型数据库的规则，即接口。各个数据库厂商去实现这套接口，提供数据库驱动 jar 包。我们可以使用这套接口（JDBC）编程，真正执行的代码是驱动 jar 包中的实现类

```
??? 什么是实现类

Person 接口  Worker 类  Person p = new Worker();
```



2. 快速入门
   1. 导入驱动 jar 包     mysql-connedtor-java-5.1.37-bin.jar
      1. 复制 mysql-connedtor-java-5.1.37-bin.jar 到项目的 libs 目录下
      2. 右键 mysql-connedtor-java-5.1.37-bin ，Add as Library
   2. 注册驱动
   3. 获取数据库连接对象 Connection
   4. 定义 sql
   5. 获取执行 sql 语句的对象 Statement
   6. 执行 sql，接受返回结果
   7. 处理结果
   8. 释放资源