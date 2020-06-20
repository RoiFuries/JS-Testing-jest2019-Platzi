const { TestScheduler } = require("jest");

// despues de cada prueba
afterEach(() => console.log ('despues de cada prueba'));
afterAll(() => console.log ('despues de todas las pruebas'));

// antes de cada prieba

beforeAll(() => console.log ('antes de todas las pruebas'));
beforeEach(() => console.log ('Antes de cada prueba'));

describe('Preparar antes de ejecutar', () => {
    test('Es verdaderor', () =>{
        expect(true).toBeTruthy();
    });
});