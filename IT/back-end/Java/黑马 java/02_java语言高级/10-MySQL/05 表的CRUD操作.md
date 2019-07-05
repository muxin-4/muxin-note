# 05 数据库表的CRUD操作

1. 操作表:（要先使用 `use 数据库名称` 进入数据库，再操作表）
-  C(Create)：创建

```
-- 语法
create table 表名(
		列名1 数据类型1，
		列名2 数据类型2，
		...
		列名n 数据类型n
); -- 创建表
* 注意：最后一列不需要加逗号
*      列名等于字段名
create table 复制后生成的表名 like 被复制的表名; // 复制表

-- 数据库类型
	1.int: 整数类型 
		* age int
	2.double:小数类型
		* score double(5,2)
	3.date:日期，只包含年月日，yyyy-MM-dd
	4.datetime:日期，包含年月日时分秒 yyyy-MM-dd HH:mm:ss
	5.timestamp:时间戳类型 包含年月日时分秒 yyyy-MM-dd HH:mm:ss
		* 如果将来不给这个字段复制，或赋值为 null，则默认使用当前的系统时间，来自动赋值
	6.varchar:字符串
		* name varchar(20):姓名最大20个字符
		* 例如 zhangsan 8个字符 张三 两个字符
		
	-- 创建学生信息表
	create table student(
		id int,
		name varchar(32),
		age int,
		score double(4, 1),
		birthday date,
		insert_time timestamp
	);
```



-  R(Retrieve)：查询

```
show tables; -- 查询某个数据库中的所有表名称
desc 表名; -- 查询表结构
```



-  U(Update)：修改

```
alter table 表名 rename to 新的表名; -- 修改表名
show create table 表名; -- 查看表的字符集
alter table 表名 character set 字符集; -- 修改表的字符集
alter table 表名 add 列名 数据类型; 添加一列
alter table 表名 change 旧列名 新列名 新数据类型; -- 修改列（名称和类型）
alter table 表名 modify 列名 varchar(10); -- 修改列（类型）
alter table 表名 drop 列名; -- 删除列
```



-  D(Delete)：删除

```
drop table 表名;  -- 删除表
drop table if exists 表名; -- 如果存在删除表
```



