/* -------------------------------------------------------------------------- */
/*                               // ECMASCRIPT 7                              */
/* -------------------------------------------------------------------------- */
console.log('exponente ES6', Math.pow(2, 3));
console.log('exponente ES7', 2 ** 3);

const array1 = [1, 2, 3, 4, 5, 6, 7];

console.log(array1.includes(8));

const arrayStr = ['Juan', 'Pablo', 'Edgardo', 'Admin'];

const test = (array) => {
    if(array.includes('Admin')) return 'se encuentra en el arreglo'
    return 'no se encuentra en el arreglo'
}

console.log(test(arrayStr));