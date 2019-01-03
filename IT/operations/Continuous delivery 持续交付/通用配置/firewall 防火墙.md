# centOS 7.4 关闭防火墙
systemctl stop firewalld.service #停止firewall  
systemctl start firewalld.service #启动firewall 
systemctl disable firewalld.service #禁止firewall开机启动  
systemctl enable iptables.service #允许开机自启
firewall-cmd --state #查看状态
vim /etc/sysconfig/iptables #查看防火墙配置端口
yum install iptables #安装防火墙配置文件
yum install iptables-services #安装防火墙服务
service iptables restart #重新启动防火墙