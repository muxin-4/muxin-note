class jQuery {
	constructor(selector) {
		let slice = Array.prototype.slice
		let dom = slice.call(document.querySelectorAll(selector))
		let len = dom ? dom.length : 0
		for (let i = 0; i < len; i++) {
			this[i] = dom[i]
		}
		this.length = len
		this.seletor = selector || ''
	}
	append(node) {

	}
	addClass(name) {

	}
	html(data) {

	}
	// 此处省略n个API
}
window.$ = function(selector) {
	// 工厂模式
	return new jQuery(selector)
}

// 测试代码
var $p = $('p')
console.log($p)
console.log($p.addClass)