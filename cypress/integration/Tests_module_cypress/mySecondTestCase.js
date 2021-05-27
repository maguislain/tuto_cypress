describe('Actions on element', function(){

    it('finds the element "type"', function(){

        cy.visit('https://example.cypress.io')
        cy.contains('type').click()

        // Vérification que la nouvelle url contient '/commands/actions'
        cy.url().should('include', '/commands/actions')

        //écrire une adresse mail dans le champ adresse mail
        cy.get('#email1').type('test@testmail.com')
          .should('have.value', 'test@testmail.com')
    })















})