describe('Exemple d_upload d_image via cypress', function() {

    before(function(){
        cy.visit('https://demoqa.com/upload-download')
    })

    it('Upload d_une photo et verificiation de l_upload', function(){
        const filepath = 'images/myPhotography.jpg'
        cy.get('#uploadFile').attachFile(filepath)
        cy.get('#uploadedFilePath').contains('myPhotography.jpg')
    })
})