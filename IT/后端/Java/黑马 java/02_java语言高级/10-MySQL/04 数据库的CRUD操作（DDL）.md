# 04 数据库的CRUD操作

#### 1. SQL 分类

   1. DDL（Data Definition Language）数据定义语言

      用来定义数据库对象：数据库，表，列等。关键字：create，drop，alter 等

   2. DML（Data Manipulation Language）数据操作语言

      用来对数据库中表的数据进行增删改。关键字：insert，delete，update 等

   3. DQL（Data Query Language）数据库查询语言

      用来查询数据库中表的记录（数据）。关键字：select，where 等

   4. DCL（Data Control Language）数据控制语言（了解）

      用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT，REVOKE 等

#### DDL：操作数据库、表

1. 操作数据库: CRUD

- C(Create)：创建

```
create database 数据库名称; -- 创建数据库
create database if not exists 数据库名称; -- 创建数据库判断是否存在
create database 数据库名称 character set 字符集名; -- 创建数据库，并指定字符集
create database if not exists 数据库名称 character set gbk; -- 创建数据库，判断是否存在，并指定字符集为 gbk
```



- R(Retrieve)：查询

```
show databases; -- 查询所有数据库
show create database 数据库名称; -- 查询某个数据库的字符集 & 查询某个数据库的创建语句
```



- U(Update)：修改

```
alter database 数据库名称 character set 字符集名称; -- 修改数据库的字符集
示例：alter database mysql123 character set gbk;
```



- D(Delete)：删除

```
drop database 数据库名称； -- 删除数据库
drop database if exists 数据库名称; -- 判断数据库是否存在，存在再删除
```



- 使用数据库

```
select database(); -- 查询当前正在使用的数据库名称
use 数据库名称; -- 使用数据库
```
















