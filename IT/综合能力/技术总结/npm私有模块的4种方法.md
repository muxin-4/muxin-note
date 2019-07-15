[npm 私有模块的3种方法](https://www.jianshu.com/p/a9540d9f8d9c)

[在5分钟内搭建企业内部私有npm仓库](https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md)



总结：

nexus oss 私服 ：适应于比较大的团队，支持全局私有包和 @scope 多种方式，使用起来会更加自由。而且不仅适用于前端团队，后端同学甚至 DevOps 都可以共用 Nexus 服务。

CNPM 私服 :这种方式更适合更大规模的团队，需要占用服务器资源，有些公司可能还需要 DevOps 同事的支持。因为是自己的私服，安装模块可以不走公网，只走公司内网，安装模块的速度会更快。

[sinopia](https://github.com/rlidwka/sinopia)（[verdaccio](https://github.com/verdaccio/verdaccio)）:简单

git + npm link: 这种方式成本最低，试用于规模比较小的团队，无需搭建私服，只要 git 仓库就可以搞定。





