# Mysql

课程目标：完成对MYSQL数据库中的数据库，表及数据的CRUD的操作



####1. 数据库概述：

- 什么是数据库

  - **数据库**，简而言之可视为[电子化](https://zh.wikipedia.org/w/index.php?title=%E9%9B%BB%E5%AD%90%E5%8C%96&action=edit&redlink=1)的[文件柜](https://zh.wikipedia.org/wiki/%E6%A1%A3%E6%A1%88%E6%9F%9C)——存储电子[文件](https://zh.wikipedia.org/wiki/%E6%AA%94%E6%A1%88)的处所，用户可以对文件中的数据运行新增、截取、更新、删除等操作[[1\]](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93#cite_note-1)。

    所谓“数据库”系以**一定方式**储存在一起、能予多个用户[共享](https://zh.wikipedia.org/wiki/%E5%85%B1%E4%BA%AB)、具有尽可能小的[冗余度](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%86%97%E4%BD%99)、与应用程序彼此独立的数据[集合](https://zh.wikipedia.org/wiki/%E9%9B%86%E5%90%88)。一个数据库由多个表空间（[Tablespace](https://zh.wikipedia.org/wiki/Tablespace)）构成。

  - 数据库就是一个文件系统，只不过我们需要通过命令（SQL）来操作这个文件系统

- 数据库的作用

  - 储存数据，数据的仓库，带有访问权限限制不同人可以有不同的操作

- 为什么要学习数据库

  - 操作的都是后台数据，取到后台数据进行封装，然后交给前端去展现

- 常见的数据库

  - 关系型数据库
    - mysql：开源免费的适用于中小型企业的免费数据库，SUN公司收购了mysql，后来SUN公司被orcale收购了，orcale收购之后，开始收费
    - mariadb：由mysql创始人搞出来的，直接是mysql开源版本的一个分支，基本上所有命令都是一样的
    - oracle：甲骨文公司，商业软件，收费软件，适用于大型电商网站，收购了SUN公司
    - db2：IBM公司，thinkpad，主要做解决方案，提供软件和硬件，包含成套的服务器架构和软件。国内银行系统大多采用的db2的数据库。
    - sqlserver：通常用在windows里面，一般在政府网站里面。政府网站用asp .net，并且大学教学通常都是采用SQLserver 图形化工具做不错
    - sybase：被淘汰的数据库
  - NOSQL非关系型数据库（ key：value）
    - mongodb
    - redis

- 关系型数据库：

  - 主要用来描述实体与实体之间关系
  - 实实在在存在的事物： 男生和女生  学生和班级  员工和部门

- E-R图（必须得会画）

  - E-R图也称实体-联系图(Entity Relationship Diagram)，提供了表示实体类型、属性和联系的方法，用来描述现实世界的[概念模型](https://baike.baidu.com/item/%E6%A6%82%E5%BF%B5%E6%A8%A1%E5%9E%8B/3187025)。

  - 在ER图中有如下四个成分：

    - 实体：矩形框。

    - 关系：菱形。

    - 属性：椭圆。

    - 连线：实体与属性之间；实体与联系之间；联系与属性之间用直线相连，并在直线上标注联系的类型。
      - 对于一对一联系，要在两个实体连线方向各写1 
      - 一对多联系，要在一的一方写1，多的一方写N
      - 多对多关系，则要在两个实体连线方向各写N,M





  - MYSQL数据库：数据库管理软件
  - 服务器：就是一台电脑，这台电脑安装相关的服务器软件，这些软件会监听不同的端口号，根据用户访问的端口号，提供不同的服务



#### 2. MYSQL的SQL语句

SQL：Structure Query Language 结构化查询语言

DDL：数据定义语言：定义数据库；数据表它们的结构 create（创建） drop（删除） alter（修改）

DML：数据操纵语言：主要用来操作数据 insert（插入）update（修改）delete（删除）

DCL：数据控制语言：定义访问权限，取消访问权限，安全设置    grant

DQL：数据查询语言：select（查询）from子句 where子句





#### 3. 数据库的CRUD的操作

- 首先要登录数据库服务器：

创建数据库

```

```

