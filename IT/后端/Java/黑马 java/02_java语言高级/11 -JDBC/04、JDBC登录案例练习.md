练习：

- 定义一个方法，查询 emp 表的数据将其封装为对象，然后装载集合，返回
  1. 定义 Emp 类
  2. 定义方法 public List<Emp> findAll(){}
  3. 实现方法 select * from emp;



抽取 JDBC 工具类：JDBCUtils

- 目的：简化书写
- 分析：
  1. 注册驱动也抽取
  2. 抽取一个方法获取连接对象
  3. 抽取一个方法，释放资源























