// 循环加载(避免这种写法)
// 定义：a require了 b，b又require了a
// 一旦出现某个模块被循环加载，就只输出已执行的部分，还未执行的部分不会输出
const modA = require('./02_requireA')

const modB = require('./03_requireB')
