class User {
	fullName: string

	constructor(public firstName: string, public lastName: string) {
		this.firstName = firstName
		this.lastName = lastName
		this.fullName = firstName + ' ' + lastName
	}
}

interface Person {
	firstName: string
	lastName: string
}

function greeter(person: Person) {
	return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('Mu', 'Xin')

console.log(greeter(user))
