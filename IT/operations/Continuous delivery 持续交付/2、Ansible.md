# Ansible

- Ansible 是一个开源部署工具
- 开发语言： Python
- 特点：SSH 协议通讯，全平台，无需编译，模块化部署管理
- 作用：推送 Playbook 进行远程节点快速部署 

#### Ansible 的优势和应用场景

- 轻量级无客户端（Agentless）
- 开源免费，学习成本低，快速上手
- 使用 Playbook 作为核心配置架构，统一的脚本格式批量化部署
- 完善的模块化扩展，支持目前主流的开发场景
- 强大的稳定性和兼容性
- 活跃的官方社区问题讨论，方便 Trubleshooting 与DEBUG 问题



#### Ansible 的两种安装模式（CentOS7）

1. Yum 包安装管理

```
# yum -y install ansible
```

2. Git 源代码安装[推荐]

```bash
# git clone https://github.com/ansible/ansible.git
```

3. Ansible 2.5 + Python 3.6 安装步骤（Centos 7）

- 预先安装 Python 3.6 版本
- 安装 virtualenv

```bash
# pip install virtualenv
```

- 创建 Ansible 账户并安装 python 3.6版本 virtualenv 实例

```bash
# useradd deploy && su - deploy
# virtualenv -p /usr/local/bin/python3 .py3-a2.5-env
```

4. Git 源代码安装 ansbile 2.5

```bash
# cd /home/deploy/.py3-a2.5-env
# git clone https://github.com/ansible/ansible.git
# cd ansible && git checkout stable-2.5
```

5. 加载python3.6 virtualenv 环境

```bash
#source /home/deploy/.py3-a2.5-env/bin/activate
```

6. 安装 ansible 依赖包

```bash
# pip install paramiko PyYAML jinja2
```

7. 在 python3.6 虚拟环境下加载 ansible 2.5

```bash
# source /home/deploy/.py3-a2.5-env/ansible/hacking/env-setup -q
```

8. 验证 ansible2.5

```bash
# ansible --version
```





#### 安装配置

```bash
wget http://www.python.org/ftp/python/3.6.5/Python-3.6.5.tar.xz
tar xf Python-3.6.5.tar.xz
cd Python-3.6.5
./configure --prefix=/usr/local --with-ensurepip=install --enable-shared LDFLAGS="-Wl,-rpath /usr/local/lib"
make && make altinstall // 这里报错了，所以我使用了 sudo make install
sudo ln -s /usr/local/bin/pip3.6 /usr/local/bin/pip
```

