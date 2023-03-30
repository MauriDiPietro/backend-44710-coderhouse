/**
Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
1-La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.
 */

class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }
    static contadorGlobal = 0;

    getResponsable = () => { return this.nombre };

    // getResponsable(){ return this.nombre }
    
    getCuentaGlobal = () => { return 'Contador global = '+ Contador.contadorGlobal };

    getCuentaIndividual = () => { return `Cuenta individual de ${this.nombre} =`+ this.contador };

    contar = () => {
        Contador.contadorGlobal++;  //variable estatica
        this.contador++;            //contador de la instancia
    }
};

const cont1 = new Contador('Emmanuel');
const cont2 = new Contador('Augusto');

console.log(cont1.getResponsable());
console.log(cont2.getResponsable());
cont1.contar(); //emmanuel
console.log(cont1.getCuentaIndividual());
console.log('Contador global = ' + Contador.contadorGlobal);
console.log('--sumo 1 a augusto--');
cont2.contar(); //augusto
console.log('Contador global = ' + Contador.contadorGlobal);
cont1.contar(); //emmanuel
console.log('--sumo 1 a emmanuel--');
console.log('Contador global = ' + Contador.contadorGlobal);
console.log(cont1.getCuentaIndividual());
console.log(cont1.getCuentaGlobal());