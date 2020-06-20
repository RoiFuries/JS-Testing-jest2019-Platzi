import { isNull, isTrue} from '../true.js'
import { isFalse, isUndefined} from '../true.js'

describe ('probar si es null', () => {
    test ('null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('probar si es true', () => {
    test ('Verdaderos', () => {
        expect (isTrue()).toBeTruthy();
    }); 
});

describe ('probar si es falso', () => {
    test ('falsos', () => {
        expect(isFalse()).toBeFalsy();
    });
});
describe ('probar si es isUndefined', () => {
    test('isUndefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});