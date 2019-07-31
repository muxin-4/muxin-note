# Mac使用tree生成目录结构

> 项目中经常需要生成项目的结构树。

Mac或者Linux下可以使用tree列出项目结构，如下图所示：

```
.
├── App.js
├── ChangeLog.md
├── LICENSE
├── README.md
├── __tests__
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── app.json
├── artifacts
│   ├── App.js
│   ├── App.js.map
│   ├── boot
│   ├── container
│   ├── store
│   ├── stories
│   └── theme
├── assets
│   ├── loading.png
│   ├── logo-dark.png
│   └── shadow.png
├── doc
│   ├── common-errors.md
│   └── react-native-style.md
├── index.js
├── ios
│   ├── ReactNativeSeed
│   ├── ReactNativeSeed-tvOS
│   ├── ReactNativeSeed-tvOSTests
│   ├── ReactNativeSeed.xcodeproj
│   ├── ReactNativeSeedTests
│   └── build
├── jsconfig.json
├── package.json
├── src
│   ├── App.tsx
│   ├── boot
│   ├── container
│   ├── store
│   ├── stories
│   └── theme
├── tsconfig.json
├── tslint.json
├── typings.d.ts
└── yarn.lock

26 directories, 25 files
```



## 1. Mac安装

打开终端

`brew install tree`

常用命令

- `tree -a` 显示所有文件和目录。
- `tree -d `只显示文件夹；
- `tree -L n` 显示项目的层级，n表示层级数。例：显示项目三层结构，tree -l 3；
- `tree -I pattern` 用于过滤不想要显示的文件或者文件夹。比如要过滤项目中的`node_modules`文件夹，`tree -I “node_modules”`
- tree > tree.md




举个例子，如果我们要显示某个项目下2层的所有文件结构，同时又过滤node_modules文件夹，最后输出到tree.md，可以这么写：

```
tree -L 2 -I "node_modules"
```

更多命令的使用可以查看`tree --help`。



参考文章

1. https://www.sing1.top/2017/09/12/mac-tree-usage/


2. http://www.cnblogs.com/ayseeing/p/4097066.html






