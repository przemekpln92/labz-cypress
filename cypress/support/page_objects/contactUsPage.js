
export class ContactUsPage {

    fillAndSendForm(firstName, lastName, emailAddress, comments){
        
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(emailAddress)
        cy.get('[name="message"]').type(comments)
        cy.get('input[type="submit"]').click()

    }
}

export const contactUsPage = new ContactUsPage()