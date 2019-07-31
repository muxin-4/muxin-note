# 07 数据库的查询操作（示例）

DQL: 查询表中的记录示例

```
1. 创建数据
--  创建 student 表，添加数据
CREATE TABLE student ( 
	id int, -- 编号 
	name varchar(20), -- 姓名 
	age int, -- 年龄 
	sex varchar(5), -- 性别 
	address varchar(100), -- 地址 
	math int, -- 数学 
	english int -- 英语 
);
INSERT INTO student(id,NAME,age,sex,address,math,english) VALUES (1,'马云',55,'男','杭州',66,78),(2,'马化腾',45,'女','深圳',98,87),(3,'马景涛',55,'男','香港',56,77),(4,'柳岩',20,'女','湖南',76,65),(5,'柳青',20,'男','湖南',86,NULL),(6,'刘德华',57,'男','香港',99,99),(7,'马德',22,'女','香港',99,99),(8,'德玛西亚',18,'男','南京',56,65);
```



```
2.基础查询(示例用上面创建的 student 表)
		1. 多个字段的查询
			select name,age from student;
		2. 去除重复
			select distinct address from student;
		3. 计算列
   		-- 计算数学成绩(math)和英语成绩(english)之和
			select name,math,english,math + english from student;
			
			-- 如果有 null 参与的运算，计算结果都为 null
			select name,math,english,math + ifnull(english,0) from student;
		4. 起别名
			select name,math,english,math + ifnull(english,0) as 总分 from student;
			
			-- 也可以简化 as
			select name,math 数学,english 英语,math + ifnull(english,0) 总分 from student;
			
```



```
3. 条件查询
select * from student;

---------------- 基本条件查询 ----------------------

-- 查询年龄大于 20 岁的人
select * from student where age > 20;

-- 查询年龄大于等于 20 岁的人
select * from student where age >= 20;

-- 查询年龄等于 20 岁的人
select * from student where age = 20;

-- 查询年龄不等于 20 岁的人
select * from student where age >= 20 && age != 20; 
select * from student where age >= 20 && age <> 20; 


-- 查询 20岁 - 30岁 的人
select * from student where age >= 20 && age <= 30;
select * from student where age >= 20 and age <= 30;
select * from student where age between 20 and 30;

-- 查询年龄 22 岁，18 岁，25岁的人
select * from student where age = 22 or age = 18 or age = 25;
select * from student where age in (22,18,25);

-- 查询英语成绩为 null 的人
select * from student where english is null;

-- 查询英语成绩不为 null 的人
select * from student where english is not null;

---------------- 模糊查询 ----------------------
-- 查询姓马的人？
select * from student where name like '马%';

-- 查询第 2 个字是化的人
select * from student where name like '_化%';

-- 查询姓名是 3 个字的人
select * from student where name like '___';

-- 查询姓名中包含马的人
select * from student where name like '%德%';


---------------- 排序查询 ----------------------
-- 数学成绩升序
select * from student order by math;
select * from student order by math asc;

-- 数学成绩降序 
select * from student order by math desc;

-- 按照数学成绩排名，如果数学成绩一样，则按照英语成绩排名
select * from student order by math asc, english asc;

---------------- 聚合函数 ----------------------
-- 计算个数
select count(english) from student;
select count(ifnull(english,0)) from student;
select count(id) from student; -- 选择主键的列，进行计算个数

-- 最大值、最小值、求和、平均值
select max(math) from student;
select min(math) from student;
select sum(math) from student;
select avg(math) from student;

---------------- 分组查询 ----------------------

-- 按照性别分组，查询男、女同学的平均分
select sex, avg(math) from student group by sex;

-- 按照性别分组，查询男、女同学的平均分,人数
select sex, avg(math),count(id) from student group by sex;

-- 按照性别分组，查询男、女同学的平均分,人数，要求：分数低于 70 分的人不参与分组
select sex, avg(math),count(id) from student where math>=70 && english>=70 group by sex;

-- 按照性别分组，查询男、女同学的平均分,人数，要求：分数低于 70 分的人不参与分组,分组之后，人数要大于 2个人
select sex, avg(math),count(id) from student where math>=70 && english>=70 group by sex having count(id) > 2;

select sex, avg(math),count(id) 人数 from student where math>=70 && english>=70 group by sex having 人数 > 2;

---------------- 分页查询 ----------------------
-- 公式：开始的索引 = (当前的页码 - 1) * 每页显示的条数

select * from student limit 0,3; -- 第 1 页
select * from student limit 3,3; -- 第 2 页
select * from student limit 6,3; -- 第 3 页
```







 



















































