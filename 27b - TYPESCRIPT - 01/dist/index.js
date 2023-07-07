"use strict";
function hola(name) {
    console.log(`Hola como estas ${name}`);
}
hola('Juan');
/* ------------------------------------ - ----------------------------------- */
// let myFirstVar: string
let myFirstVar; //tupla
console.log(myFirstVar);
let myBooleanVar;
let myNullVar;
let myUndefinedVar;
console.log(myUndefinedVar);
/* ------------------------------------ - ----------------------------------- */
function greeting() {
    // return 'hola'    //! error
    console.log('hola');
}
function greeting2() {
    return 'hola';
    // console.log('hola');
}
console.log(greeting2());
function greeting3(name) {
    return `Hola ${name}`;
}
const greeting4 = (name1, name2) => {
    return `Hola ${name1} y ${name2}`;
};
console.log(greeting4(true, 'carlos'));
