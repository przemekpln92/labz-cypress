import { ajaxPage } from "../support/page_objects/ajaxPage"



describe('Ajax Loader', () => {

    beforeEach('open website', () => {
        cy.visit('/Ajax-Loader/index.html')
    })

    it('Ajax', () => {
        ajaxPage.waitAndVerify()
    })

})