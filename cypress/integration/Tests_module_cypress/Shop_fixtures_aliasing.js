describe('Shopdemoqa_fixtures', function(){

    beforeEach(function(){

        cy.fixture('Shopdemoqa_account').as('user')
    })

    it('Account Creation', function(){

        cy.visit('https://shop.demoqa.com/my-account')          
    })
})