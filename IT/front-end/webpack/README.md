# 常用 Loader
编译相关
babel-loader、ts-loader
样式相关
style-loader、css-loader、less-loader、postcss-loader
文件相关
file-loader、url-loader

plugins
参与这个打包过程
打包优化和压缩
配置编译时的变量

常用plugins
优化相关
CommonsChunkPlugin 提取不同Chunk之间相同的代码
UglifyjsWebpackPlugin 混淆压缩代码
功能相关
ExtractTextWebpackPlugin  不同的 bundle, or bundles，比如css，提取成一个文件
HtmlWebpackReplacementPlugin
HotModuleReplacementPlugin
CopyWebpackPlugin     打包时候，引用第三方资源，第三方资源不需要打包

常用打包命令
npx webpack index.js
npx webpack --config 配置文件名
