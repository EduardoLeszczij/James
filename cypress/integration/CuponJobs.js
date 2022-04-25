/// <reference types="cypress" />

import jops from '../Pages/Jops'

describe("Cupon", () => {

    var user = {
        email: 'eduardo.leszczij@jamesdelivery.com.br',
        password: '123456'
    };

    it('addCupon', () => {
        jops.go();

        jops.login(user);
    });

});
