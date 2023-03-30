function saludar1(name){
    return `Hola ${name}`;
}

const saludar2 = (name) => {
    return `Hola ${name}`;
}

const saludar3 = name => `Hola ${name}`;

console.log(saludar1('Daniel'));
console.log(saludar2('Maxi'));
console.log(saludar3('Nico'));

/* ---------------------- funcion flecha como callback ---------------------- */

const array = [ 1, 2, 3, 4, 5 ];

const array2 = array.filter(x => x > 1);

console.log(array2);

/* ----------------------------- scope funciones ---------------------------- */

const function1 = () => {
    let num = 1;
    console.log(num);
}

// console.log(num);   //ReferenceError: num is not defined

function1();

/* ---------------------------- template strings ---------------------------- */

let name1 = 'Manuel';
console.log(`Mi nombre es ${name1}`);