class Teste {

    go() {
        cy.visit("/");
    }

    login(maestro) {
        cy.get('input[type="text"]').type(maestro.email);
        cy.get('input[type="password"]').type(maestro.password);
        cy.get('button[class="access__form__button"]').click();
        cy.wait(3000)
    }

    transferirPendencia(maestro) {
        cy.wait(3000);
        cy.get('input[placeholder="Buscar pedidos por ID ou nomes"').type(maestro.Id);
        cy.contains('.order-card-top__right__id', maestro.cardId).click();
        cy.get('span[class="col-1 detail-header__id"]').should('have.text', '#5951');
        cy.get('button[class="detail-header__pendings__btn"]').click();
        cy.get('span[class="order-issues__title"]').should('have.text', ' pendências deste pedido ');
        cy.get('button[class="btn btn--neutral"]').click();

        cy.get('span[class="order-issues__title"]').should('have.text', ' Transferir pendências do pedido ');
        cy.get('input[id="mat-checkbox-2-input"]').click({ force: true });
        cy.get('input[id="mat-checkbox-3-input"]').click({ force: true });
        cy.get('.order-issues__footer button[class="btn btn--success"]').click();

        cy.get('button[class="btn btn--neutral"]').click();
        cy.get('.mat-row.cdk-row.ng-star-inserted .mat-cell.cdk-cell.cdk-column-orders.mat-column-orders.ng-star-inserted')
            .contains('57').click();
        cy.get('.confirm-modal__footer button[class="btn btn--success"]').click();
    }

    tranferirEntregador(maestro) {
        cy.get('input[placeholder="Buscar pedidos por ID ou nomes"').type(maestro.Id);
        cy.contains('.order-card .order-card-top__right__id', maestro.cardId).click();
        cy.get('span[class="col-1 detail-header__id"]').should('have.text', '#5951');
        cy.wait(3000)
        cy.get('[type="entregador"] > .order-agents__agent > .order-agents__header > .order-agents__header__icon > .mat-menu-trigger > svg')
            .click();

        cy.get('button[role="menuitem"]').contains(' Alocar manualmente ').click({ force: true });
        cy.get('tbody td').contains(maestro.entregador).click();

        cy.get('span[class="modal-body__title"]').should('have.text', 'Confirmar escolha de Entregador');
        cy.get('.modal-footer__yes-btn button[class="btn btn--success"]').click();

        cy.contains('.order-agents__name.ng-star-inserted', maestro.entregador).should('have.text', maestro.entregador)
    }

    transferirShopper(maestro) {
        cy.get('input[placeholder="Buscar pedidos por ID ou nomes"').type(maestro.Id);
        cy.contains('.order-card .order-card-top__right__id', maestro.cardId).click();
        cy.get('span[class="col-1 detail-header__id"]').should('have.text', '#5951');
        cy.get('[type="shopper"] > .order-agents__agent > .order-agents__header > .order-agents__header__icon > .mat-menu-trigger > svg')
            .click();
        cy.get('button[role="menuitem"]').contains(' Alocar manualmente ').click({ force: true });


        cy.get('h1[class="mat-dialog-title title ng-star-inserted"]').should('have.text', 'Escolher Shopper\n');
        cy.get('td[class="mat-cell cdk-cell cdk-column-name mat-column-name ng-star-inserted"]')
            .contains(maestro.shopper).click();

        cy.get('span[class="confirm-shopper-change__title"]')
            .should('have.text', ' Confirmar escolha de Shopper ');
        cy.get('.confirm-shopper-change__footer button[class="btn btn--success"]').click();
        cy.get('.close-btn > svg').click();

        cy.get('[type="shopper"] > .order-agents__agent > .order-agents__name').should('have.text', maestro.excpectedMsg);



    }  

    pedidoB2B(maestro) {

        cy.wait(3000)
        cy.get('mat-icon[svgicon="b2b-icon"]').click();
        cy.wait(3000)
        cy.get('input[placeholder="ID do pedido"]').type(maestro.Id);
        cy.get('div[class="order-pending"]').click();
    }


}
export default new Teste;