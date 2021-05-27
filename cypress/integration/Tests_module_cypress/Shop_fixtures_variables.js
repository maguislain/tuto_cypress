describe('Shopdemoqa_fixtures', function(){

    let userDetails

    beforeEach(function(){

        cy.fixture('Shopdemoqa_account').then(function(user) {
            userDetails = user
        })
    })

    it('Account Creation', function(){

        cy.visit('https://shop.demoqa.com/my-account')

            cy.get('#reg_username').type(userDetails.username)
            cy.get('#reg_email').type(userDetails.email)
            cy.get('#reg_password').type(userDetails.password)
            cy.get('.woocommerce-Button').click()

    })

})