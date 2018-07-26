// 父类
class People {
	name
	age
	protected weight // 受保护的属性，只有自己或者子类
	constructor(name, age) {
		this.name = name
		this.age = age
		this.weight = 120
	}
	eat() {
		alert(`${this.name} eat something`);
	}
	speak() {
		alert(`My name is ${this.name}, age ${this.age}`)
	}
}

// 子类继承父类
class Student extends People {
	number
	private girlfriend
	constructor(name, age, number) {
		super(name, age)
		this.number = number
		this.girlfriend = 'xiaoli'
	}
	study() {
		alert(`${this.name} study`)
	}
	getWeight() {
		alert(`weight ${this.weight}`)
	}
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.getWeight()
alert(xiaoming.girlfriend)