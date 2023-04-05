/* -------------------------------------------------------------------------- */
/*                               // ECMASCRIPT 9                              */
/* -------------------------------------------------------------------------- */

/* ----------------------------- spread operator ---------------------------- */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(...array);
console.log(Math.min(...array));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));

const array2 = [...array, 10, 15, 20];
console.log(array2);

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    ...obj1,
    d: 4
}

console.log('Obj2', obj2);

/* ------------------------------ rest operator ----------------------------- */

const myFunc = (a, b, ...otrosParametros) => {
    console.log(a);
    console.log(b);
    console.log(otrosParametros);
}

console.log('ejecutando operador rest');
myFunc(1, 2, 'hola', 4, true);

