import {callbackHell} from '../callback.js';

describe('Pruebas probando un callback', () =>{
    test('Pribar un calback', done =>{
        function otherCalback(data){
            expect(data).toBe('Hola Javaescripter')
            done();
        };
        callbackHell(otherCalback);
    });
});