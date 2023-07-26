import Calculadora from "../calculadora.js";

describe('conjunto de pruebas de Suma', ()=> {
    it('deberia sumar dos numeros', ()=>{
        const num1 = 5;
        const num2 = 10;
        const numEsperado = 15;

        const res = Calculadora.suma(num1, num2);

        expect(res).toBe(numEsperado);
    })

    it('si recibe argumentos no numéricos, debe responder con un error', () => {
        const arg1 = 4;
        const arg2 = 'pepe';
        const res = () => Calculadora.suma(arg1, arg2);
        expect(res).toThrow('Argumentos invalidos')
    })
})