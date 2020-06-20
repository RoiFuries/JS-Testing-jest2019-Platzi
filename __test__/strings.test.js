const { TestScheduler } = require("jest")

describe('comprobar cadenas de textp',()=>{

    const text = 'Un bonito texto';

    test('debe de tener el siguiente texto', () =>{
        expect(text).toMatch(/bonito/);
    });
    test('no debe de tener el siguiente texto', () =>{
        expect(text).not.toMatch(/bjujhi/);
    });
    test('comprobar logitud', () =>{
        expect(text).toHaveLength(15);
    });
});