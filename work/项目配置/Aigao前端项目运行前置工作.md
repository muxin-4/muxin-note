## Aigao前端项目运行前置工作

1. npm adduser --registry http://aigao-repository:4873
2. Username:  wgy
3. password: 2340666
4. email:wgy952046097@gmail.com
5. 安装nrm(npm 源切换工具) : npm install -g nrm
6. nrm add aigao   http://aigao-repository:4873
7. nrm add taobao   https://registry.npm.taobao.org/
8. npm cache clean --force
9. 在项目根目录下面把package.json 文件中的dependencies中的两个私有仓库包先剪切出来保存在文本

   - "web-react-base-component": "0.0.1-beta2",

   - "web-react-base-config": "0.0.1-beta2"
10. nrm use taobao
11. npm i
12. 把之前剪切出来的两个依赖包的粘贴复原
13. nrm use aigao
14. npm i