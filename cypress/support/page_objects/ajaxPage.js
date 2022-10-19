
export class AjaxPage {

    waitAndVerify(){

        cy.get('div[style="display: none;"]', { timeout: 30000 })
        cy.get('span[data-target="#myModalClick"]').contains('CLICK ME!').click()
        cy.get('button[class="close"]').click()

    }

    
}

export const ajaxPage = new AjaxPage()