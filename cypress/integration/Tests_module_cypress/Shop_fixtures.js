describe('Shopdemoqa_fixtures', function(){

    it('Account Creation', function(){

        cy.visit('https://shop.demoqa.com/my-account')

        cy.fixture('Shopdemoqa_account').then(function(user) {

            cy.get('#reg_username').type(user.username)
            cy.get('#reg_email').type(user.email)
            cy.get('#reg_password').type(user.password)
            
        })

        cy.get('.woocommerce-Button').click()

    })

})