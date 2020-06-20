import { getDataFromApi} from '../promise.js'

describe('probando prmomesas', () =>{
    test('Realizando una peticion a una API', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            // console.log(data)
            expect(data.results.length).toBeGreaterThan(3);
            done();
        });
     }); 
});