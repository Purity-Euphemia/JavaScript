const Person = {
    name: "John",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const Employee = Object.create(Person);
Employee.jobTitle = 'Software Engineer';
//Employee.greet = function () {
    //console.log(`Hello, my name is ${this.name} and I am ${this.jobTitle}`);

//}

Employee.greet();