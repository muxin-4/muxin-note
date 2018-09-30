// 1.输出变量
// 方法1
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

// 方法2
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;

// export {firstName, lastName, year}

// 2. 输出函数
// 方法1
// export function multiply(x, y) {
// 	return x * y;
// }

// 方法2
function multiply(x, y) {
	return x * y;
}

export {multiply}

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);


// 方法3，as关键字，重命名函数multiply对外接口
// function multiply(x, y) {
// 	return x * y;
// }

// export {multiply as streamV1}
