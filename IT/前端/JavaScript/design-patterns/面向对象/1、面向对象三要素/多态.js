class People {
	constructor(name) {
		this.name = name
	}
	saySomething() {

	}
}

class A extends People {
	constructor(name) {
		super(name)
	}
	saySomething() {
		alert('I am A')
	}
}

class B extends People {
	constructor(name) {
		super(name)
	}
	saySomething() {
		alert('I am B')
	}
}
let a = new A('a')
a.saySomething()
let b = new A('b')
b.saySomething()