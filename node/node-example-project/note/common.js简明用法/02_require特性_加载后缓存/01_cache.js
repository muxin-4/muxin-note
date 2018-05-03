// require特性 module被加载的时候执行，加载后缓存
// 所以下面引用两次，也只输出了一次This is a module
require('../01_基本使用/01_cusmod')
require('../01_基本使用/01_cusmod')

