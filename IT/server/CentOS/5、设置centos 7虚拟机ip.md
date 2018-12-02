1. 确认服务器已经连接网络
`ping www.baidu.com`
2. 查看ip地址
`ip addr`
![查看ip地址](https://ws1.sinaimg.cn/large/006tNbRwgy1fxa0em8k9xj30wi0qe0x3.jpg)
ens33 是服务器的网卡
发现 ens33 没有 inet 这个属性，那么就没法通过IP地址连接虚拟机。
3. 接着来查看ens33网卡的配置
`cd /etc/sysconfig/network-scripts`
第一个文件一般就是网卡配置文件，不同的服务器网卡名字不同，一般都是第一个文件
`vi ifcfg-ens33`
![](https://ws4.sinaimg.cn/large/006tNbRwgy1fxgr7vbcg4j30hw0i3q3u.jpg)
ONBOOT 改为yes

![](https://ws4.sinaimg.cn/large/006tNbRwgy1fxgr8amfdsj30hz0ipq3m.jpg)

4. 重启网络服务
`sudo service network restart `
5. 查看ip地址
`ip addr`
![](https://ws1.sinaimg.cn/large/006tNbRwgy1fxgr9sglbwj30kv07h75q.jpg)