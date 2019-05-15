# Jenkins

官方安装教程： <https://www.vultr.com/docs/how-to-install-jenkins-on-centos-7>

- Jenkins 是一个开源持续集成工具
- 开发工具： JAVA
- 功能：提供了软件开发的持续集成服务
- 特点：支持主流软件配置管理，配合实现软件配置管理，持续集成功能

## 1. Jenkins 的优势和应用场景

- 主流的运维开发平台，兼容所有主流开发环境
- 插件市场可与海量业内主流开发工具实现集成
- Job为配置单位与日志管理，使运维与开发人员能协同工作
- 权限管理划分不同 Job 不同角色
- 强大的负载均衡功能，保证我们项目的可靠性

## 2. Jenkins 安装配置管理

- 安装 Jenkins 前的环境准备（CentOS7）
1. 添加 yum 仓库源
```
# yum install wget -y
# wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

# rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```

2. 保证系统 JAVA 版本为 8.0 或 8.0 以上

```bash
# yum -y install java
# java -version
```

3. 关闭系统防火墙

```bash
# systemctl stop firewalld
# systemctl disable firewalld
# systemctl status firewalld
```

4. 关闭 SELINUX（关闭强制访问安全策略） 并重启系统

```bash
# vi /etc/sysconfig/selinux
...
SELINUX=disabled
...
# reboot
# ssh user@host
# getenforce 查看是否禁用，应显示Disabled
```

- Jenkins 安装与初始化配置

1. Yum 源安装 Jenkins 最新版本

```bash
# yum install jenkins -y
```

2. 创建 Jenkins 系统用户

```bash
# useradd deploy
```

3. 更改 Jenkins 启动用户与端口

```bash
# vi /etc/sysconfig/jenkins
...
JENKINS_USER = "wgy"
JENKINS_PORT = "8088"
...
```

4. 启动 Jenkins

```bash
# yum install lsof -y
# service jenkins start
# systemctl start jenkins
# sudo systemctl enable jenkins
# lsof -i :8088
```

5. 解锁 Jenkins

```bash
# clear

```



#### 排查 jenkins 是否可以启动问题

```bash
ps -ef | grep jenkins // 查看 jenkins 进程是否启动
lsof -i:8080  // 端口是否有返回值
telnet host:8088 // 确定本机和 jenkins 主机的连通性
```







## 3. Jenkins Job 

#### 3.1 介绍

- 代表一个任务或者项目
- 可配置与可执行
- 执行后的记录称之为Build
- 日志监控与记录
- 所有文件集中保存



- Freestyle Job：

  1. 需在页面添加模块配置项与参数完成配置
  2. 每个 Job 仅能实现一个开发功能
  3. 无法将配置代码化，不利于 Job 配置迁移与版本控制

  4. 逻辑相对简单，无需额外学习成本

- Pipeline Job：（匹配持续集成与持续交付的概念）

  1. 所有模块，参数配置都可以体现为一个 pipeline 脚本
  2. 可以定义多个 stage 构建一个管道工作集
  3. 所有配置代码化，方便 Job 配置迁移与版本控制
  4. 需要 pipeline 脚本语法基础



####3.3 Jenkins Job 构建配置

- 环境准备

1. 配置 Jenkins server 本地 Gitlab DNS
2. 






#### 参考链接：

[CentOS 安装 JenkinsÏ](<https://www.jianshu.com/p/8a77010dafc6>)

[在linux服务器上安装Jenkins](<https://www.jianshu.com/p/c517f09df025>)









