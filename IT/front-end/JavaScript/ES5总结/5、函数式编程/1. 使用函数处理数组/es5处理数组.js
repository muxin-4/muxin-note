/**
 * 
 * 假设有一个数组，数组元素都是数字，我们想要计算这些元素的平均值和标准差。
 * 
 * 下面分别使用非函数式编程风格和函数式编程风格实现解决这个问题。
 */


var data = [1, 1, 3, 5, 5]; // 这里是待处理的数组

// 平均数是所有元素的累加加值除以元素个数
var total = 0;
for (var i = 0; i < data.length; i++) total += data[i];

// 计算标准差，首先计算每个数据减去平均数之后偏差的平方然后求和
total = 0;
for (var i = 0; i < data.lenth; i++) {
	var deviation = data[i] - menubar;
	total += deviation * deviation;
}
var stddev = Math.sqrt(total / (data.lenth - 1)); // 标准差的值是2