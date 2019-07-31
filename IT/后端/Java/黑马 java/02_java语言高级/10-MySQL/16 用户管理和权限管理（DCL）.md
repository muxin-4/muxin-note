# 16 用户管理和权限管理（DCL）

#### 1. SQL 分类

1. DDL（Data Definition Language）数据定义语言

   用来定义数据库对象：数据库，表，列等。关键字：create，drop，alter 等

2. DML（Data Manipulation Language）数据操作语言

   用来对数据库中表的数据进行增删改。关键字：insert，delete，update 等

3. DQL（Data Query Language）数据库查询语言

   用来查询数据库中表的记录（数据）。关键字：select，where 等

4. DCL（Data Control Language）数据控制语言（了解）

   用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT，REVOKE 等





- DBA：数据库管理员

- DCL：管理用户，授权

  1. 管理用户
     1. 添加用户

        `create user '用户名'@'主机名' identified by '密码';`

     2. 删除用户

        `drop user '用户名'@'主机名';`

     3. 修改用户密码

        `SET PASSWORD FOR 用户名 = '新密码';`

     4. 查询用户

        ```
        -- 1.  切换到 mysql 数据库
        use mysql;
        
        -- 2. 查询 user 表
        select * from user;
        
        * 通配符： % 表示可以在任意主机使用用户登录数据库
        ```

        

     5.  忘记 root 密码（todo）

        ```
        
        ```

        

  2. 权限管理：

     1. 查询权限：

        ```
        show grants for '用户名'@'主机名';
        show grants for 'lisi'@'%';
        ```

        

     2. 授予权限：

        ```
        grant 权限列表 on 数据库名.表名 to '用户名'@'主机名';
        
        grant select,delete,update on db3.account to 'lisi'@'%';
        
        -- 给张三用户授予所有权限，在任意数据库任意表上
        grant all on *.* to 'zhangsan'@'localhost';
        ```

        

     3. 撤销权限：

        ```
        revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名';
        
        revoke update on db3.account from 'lisi'@'%';
        ```

        



DCL 示例

```
-- 1.切换到 mysql 数据库
use mysql;

-- 2.查询 user 表
select * from user；

-- 3.创建用户
create user '用户名'@'主机名' identified by '密码';

create user 'zhangsan'@'localhost' identified by '123';
create user 'lisi'@'%' identified by '123';

-- 4.删除用户
drop user 'zhangsan'@'localhost';

-- 5.修改用户密码
SET PASSWORD FOR wgy = '2340666';
```

























