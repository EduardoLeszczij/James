/// <reference types="cypress" />

import test from '../Pages/Orkestra'



describe("Pendências", () => {
    var maestro = {
        email: 'eduardo.leszczij@jamesdelivery.com.br',
        password: '123456',
        Id: '5916',
        cardId: '#5916',
    }

    it('transferir pendências', () => {

        test.go();
        test.login(maestro);
        test.transferirPendencia(maestro);


    });
})

describe("Entregador", () => {

    var maestro = {
        email: 'eduardo.leszczij@jamesdelivery.com.br',
        password: '123456',
        Id: '5916',
        cardId: '#5916',
        entregador: ' Entregador James '
    }

    it('transferir entregador', () => {

        test.go();
        test.login(maestro);
        test.tranferirEntregador(maestro);


    });
})

describe("Entregador Inválido", () => {

    var maestro = {
        email: 'eduardo.leszczij@jamesdelivery.com.br',
        password: '123456',
        Id: '5916',
        cardId: '#5916',
        entregador: ' Entregador James '
    }

    it('transferir entregador inválido', () => {

        test.go();
        test.login(maestro);
        test.tranferirEntregador(maestro);


    });
})

// before 
// describe("Shopper", () => {

//     var maestro = {
//         email: 'eduardo.leszczij@jamesdelivery.com.br',
//         password: '123456',
//         Id: '5916',
//         cardId: '#5916',
//         shopper: 'Wilson Montelo',
//         excpectedMsg: ' Wilson Montelo '
//     }

//     it('transferir shopper', () => {

//         test.go();
//         test.login(maestro);
//         test.transferirShopper(maestro);


//     });
// })

