#### **Gitlab**

- Gitlab是一个开源分布式版本控制系统
- 开发语言：Ruby
- 功能：管理项目源代码、版本控制、代码复用与查找

####1. GitLab与GitHub有什么不同？

- Github是一个分布式在线代码托管仓库，个人版本可直接在线免费试用，企业版本收费且需要服务器安装
- Gitlab分布式在线代码仓库托管软件，分社区免费版本与企业收费版本，都需要服务器安装

####2. GitLab的优势

- 开源免费，适合中小型公司将代码放置在该系统中
- 差异化的版本管理，离线同步以及强大分支管理功能
- 便捷的GUI操作界面以及强大账户权限管理功能
- 集成度很高，能够集成绝大多数的开发工具
- 支持内置HA，保证在高并发下仍旧实现高可用性

####3. GitLab主要服务构成

- Nginx静态Web服务器
- Gitlab-workhorse 轻量级的方向代理服务器
- Gitlab-shell 用于处理Git命令和修改authorized keys列表
- Logrotate 日志文件管理工具
- Postgresql 数据库
- Redis 缓存服务器

####4. GitLab的工作流程

- 创建并克隆项目
- 创建项目某Feature分支
- 编写代码并提交至该分支
- 推送该项目分支至远程GitLab服务器
- 进行代码检查并提交Master主分支合并申请
- 项目领导审查代码并确认合并申请

####5. GitLab安装配置管理

- 安装 Gitlab 前系统预配置准备工作

  1. 关闭 firewalld 防火墙 

     ```bash
     # systemctl stop firewalld
     # systemctl disable firewalld
     ```

  2. 关闭 SELINUX 并重启系统

     ```bash
     # vi /etc/sysconfig/selinux
     ...
     SELINUX=disabled
     ...
     # reboot
     # getenforce
     ```

  3. 安装 Omnibus Gitlab-ce package

     1. 安装 Gitlab 组件

     ```bash
     # yum -y install curl policycoreutils openssh-server openssh-clients postfix
     ```

     2. 配置 YUM 仓库

     ```bash
     # curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
     ```

     3. 启动 postfix 邮件服务

     ```bash
     # systemctl start postfix 
     # systemctl enable postfix
     ```

     4. 安装 Gitlab-ce 社区版本

     ```bash 
     # yum install -y gitlab-ce
     ```

     5. Omnibus Gitlab等相关配置初始化并完成安装
        1. 证书创建与配置加载
            ​     2. Nginx SSL代理服务设置

                 3. 初始化Gitlab相关服务并完成安装

#### 6.实际安装演示
> 环境：阿里云 CentOS 7.4 64位

- 登录阿里云服务器 `ssh root@服务器公网ip `

- 安装GitLab前系统预配置准备工作

  1. 关闭firewalled防火墙

    - `systemctl stop firewalld.service` 关闭防火墙
    - `systemctl start firewalld.service` 禁用防火墙开机启动
  - `firewall-cmd --state` 查看状态

  2. 关闭SELINUX（强制访问控制安全策略）并重启系统
     - `vim /etc/sysconfig/selinux`
     - `SELINUX=disabled`把SELINUX改为disabled
     - `reboot`
     - `getenforce` 查看SELINUX是否被禁用

  3. 安装Omnibus Gitlab-ce package

     1. 安装Gitlab组件

        `yum -y install curl policycoreutils openssh-server openssh-clients postfixs`

     2. 下载YUM仓库源

      `curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash`

     3. 启动postfix邮件服务

        `systemctl start postfix`

        `systemctl enable postfix`

     4. 安装Gitlab-ce社区版本

        `yum install -y gitlab-ce`

     ​   5.  Omnibus Gitlab等相关配置初始化并完成安装

     	1. 证书创建与配置加载
     	# mkdir -p /etc/gitlab/ssl
     	# openssl genrsa -out "/etc/gitlab/ssl/gitlab.wgy.com.key" 2048
     	# openssl req -new -key "/etc/gitlab/ssl/gitlab.wgy.com.key" -out "/etc/gitlab/ssl/gitlab.wgy.com.csr"
     	# cn
     	# bj
     	# bj
     	# 空格
     	# 空格
     	# gitlab.wgy.com
     	# 邮箱：wgy952046097@gmail.com
     	# 证书密码：2340666
     	# 直接回车
     	
     	# openssl x509 -req -days 365 -in "/etc/gitlab/ssl/gitlab.wgy.com.csr" -signkey "/etc/gitlab/ssl/gitlab.wgy.com.key" -out "/etc/gitlab/ssl/gitlab.wgy.com.crt"
     	# openssl dhparam -out /etc/gitlab/ssl/dhparams.pem 2048
     	# chmod 600 *
     	
     	# vi /etc/gitlab/gitlab.rb
     	
     	搜索/external_url， http 更改为 https
     	搜索/redirect_http_to_https，false 改为 true，nginx['redirect_http_to_https'] = true
     	
     	往下滚动一点，修改这三处
     	修改， nginx['ssl_certificate'] = "/etc/gitlab/ssl/gitlab.wgy.com.crt"
     	修改， nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/gitlab.wgy.com.key"
     	修改， nginx['ssl_dhparam'] = /etc/gitlab/ssl/dhparams.pem # Path to dhparams.pem, eg. /etc/gitlab/ssl/dhparams.pem
     	
     	# gitlab-ctl reconfigure // 启动GitLab
     	# vi /var/opt/gitlab/nginx/conf/gitlab-http.conf
     	
     	搜索/server_name，在 server_name 下面添加
     	rewrite ^(.*)$ https://$host$1 permanent;
     	gitlab-ctl restart
     	
     	本机电脑 vim /etc/hosts
     	# test
     	192.168.0.164 jenkins.wgy.com
     	192.168.0.164 gitlab.wgy.com
     	
     	2. Nginx SSL代理服务设置
     	
     	3. 初始化Gitlab相关服务并完成安装

## Gitlab 应用

1. Gitlab 后台管理
2. 开发视角的Gitlab
3. 运维视角的Gitlab
4. Gitlab 不用角色使用实例