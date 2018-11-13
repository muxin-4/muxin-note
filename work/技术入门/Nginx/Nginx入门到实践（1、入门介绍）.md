# Nginx入门到实践 - Nginx中间件

> Nginx 高效、稳定、开源

- 国内公司基本大规模使用
  - 阿里巴巴 - tengine
  - 网易 - openresty
- 很好适应当前主流架构趋势
  - 微服务
  - 云架构
  - 中间层

#### Nginx 收获

- 手把手配置场景
- 全面了解配置语法
- 源于实战经验而成
- 层次化了解Nginx
- 详细介绍重难点

#### Nginx 实战

**1. 收获实战**

- 数十个典型的Nginx配置场景
  - 代理服务
  - 动态缓存
  - 动静分离
  - 负载均衡
  - Nginx 与 LUA的开发
- 覆盖了百分之90以上的Nginx核心配置模块
- 基于企业中所常见的业务配置场景

**2. 了解中间件架构**

- Nginx应用层的安全防护
  - 对sql的注入防攻击
  - 对请求的访问控制
  - 对请求的频率控制
  - 对防爬虫
- 基于Nginx的中间件架构性能优化的问题
  - http性能压测
  - 性能瓶颈分析
  - 系统性能优化
  - 基于Nginx的性能配置优化

**3. 贯彻了技术原理**

- http协议原理
- linux系统原理

**4.理论结合实践**

- 帮你完善整个知识体系
- 扩展自己的经验和技能优势





### 基于Nginx的中间件架构

#### 一、学习环境

系统硬件： CPU >= 2Core，内存 >= 256M

操作系统：centos >= 7.0， 位数 X64

#### 二、环境调试确认

**1、四项确认**

1. 确认系统网络  `ping www.baidu.com`

![确认系统网络](https://ws3.sinaimg.cn/large/006tNbRwgy1fx0xeskdjfj30x403ct9k.jpg)

1. 确认yum可用 
   `yum list|grep gcc`  列出所有含有`gcc`名字的可安裝的软件清单命令

2. 确认关闭iptables规则 

   `iptables -L`   查看是否有iptables规则

   `iptables -F`   关闭iptables规则

   `iptables -t nat -L`  查看是否有iptables规则

   `iptables -t nat -F` 关闭iptables规则

3. 确认停用selinux，如果停用，输出`Disabled`

`setenforce 0`
`getenforce` 



**2、两项安装**

`yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake `

`yum -y install wget httpd-tools vim`

**3、一次初始化**

` cd /opt`

`mkdir app download logs work backup`























