import {numbers } from '../numbers.js';

describe('Comparacion de numeros', () => {
    test('Mayor que', () => {
        expect (numbers(2,2)).toBeGreaterThan(3); // en toria si funciona pero a mi no me  funciona en la consola
    });
    test('Mayor que o igual', () =>{
        expect(numbers(2,2)).toBeGreaterOrEqual(4);
    });
    test('Menor que o igual', () =>{
        expect(numbers(2,2)).toBeLessThan(5);
    });
    test('Menor que o igual', () =>{
        expect(numbers(2,2))/l(5);
    });
    test('Numeros Flotantes', () =>{
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
});