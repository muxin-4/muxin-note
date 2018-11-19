# Nginx入门到实践（2、基础篇)

#### 基础篇

- 中间件
- 什么是Nginx
- 为什么选择Nginx
- 快速安装
- 配置语法
- 默认模块
- Nginx的log
- 访问限制
  - HTTP的请求和连接
  - 请求限制与连接限制
  - access模块配置语法
  - 请求限制局限性
  - 基本安全认证
  - auth模块配置语法
  - 安全认证局限性



#### 一、中间件

个人理解：
将具体业务和底层逻辑解耦的组件。

大致的效果是：
需要利用服务的人（前端写业务的），不需要知道底层逻辑（提供服务的）的具体实现，只要拿着中间件结果来用就好了。

举个例子：
我开了一家炸鸡店（业务端），然而周边有太多屠鸡场（底层），为了成本我肯定想一个个比价，再综合质量挑选一家屠鸡场合作（适配不同底层逻辑）。由于市场变化，合作一段时间后，或许性价比最高的屠鸡场就不是我最开始选的了，我又要重新和另一家屠鸡场合作，进货方式、交易方式等等全都要重来一套（重新适配）。

然而我只想好好做炸鸡，有性价比高的肉送来就行。于是我找到了一个专门整合屠鸡场资源的第三方代理（中间件），跟他谈好价格和质量后（统一接口），从今天开始，我就只需要给代理钱，然后拿肉就行。代理负责保证肉的质量，至于如何根据实际性价比，选择不同的屠鸡场，那就是代理做的事了。

作者：[Gocy](https://www.zhihu.com/question/19730582/answer/140527549)



#### 二、什么是Nginx

Nginx 是一个开源且高性能、可靠的HTTP中间件、代理服务。



**常见的HTTP服务**

HTTPD（httpd还有一个俗称叫apache） - Apache基金会

IIS -微软

GWS - Google



#### 三、为什么选择Nginx

1. IO多路复用采用`epoll`机制

2. 轻量级

- 功能模块少（只保留了http模块，和一些核心模块）
- 代码模块化（已读、易于二次改进）

3. CPU亲和（affinity）：是一种把CPU核心和Nginx工作进程绑定方式，把每个worker进程固定在一个cpu上执行，**减少切换cpu的cache miss**，获得更好的性能。

4. sendfile（Linux中的"零拷贝"）：nginx处理静态文件有优势的原因


#### 四、快速安装

**1.Nginx快速搭建与基本参数使用**

Mainline version - 开发版

Stable version - 稳定版

Legacy version - 历史版本



[nginx 下载地址](https://nginx.org/en/download.html)

[nginx: Linux 安装](https://nginx.org/en/linux_packages.html#stable)

1. `vim /etc/yum.repos.d/nginx.repo`

粘贴下面代码到nginx.repo

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```
```
!wq
```
```
yum list |grep nginx
```

```
yum install nginx
```
```
y
```
```
nginx -v // 查看nginx版本
```

```
nginx -V // 查看编译参数
```

#### 2.基本参数使用

1.安装目录

```bash
rpm -ql nginx 
```



编译参数

Nginx基本配置语法




|路径|类型|作用|
|---|----|-----|
|`/etc/logrotate.d/nginx`|配置文件|Nginx日志轮转，用于logrotate服务的日志切割|
|`/etc/nginx`|目录、配置文件|Nginx主配置文件 |
|`/etc/nginx/nginx.conf`|目录、配置文件|Nginx主配置文件 |
|`/etc/nginx/conf.d`|目录、配置文件|Nginx主配置文件 |
|`/etc/nginx/conf.d/default.conf`|目录、配置文件|Nginx主配置文件 |
| `/etc/nginx/fastcgi_params` | 配置文件 |cgi配置相关，fastcgi配置|
| `/etc/nginx/uwsgi_params` | 配置文件 |cgi配置相关，fastcgi配置|
| `/etc/nginx/scgi_params` | 配置文件 |cgi配置相关，fastcgi配置|
| `/etc/nginx/mime.types` | 配置文件 |设置http协议的Content-Type扩展名对应关系|
| `/usr/lib/systemd/system/nginx-debug.service` | 配置文件 |用于配制出系统守护进程管理器管理方式|
| `/usr/lib/systemd/system/nginx.service` | 配置文件 |用于配制出系统守护进程管理器管理方式|
| `/etc/sysconfig/nginx` | 配置文件 |用于配制出系统守护进程管理器管理方式|
| `/etc/sysconfig/nginx-debug` | 配置文件 |用于配制出系统守护进程管理器管理方式|
| `/usr/lib64/nginx/modules` | 目录 |Nginx模块目录|
| `/etc/nginx/modules` | 目录 |Nginx模块目录|
| `/usr/sbin/nginx` | 命令 |Nginx服务的启动管理的终端命令|
| `/usr/sbin/nginx-debug` | 命令 |Nginx服务的启动管理的终端命令|
| `/usr/share/doc/nginx-1.12.0` | 文件、目录 |Nginx的手册和帮助文件|
| `/usr/share/doc/nginx-1.12.0/COPYRIGHT` | 文件、目录 |Nginx的手册和帮助文件|
| `/usr/share/man/man8/nginx.8.gz` | 文件、目录 |Nginx的手册和帮助文件|
| `/var/cache/nginx` | 目录 |Nginx的缓存目录|
| `/var/log/nginx` | 目录 |Nginx的日志目录|

2. Nginx编译配置参数

命令：`nginx -V`

3. 默认配置语法

`vim /etc/nginx/nginx.conf`

nginx会先读取 `/etc/nginx/nginx.conf`文件，再读取nginx.conf 里的 `include /etc/nginx/conf.d/*.conf`

 

`/etc/nginx/nginx.conf`

| 路径                           | 作用                                       |
| ------------------------| ------------------------------------------ |
| `user`    | 设置nginx服务的系统使用用户 |
| `worker_processes`    | 工作进程数                         |
| `error_log`    | nginx的错误日志 |
| `pid`             | nginx服务启动时候pid                  |
| `events    woker_connections` | 每个进程允许最大连接数(一般一万个左右，满足大部分企业要求) |
| `events    use` | 工作进程数              |

```bash
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

// 访问一个网站，访问http
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

```bash
http {
	... ...
    server {
    	listen         80;
    	server_name    localhost;
    	
    	location / {   // 控制网站访问路径
            root   /usr/share/nginx/html;
            index  index.html index.html;
    	}
    	
    	error_page 500 502 503 504  /50x.html
    	location = /50x.html {
            root   /usr/share/nginx/html
    	}
	}
	server {
        ... ...
	}
}
```



浏览器访问，网卡的inet的ip地址: `ip a`



node application nginx vhost setup: [Setting up multiple nodejs applications using nginx vitual hosts](https://www.digitalocean.com/community/questions/setting-up-multiple-nodejs-applications-using-nginx-vitual-hosts)

4. 默认配置与默认站点启动

#### 

#### 2、Nginx日志类型

error.log access.log










































