class Person {
    constructor(name){
        this.name = name;
    }

    static staticVariable = 'esto es una variable estatica';

    getName(){
        return this.name;
    }
};

console.log(Person.staticVariable);
const instance1 = new Person('Juan');
const instance2 = new Person('Pedro');

console.log(instance1.getName());
console.log(instance2.getName());
