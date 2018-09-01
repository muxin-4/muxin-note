# Mac OS X 通过Homebrew安装Go

1. brew 安装 go

```javascript
brew install go
```

2. 设置Path

   Go需要在根目录下设置path

   ```javascript
   open .zshrc
   ```

   粘贴下面命令

   ```javascript
   # go
   export GOROOT=/usr/local/opt/go/libexec
   export GOPATH=$HOME/.go
   export PATH=$PATH:$GOROOT/bin:$GOPATH/bin
   ```

   ```javascript
   :wq!
   ```

3. 测试成功

   命令行

   ```javascript
   cd ~
   vim hello.go
   ```

   ```javascript
   // hello.go
   package main
   import "fmt"
   
   func main() {
     fmt.Printf("Hello, world!")
   }
   ```

   然后运行

   ```javascript
   go run hello.go
   ```

   ![](https://ws3.sinaimg.cn/large/006tNbRwgy1fuu3wr4ftkj30wi0p475m.jpg)