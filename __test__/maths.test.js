import{ sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', ()=>{
    test('Prueba de sumas', ()=>{
        expect(sumar(1,1)).toBe(2);
    });
    test('Multiplicar', () =>{
        expect (multiplicar(2,2)).toBe(4);
    });
    test('Restar', () =>{
        expect (restar(3,1)).toBe(2);
    });
    test('Dividir', () =>{
        expect (dividir(8,2)).toBe(4);
    });
});