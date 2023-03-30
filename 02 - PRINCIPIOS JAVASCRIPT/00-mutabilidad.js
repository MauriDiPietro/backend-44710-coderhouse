const array = [];

// array = [1];    //TypeError: Assignment to constant variable.

array.push(1)
console.log(array);

const user = {
    name: 'Juan',
    age: 42
};

user.name = 'Maxi';
console.log(user);