/* -------------------------------------------------------------------------- */
/*                                    ES11                                    */
/* -------------------------------------------------------------------------- */

/* --------------------------------- nullish -------------------------------- */

let altura = 0;

// console.log('Altura: ', altura || 100);
console.log('Altura: ', altura ?? 100);

/* --------------------------- variables privadas --------------------------- */

class Person{
    #fullname;
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
        this.#fullname = `${this.name} ${this.lastname}`;
    }

    getFullNAme = () => {
        return this.#fullname;
    }

    #methodPrivate = () => {
        return 'soy un metodo privado';
    }

    getMethodPriv = () => {
        return this.#methodPrivate();
    }
}

const instance = new Person('Juan', 'Perez');
console.log(instance.getFullNAme());
// console.log(instance.#methodPrivate());
// console.log(Person.#fullname)   //SyntaxError: Private field '#fullname' must be declared in an enclosing class