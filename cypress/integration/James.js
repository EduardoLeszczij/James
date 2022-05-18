/// <reference types="cypress" />

import test from '../Pages/Orkestra'



describe("Pendências", () => {
    var maestro = {
        email: 'maestro1@james.com',
        password: '123456',
        Id: '5951',
        cardId: '#5951',
        user: ' Maestro Madruga Polko '
    }

    it('transferir pendências', () => {

        test.go();
        test.login(maestro);
        test.transferirPendencia(maestro);


    });
})

describe("Entregador", () => {

    var maestro = {
        email: 'maestro1@james.com',
        password: '123456',
        Id: '5951',
        cardId: '#5951',
        entregador: ' Entregador James '
    }

    it('transferir entregador', () => {

        test.go();
        test.login(maestro);
        test.tranferirEntregador(maestro);


    });
})

// describe("Entregador Inválido", () => {

//     var maestro = {
//         email: 'maestro1@james.com',
//         password: '123456',
//         Id: '5951',
//         cardId: '#5951',
//         entregador: ' Entregador James '
//     }

//     it('transferir entregador inválido', () => {

//         test.go();
//         test.login(maestro);
//         test.tranferirEntregador(maestro);


//     });
// })

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

// describe("Buscar Pedido Modulo B2B", () => {

//     var maestro = {
//         email: 'maestro1@james.com',
//         password: '123456',
//         Id: '5951',
//         cardId: '#5951',
//         city: ' Curitiba '
//     }

//     it('Buscar-Pedido-B2B', () => {
//         test.go();
//         test.login(maestro);
//         test.pedidoB2B(maestro);
//     });
// })

// describe('Setar Tarifa Dinâmica', () => {

//     var maestro = {
//         email: 'eduardo.leszczij@jamesdelivery.com.br',
//         password: '123456',
//         city: 'Curitiba',
//         dynamicTariff: ' 1.2 ',
//         time: ' 15 min '
//     }

//     it('Adicionar Tarifa Dinâmica', () => {
//         test.go();
//         test.login(maestro);
//         test.addTarifaDinamica(maestro);
//     })
// })

// describe('Cancelar Tarifa Dinamica', () => {

//     var maestro = {
//         email: 'eduardo.leszczij@jamesdelivery.com.br',
//         password: '123456',
//         city: 'Curitiba'
//     }

//     it('Cancelar Tarifa', () => {
//         test.go();
//         test.login(maestro);
//         test.cancelTarifaDinamica(maestro)
//     });
// })