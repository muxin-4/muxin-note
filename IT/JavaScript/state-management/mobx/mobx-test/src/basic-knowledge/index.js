function Animal() {}
function Dog() {}

Object.defineProperties(Animal.prototype, {
  name: {
    value() {
      return 'Animal';
    }
  },
  say: {
    value() {
      return `I'm ${this.name()}`;
    }
  }
});

// dog instanceof Animal => true

// dog.__proto__.__proto__... === Animal.prototype

// dog.__proto__ === Dog.prototype

// Dog.prototype.__proto__ === Animal.prototype

Dog.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Dog,
    enumerable: false
  },
  name: {
    value() {
      return 'Dog'
    }
  }
});

document.write(new Dog() instanceof Animal); // Dog继承于Animal
document.write(new Dog().say()); // 多态，Dog的name属性覆盖Animal的name属性


console.log(Dog.prototype.constructor);
