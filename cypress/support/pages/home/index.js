import { ELEMENTS } from './elements'; 
const el = ELEMENTS;

class Home {
    accessHome(){
        cy.visit('/')
    }

    validateTitle(title){
        cy.get(el.title).should('have.attr', 'alt',  title)
    }

    validateWelcomeHome(welcomeHome){
        cy.get(el.welcomeHome).should('have.text', welcomeHome)
    }

    validatePhrase(phrase){
        cy.get(el.phrase).should('have.text', phrase)
    }

    validateButtonRegister(buttonRegister){
        cy.get(el.buttonRegister).should('have.text', buttonRegister).and('not.have.class', 'is-disabled')
    }

    clickButtonRegister(){
        cy.get(el.buttonRegister).click()
    }

    validateAccessRegister(){
        cy.url().should('include', '/deliver')
    }
}

export default new Home();