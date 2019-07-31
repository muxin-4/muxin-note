# Centos7 网络配置 设置静态Ip

1. `ls /etc/sysconfig/network-scripts` // 查看网卡列表，一般默认第一个就是你电脑的网卡，ifconfig-enp6s0就是我的有线网卡。 

![](https://ws4.sinaimg.cn/large/006tNbRwgy1fxa065xcxwj30wk0acwgw.jpg)

2. ` ip addr` 查看ip,网关地址是ip地址，前三段，第四段为1

例如此centos服务器的IP地址为 `192.168.0.158`,则 网关地址为 `192.168.0.1`

![查看ip](https://ws1.sinaimg.cn/large/006tNbRwgy1fxa0em8k9xj30wi0qe0x3.jpg)



3. ```vim ifcfg-eno1 ``` 配置网卡信息

```bash
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static #启用静态IP地址
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=eno1
UUID=5598a50d-a884-4ef9-8d45-16d57e90b80d
DEVICE=eno1
ONBOOT=yes # 指明在系统启动时是否激活网卡，只有在激活状态的网卡才能去连接网络，进行网络通讯
IPADDR=192.168.0.158 #设置IP地址 
PREFIXO=24  #设置子网掩码 
GATEWAY=192.168.0.1 #设置网关 
DNS1=8.8.8.8 #设置主DNS 
DNS2=114.114.114.114
```

这里说一下需要修改的位置:

```bash
ONBOOT=yes # 指明在系统启动时是否激活网卡，只有在激活状态的网卡才能去连接网络，进行网络通讯
BOOTPROTO=static #启用静态IP地址
IPADDR=192.168.0.158 #设置IP地址 
PREFIXO=24  #设置子网掩码 
GATEWAY=192.168.0.1 #设置网关 
DNS1=8.8.8.8 #设置主DNS 
DNS2=114.114.114.114 #设置备DNS
```

4..`service network restart`重启网络





[参考链接 Centos7 网络配置 设置静态Ip](https://blog.csdn.net/xmroom/article/details/69055193)

























