import {arrayFruits, arrayColors } from '../arrays.js';

describe ('comprobaremos que existe un elemento',() =>{
    test('Tiene una banana?', () =>{
        expect(arrayFruits()).toContain('banana');
    });
    test('No tiene una banana?', () =>{
        expect(arrayFruits()).not.toContain('banana2');
    });
    test('comprobar el tama;o del arreglo',()=>{
        expect(arrayFruits()).toHaveLength(5)
    })
    test('comprobaremos algo con el color',()=>{
        expect(arrayColors()).toContain('azul');
    });

});
