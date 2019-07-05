# 07 数据库的查询操作（定义）

DQL: 查询表中的记录

```
select * from 表名;

1.语法：
	select
			字段列表
	from
			表名列表
	where
			条件列表
	group by
			分组字段
	having
			分组之后的条件
	order by
			排序
	limit
			分页限定
```



```
2.基础查询(示例用下面创建的 student 表)
		1. 多个字段的查询
			select 字段名1，字段名2,.. from 表名;
			* 注意：
				* 如果查询所有字段，则可以使用 * 来替代字段列表。
				
		2. 去除重复
			select distinct 字段名 from 表名;
			
			distinct adj. 明显的；独特的；清楚的；有区别的
			
		3. 计算列
			-- 一般可以使用四则运算计算一些列的值。(一般只会进行数值型的计算)
			-- 有 null 参与的运算，计算结果都为 null
			-- 可以使用 ifnull(字段名， 字段为null的默认值，例如0)
			
			ifnull(english,0) -- 这个 sql 表示 english 为 null 的时候，值为 0

		4. 起别名
			字段后面加空格和 as 和 别名
			也可以省略 as
			
			select name,math,english,math + ifnull(english,0) as 总分 from student;
			
			-- 也可以简化 as
			select name,math 数学,english 英语,math + ifnull(english,0) 总分 from student;
			
```



```
3. 条件查询
		  where 子句后跟条件

     1. 基本条件查询
			
			* >、<、<=、>=、=、<>
			* BETWEEN...AND
			* IN(集合)
			* IS NULL
			* and 或 &&
			* or 或 ||
			* not 或 ！
			
			注意：
			 <> 是不等于的意思
			
			2. 模糊查询
			* lIKE: 
					* 占位符：
						* _:单个任意字符
						* %:任意多个字符	
						
			3. 排序查询
			* 语法：order by 子句
					* order by 排序字段1 排序方式1, 排序字段2 排序方式2
			* 排序方式
					* ASC:升序，默认
					* DESC:降序
			
			4. 聚合函数：将一列数据作为一个整体，进行纵向计算。
					1. count: 计算个数
						1.一般选择非空的列：主键
					2. max: 计算最大值
					3. min: 计算最小值
					4. sum: 计算和
					5. avg: 计算平均值
			
				注意：
					聚合函数的计算，排除 null 值。
						解决排除 null 的问题：
							方法1：选择不包含非空的列进行计算
							方法2：选择主键列进行计算
							
							
				5. 分组查询
					1.语法： group by 分组字段
   					例如 按照性别分组，查询男、女同学的平均分
   				2.注意：
   					1.分组之后查询的字段：分组字段、聚合函数
   					2.where 和 having 的区别？
   							1. where 在分组之前进行限定，如果不满足，则不参与分组。having 在分组之后进行限定，如果不满足结果，则不会被查询出来
   							2. where 后不可以跟聚合函数，having 可以进行聚合函数的判断
				6. 分页查询
					1.语法：limit 开始的索引，每页查询的条数;
					2.公式：开始的索引 = (当前的页码 - 1) * 每页显示的条数
					3.limit 是一个 MySQL "方言"
```























































