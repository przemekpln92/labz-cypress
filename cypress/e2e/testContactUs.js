const { contactUsPage } = require("../support/page_objects/contactUsPage")

describe('Contact Us Tests', () => {

    beforeEach('open website', () => {
        cy.visit('/Contact-Us/contactus.html')
    })

    it('Send Form With Correct Data', () => {
        contactUsPage.fillAndSendForm("Adam", "Kowalski", "abc@abc.pl", "any")
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })

})