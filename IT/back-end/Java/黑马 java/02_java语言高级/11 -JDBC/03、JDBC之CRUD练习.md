# 03、JDBC之CRUD练习

练习：

1. account 表 添加一条记录

```
package cn.itcast.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * account 表 添加一条记录 insert 语句
 * @program: itcast
 * @description:
 * @author: Mr.Wang
 * @create: 2019-06 19:51
 */
public class jdbcDemo2 {
    public static void main(String[] args) {
        Statement stmt = null;
        Connection conn = null;
        try {
            // 1. 注册驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            // 2. 定义 sql
            String sql = "insert into account values(null, '王五', 3000)";
            // 3. 获取 Connection 对象
            conn = DriverManager.getConnection("jdbc:mysql:///mmall", "root", "2340666");
            // 4. 获取执行 sql 的对象 Statement
            stmt = conn.createStatement();
            // 5. 执行 sql
            int count = stmt.executeUpdate(sql); // 影响行数
            // 6. 处理结果
            System.out.println(count);
            if(count > 0) {
                System.out.println("添加成功");
            }else {
                System.out.println("添加失败");
            }


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            if(stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }

    }
}

```

2. account 表 修改记录

```
package cn.itcast.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @program: itcast
 * @description:
 * @author: Mr.Wang
 * @create: 2019-06 20:10
 */
public class jdbcDemoUpdate {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            // 1. 注册驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            // 2. 获取连接对象
            conn = DriverManager.getConnection("jdbc:mysql:///mmall", "root", "2340666");
            // 3. 定义 sql
            String sql = "update account set balance = 1500 where id = 3";
            // 4. 获取执行 sql 对象
            stmt = conn.createStatement();
            // 5. 执行 sql
            int count = stmt.executeUpdate(sql);
            // 6. 处理结果
            System.out.println(count);
            if(count > 0) {
                System.out.println("修改成功");
            }else {
                System.out.println("修改失败");
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 7. 释放资源
            if(stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```







3. account 表 删除一条记录

```
package cn.itcast.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @program: itcast
 * @description:
 * @author: Mr.Wang
 * @create: 2019-06 20:21
 */
public class jdbcDemoDelete {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            // 1. 注册驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            // 2. 获取连接对象
            conn = DriverManager.getConnection("jdbc:mysql:///mmall", "root", "2340666");
            // 3. 定义 sql
            String sql = "delete from account where id = 3";
            // 4. 获取执行 sql 对象
            stmt = conn.createStatement();
            // 5. 执行 sql
            int count = stmt.executeUpdate(sql);
            // 6. 处理结果
            System.out.println(count);
            if(count > 0) {
                System.out.println("删除成功");
            }else {
                System.out.println("删除失败");
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 7. 释放资源
            if(stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```





















