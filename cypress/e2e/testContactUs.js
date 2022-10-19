const { contactUsPage } = require("../support/page_objects/contactUsPage")

describe('Contact Us Tests', () => {

    beforeEach('open website', () => {
        cy.visit('/Contact-Us/contactus.html')
    })

    it('Send Form With Correct Data', () => {
        contactUsPage.fillAndSendForm("Adam", "Kowalski", "abc@abc.pl", "any")
        cy.get('h1').should('contain', 'Thank You for your Message!')
    })

    it('Fill Form And Reset', () => {
        contactUsPage.fillFormAndReset("Adam", "Kowalski", "abc@abc.pl", "any")
        contactUsPage.verifyFormPlaceHolders()
    })

    it('Send Form With Incomplete Data', () => {
        contactUsPage.fillAndSendForm("Adam", "", "abc@abc.pl", "")
        cy.get('body').should('contain', 'Error: all fields are required')
    })

    it('Send Form With Wrong Email', () => {
        contactUsPage.fillAndSendForm("Adam", "Kowalski", "abcabc.pl", "any")
        cy.get('body').should('contain', 'Error: Invalid email address')
    })
})