
export class DropCheckRadioPage {

    verifyDropDowns(){

        cy.get('#dropdowm-menu-1').select(0).contains("JAVA")
        cy.get('#dropdowm-menu-1').select(1).contains("C#")
        cy.get('#dropdowm-menu-1').select(2).contains("Python")
        cy.get('#dropdowm-menu-1').select(3).contains("SQL")
        cy.get('#dropdowm-menu-2').select(0).contains("Eclipse")
        cy.get('#dropdowm-menu-2').select(1).contains("Maven")
        cy.get('#dropdowm-menu-2').select(2).contains("TestNG")
        cy.get('#dropdowm-menu-2').select(3).contains("JUnit")
        cy.get('#dropdowm-menu-3').select(0).contains("HTML")
        cy.get('#dropdowm-menu-3').select(1).contains("CSS")
        cy.get('#dropdowm-menu-3').select(2).contains("JavaScript")
        cy.get('#dropdowm-menu-3').select(3).contains("JQuery")


    }

    verifyCheckBoxes(){

        cy.get('input[value="option-1"]').click()
        cy.get('input[value="option-2"]').click()
        cy.get('input[value="option-4"]').click()
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('input[value="option-2"]').should('be.checked')
        cy.get('input[value="option-3"]').should('be.checked')
        cy.get('input[value="option-4"]').should('be.checked')
        cy.get('input[value="option-2"]').click()
        cy.get('input[value="option-4"]').click()
        cy.get('input[value="option-2"]').not('be.checked')
        cy.get('input[value="option-4"]').not('be.checked')


    }

    verifyRadioButtons(){

        cy.get('#radio-buttons').find('[type="radio"]').then( radio => {
            cy.wrap(radio)
                .first()
                .check({force: true})
                .should('be.checked')

            cy.wrap(radio)
                .eq(1)
                .check({force: true})

            cy.wrap(radio)
                .eq(2)
                .check({force: true})
            
            cy.wrap(radio)
                .eq(3)
                .check({force: true})

            cy.wrap(radio)
                .eq(4)
                .check({force: true})
        })


    }
    
}

export const dropCheckRadioPage = new DropCheckRadioPage()