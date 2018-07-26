## bower类库说明
    ionic: 一个移动端UI框架，构建在angularjs基础上
    ilex-ng-common：内部项目，基于angularjs的js公共内容
    lodash：为js增加了许多使用帮助方法
    angular-moment：angular版本的moment.js，时间库

## 开发基本步骤

### install global dependency (add sudo on demand)
    npm install -g cordova
    npm install -g bower gulp
    npm install -g yo
    npm install -g generator-cg-gas

### install project dependency
    cd project-dir
    npm install && bower install

### develop
    gulp

### add angular modules
    yo cg-gas:directive my-directive
    yo cg-gas:partial my-partial
    yo cg-gas:service my-service
    yo cg-gas:filter my-filter
    yo cg-gas:module my-module
    yo cg-gas:modal my-modal
    yo cg-gas:architecture


## 仿真、打包

### pre build
    gulp build --env=test
    gulp build --env=demo

### config platforms
    cordova platform remove ios

    cordova platform add ios
    cordova platform add android

### generate image resources
resources文件夹下放两个图片：

* 192*192的icon.png
* 2208*2208的splash.png

    ionic resources

    图片清理问题尝试:
    ionic prepare android
    ionic prepare ios
    ionic resources

### build / package

android

[参考](http://forum.ionicframework.com/t/ionic-toturial-for-building-a-release-apk/15758)

    cordova build android --release [发布]
    cordova run android [发布测试]
    cordova run android --target=750BBKG22DM6
    cordova run android --device
    adb remove com.xxx.app [彻底清除usb安装app]
ios

    cordova build ios --release
    # 使用xcode打开 platforms/ios下项目发布

### emulate
    cordova emulate ios
    cordova emulate ios --target="不同xcode不一样"


### 其他参考

[cordova cli](http://cordova.apache.org/docs/en/5.0.0/guide_cli_index.md.html#The%20Command-Line%20Interface)


#手机浏览器下载，替换appkey即可
http://www.pgyer.com/apiv1/app/install?_api_key=ba72068c5ca887c838feef98e807adcb&aKey=d2e59b89446d1a4f8d9da2cbcddcee2e

## 备注
德品质css rem转换比例 75/24*德品质rem