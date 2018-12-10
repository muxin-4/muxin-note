[npm 私服工具verdaccio 搭建(二) （ps:欲使用sinopia搭建私服的一定要看过来）](https://blog.csdn.net/YYZZHC999/article/details/80114218)



添加npm作者：`npm adduser`

发布：`npm publish`

删除已发布npm包：`npm unpublish --force`





私有npm仓库地址：`http://aigao-repository:4873`

#### 私有npm包发布





`npm adduser --registry http://aigao-repository:4873`

Username:  `wgy`

password: `2340666`

email:`wgy952046097@gmail.com`

`npm publish --registry http://aigao-repository:4873`



`npm unpublish --force --registry http://aigao-repository:4873`



```
npm config list -l # 查看默认配置
```



```
npm set registry http://aigao-repository:4873
```

```
cat .npmrc
```



```
nrm ls
```













