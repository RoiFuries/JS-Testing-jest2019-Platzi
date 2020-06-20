import {getCharacter} from '../snapshot.js';
import {rick} from '../rick.json';

describe ('Es hora de las instantaneas', () =>{
    test('Snapchot', () =>{
        expect(getCharacter(rick)).toMatchSnapshot();
    });
});
