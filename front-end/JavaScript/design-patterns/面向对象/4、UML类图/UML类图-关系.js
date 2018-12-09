class People {
	constructor(name, house) {
		this.name = name
		this.house = house
	}
	saySomething() {

	}
}

class A extends People {
	constructor(name, house) {
		super(name, house)
	}
	saySomething() {
		alert('I am A')
	}
}

class B extends People {
	constructor(name, house) {
		super(name, house)
	}
	saySomething() {
		alert('I am B')
	}
}
let aHouse = new House('beijing')
let a = new A('a', aHouse)
