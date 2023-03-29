/* ------------------------------- Primitivos ------------------------------- */

let variable1 = 'Hola';
let variable2 = 10;
let variable3 = true; //false
let variable4 = null;
let variable5 = undefined;

console.log(typeof variable1);

/* --------------------------------- objeto --------------------------------- */

console.log(new Date());
console.log('Atención'.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
// throw new Error('Error coderhouse');

//funciones
function Saludo(name){
    console.log(`Hola ${name}`);
};
Saludo('Juan Roman');

const saludoArrow = (name) => {
    console.log(`Hola ${name}`);
}
saludoArrow('Martin')

//clases
class ClaseEjemplo{
    constructor(){

    }
    saludar(nombre){
        console.log(`Hola ${nombre}`);
    }
}

const instanciaClase = new ClaseEjemplo();
instanciaClase.saludar('Roberto');

//arrays
const array = [1, 'Hola', true, null, undefined];
console.log(array);

const array2 = [{name: 'Roberto', age: 45}, {name: 'Carlos', age: 65}]
console.log(array2[0].name);

//objeto global 
console.log(process.cwd());
