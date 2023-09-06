function hola(name: string){
    console.log(`Hola como estas ${name}`);
    
}
hola('Juan')

/* ------------------------------------ - ----------------------------------- */

// let myFirstVar: string
let myFirstVar: string | undefined;     //tupla

console.log(myFirstVar);

let myBooleanVar: boolean | undefined;
let myNullVar: null | undefined;
let myUndefinedVar: undefined;

console.log(myUndefinedVar);

/* ------------------------------------ - ----------------------------------- */

function greeting(): void {     //no retorna nada
    // return 'hola'    //! error
    console.log('hola');
}

function greeting2(): string {     //retorna string
    return 'hola'    
    // console.log('hola');
}

console.log(greeting2())

function greeting3(name: string): string {
    return `Hola ${name}`;
}

const greeting4 = (name1: string | boolean, name2: string): string => {
    return `Hola ${name1} y ${name2}`;
}

const greeting5 = (name1: string | boolean, name2: string): void => console.log(`Hola ${name1} y ${name2}`);


console.log(greeting4(true, 'carlos'))
