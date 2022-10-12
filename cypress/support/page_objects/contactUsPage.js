
export class ContactUsPage {

    fillForm(firstName, lastName, emailAddress, comments){
        
        if (firstName) {
            cy.get('[name="first_name"]').type(firstName)
        }
        if (lastName) {
            cy.get('[name="last_name"]').type(lastName)
        }
        if (emailAddress) {
            cy.get('[name="email"]').type(emailAddress)
        }
        if (comments) {
            cy.get('[name="message"]').type(comments)
        }

    }

    fillAndSendForm(firstName, lastName, emailAddress, comments){
        
        this.fillForm(firstName, lastName, emailAddress, comments)
        cy.get('input[type="submit"]').click()

    }

    fillFormAndReset(firstName, lastName, emailAddress, comments){
        
        this.fillForm(firstName, lastName, emailAddress, comments)
        cy.get('input[type="reset"]').click()

    }

    verifyFormPlaceHolders(){
        
        cy.get('#contact_form').then( firstForm => {
            const firstName = firstForm.find('[name=first_name]')
            const lastName = firstForm.find('[name=last_name]')
            const emailAddress = firstForm.find('[name=email]')
            const comments = firstForm.find('[name=message]')
            cy.wrap(firstName).invoke('attr', 'placeholder').should('eq', 'First Name')
            cy.wrap(lastName).invoke('attr', 'placeholder').should('eq', 'Last Name')
            cy.wrap(emailAddress).invoke('attr', 'placeholder').should('eq', 'Email Address')
            cy.wrap(comments).invoke('attr', 'placeholder').should('eq', 'Comments')
        })

    }
    
}

export const contactUsPage = new ContactUsPage()