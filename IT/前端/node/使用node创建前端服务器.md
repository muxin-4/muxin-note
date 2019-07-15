## Node
Windows，Mac，Linux
需要 Node 和 npm（随 node 一起安装）
与上面利用 Python 的方法相似，这里利用一个简单的命令行工具。这种方法使用 Node，这是一个流行的 JavaScript 运行环境（即在浏览器之外可以运行任意的 JavaScript 代码）。Node 在一些应用上，非常受欢迎，包括服务器。虽然 Node 很少在前端开发中出现，但是每个 Web 开发人员都可能见过它的包管理工具 npm。npm（Node Package Manager） 是一个命令行工具，可以轻松地安装和管理其他命令行工具，库和框架。

这种方法所需的安装时间可能比 Python 要多，但值得尝试，这样你对 npm 的学习有了良好的开始。话虽如此，如果你尝试利用这种方法，却遇到了问题，这不算什么 —— 使用其他方法就好了。

安装
在终端或命令行中输入 node --version。如果没有内容显示或显示错误，安装 Node。
输入 npm install -g http-server。
通过输入 http-server ~/Documents/mysite -p 8000 提供文件（将 ~/Documents/mysite 替换为你的项目目录的路径）
在你的浏览器中访问 http://localhost:8000，进行测试。