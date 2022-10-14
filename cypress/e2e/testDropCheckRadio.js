import { dropCheckRadioPage } from "../support/page_objects/dropCheckRadioPage"


describe('Contact Us Tests', () => {

    beforeEach('open website', () => {
        cy.visit('/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Check All Dropdown Options', () => {
        dropCheckRadioPage.verifyDropDowns()
    })

    it('Checkbox', () => {
        dropCheckRadioPage.verifyCheckBoxes()
    })

    it.only('Radio Buttons', () => {
        dropCheckRadioPage.verifyRadioButtons()
    })
})