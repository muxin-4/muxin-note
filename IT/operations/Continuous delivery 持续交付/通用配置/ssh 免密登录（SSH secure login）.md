# SSH免密登录

```bash
ssh-keygen -t rsa // 生成公钥
cat ~/.ssh/id_rsa.pub // 打印本地公钥
ssh-copy-id root@192.168.100.102 //将公钥拷贝到想要远程登录的Linux上
ssh root@192.168.100.102 // 登录远程服务器查看是否添加上本地公钥
ls -l ~/.ssh/     // 发现 .ssh 目录多了一个authorized_keys文件
```
