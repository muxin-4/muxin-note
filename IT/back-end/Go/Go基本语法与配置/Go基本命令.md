# Go基本命令
#### 常用命令

- ```go build     compile packages and dependencies```
  - go build 加上可以编译的go源文件可以得到一个可执行文件。
- ```go install     compile and install packages and dependencies```
  - go install 在编译源代码之后还安装到指定的目录
- ```go get  download and install packages and dependencies```
  - 用于获取go的第三方包，通常会默认从git repo上pull最新的版本
  - 常用命令如：go get -u github.com/go-sql-driver/mysql（从github上获取mysql的driver并安装至本地）
- ```fmt       gofmt (reformat) package sources  ```
  -  类似于C中的lint，统一代码风格和排版
- ```test   test packages   ```
  - 运行当前包目录下的tests
  - 常用命令： ```go test```和```go test -v ``` 

#### FAQ

1. go build 和 go install的区别

   都是编译，install与build的最大区别是编译后会将输出文件打包成库放在pkg下
```go
go -help
Go is a tool for managing Go source code.

Usage:

	go <command> [arguments]

The commands are:
	install     compile and install packages and dependencies
	build       compile packages and dependencies
	bug         start a bug report
	clean       remove object files and cached files
	doc         show documentation for package or symbol
	env         print Go environment information
	fix         update packages to use new APIs
	fmt         gofmt (reformat) package sources
	generate    generate Go files by processing source
	get         download and install packages and dependencies
	list        list packages or modules
	mod         module maintenance
	run         compile and run Go program
	test        test packages
	tool        run specified go tool
	version     print Go version
	vet         report likely mistakes in packages

Use "go help <command>" for more information about a command.

Additional help topics:

	buildmode   build modes
	c           calling between Go and C
	cache       build and test caching
	environment environment variables
	filetype    file types
	go.mod      the go.mod file
	gopath      GOPATH environment variable
	gopath-get  legacy GOPATH go get
	goproxy     module proxy protocol
	importpath  import path syntax
	modules     modules, module versions, and more
	module-get  module-aware go get
	packages    package lists and patterns
	testflag    testing flags
	testfunc    testing functions

Use "go help <topic>" for more information about that topic.
```




