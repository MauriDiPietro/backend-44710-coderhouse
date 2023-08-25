import { Tareas } from "../utils/tareas.js";
import { expect, assert, should } from 'chai';

describe('Tests unitarios app tareas', ()=>{
    before(()=>{
        console.log('se ejecuta antes de los tests');
    })
    after(()=>{
        console.log('se ejecuta despues de los tests');
    })
    it('Debería crear el array de tareas vacío', ()=>{
        //etapa de preparacion
        const tareas = new Tareas();

        //etapa de ejecucion
        const listTareas = tareas.list();

        //etapa de afirmaciones
        expect(listTareas).to.have.lengthOf(0);
        assert.lengthOf(listTareas, 0);
        assert.strictEqual(listTareas.length, 0);
    })

    it('Debería registrar una tarea correctamente', ()=>{
        const tareas = new Tareas();
        tareas.add('salir a caminar');
        const listTareas = tareas.list();
        assert.strictEqual(listTareas.length, 1);
        assert.deepStrictEqual(listTareas, [
            {
                title: 'salir a caminar',
                complete: false
            }
        ]);
    })

    it('Se debería poder marcar una tarea como completa', ()=>{
        const tareas = new Tareas();
        const listTareas = tareas.list();
        tareas.add('salir a correr');
        tareas.add('ir al cine');
        tareas.complete('ir al cine');
        assert.deepStrictEqual(listTareas, [
            { title: 'salir a correr', complete: false },
            { title: 'ir al cine', complete: true }
        ]);
    })

    it('Comprobar error en completar tarea inexistente', ()=>{
        const tareas = new Tareas();
        const fn = () => {
            tareas.complete('tarea1');
        };
        assert.throws(fn, Error, 'No hay tareas');
        expect(fn).to.throw(Error, 'No hay tareas');
    })
})
