# 02、JDBC各个类详解

1. DriverManager：驱动管理对象

   - 功能：

     1. 注册驱动

        ```
        static void registerDriver(Driver driver)：注册与给定的驱动程序 DriverManager
        ```
        
        项目中写代码使用：   `Class.forName("com.mysql.jdbc.Driver");`
        ```
        
        通过查看源码发现：在 com.mysql.jdbc.Driver 类种存在静态代码块
        static {
        			try {
        					java.sql.DriverManager.registerDriver(new Driver());
        			} catch (SQLException E) {
        					throw new RuntimeException("Can't register driver");
        			}
        }
        ```

     2. 获取数据库连接：

        - 方法：`static Connection getConnection(String url, String user, String password)`
        - 参数：
          - url：指定连接的路径
            - 语法：`jdbc:mysql://ip地址(域名):端口号/数据库名称`
            - 例子：`jdbc:mysql://localhost:3306/db3`
            - 细节：如果连接的是本机 mysql 服务器，并且 mysql 服务默认端口是 3306，则 url 可以简写为 ：`jdbc:mysql:///数据库名称`
          - user：用户名
          - password：密码

2. Connection：数据库连接对象

   1. 功能：

      1. 获取执行 sql 的对象

         ```
         Statement createStatement()
         PreparedStatement prepareStatement(String sql)
         ```

      2. 管理事务：

         ```
         开启事务:  void setAutoCommit(boolean autoCommit): 调用该方法设置参数为 false	，即开启事务
         提交事务:  commit()
         回滚事务:	 rollback()
         ```

         

3. Statement：执行 sql 的对象

   1. 执行 sql
      1. boolean execute(String sql)：可以执行任意的sql（了解）
      2. int execute update(String sql): 执行 DML（insert、update、delete）语句、DDL（ create，alter，drop）语句
         - 返回值：影响的行数，可以通过这个影响的行数判断 DML 语句是否执行成功，返回值 > 0 的则执行成功，反之则失败
      3. ResultSet executeQuery(String sql): 执行 DQL(select) 语句
   2. 练习：
      1. account 表 添加一条记录
      2. account 表 修改记录
      3. account 表 删除一条记录

4. ResultSet：结果集对象，封装查询结果

   - boolean next：游标向下移动一行，判断当前行是否是最后一行后面的那一行，如果是，则返回 false，如果不是则返回 true

   - getXXX()：获取数据

     - xxx 代表数据类型      如： int getInt()          String getString()

     - 参数：

       1. int：代表列的编号，从 1 开始   如：getString(1)
       2. String: 代表列名称。 如：getDouble("balance")

   - 注意：

     - 使用步骤：

       1. 游标向下移动一行
       2. 判断是否有数据
       3. 获取数据

       ```
       ​```
        // 循环判断，游标是否是最后一行末尾
                  while(rs.next()) {
                      // 6.2 获取数据
                      int id = rs.getInt(1);
                      String name = rs.getString("name");
                      double balance = rs.getDouble(3);
       
                      System.out.println(id + "---" + name + "---" + balance);
                  }
       ​```
       ```

   - 练习：

     - 定义一个方法，查询 emp 表的数据将其封装为对象，然后装载集合，返回
       1. 定义 Emp 类
       2. 定义方法 public List<Emp> findAll(){}
       3. 实现方法 select * from emp;

5. PreparedStatement：执行 sql 的对象



































