/**
 * 构造函数模式
 *
 * @param {*} name
 * @param {*} age
 * @param {*} job
 */
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name);
  };
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
