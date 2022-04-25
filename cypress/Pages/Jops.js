class Jobs{ 

    go() {
        cy.visit('/');
        cy.wait(3000)
    }

    login(user) {
        cy.get('div[class="absolute-wrapper"]').type(user.email)
    }
}
export default new Jobs;