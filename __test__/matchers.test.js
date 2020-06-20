 describe('Comparadores comunes', () => {
    const user ={
        name: "roi",
        lastname: "Furies"
    }
    const user2 ={
        name: "roi",
        lastname: "Furies2"
    }

    test('igualidad de elementos', () => {
        expect(user).toEqual(user2);
    });
    test('no son del todo iguales', () => {
        expect(user).not.toEqual(user2);
    });

})