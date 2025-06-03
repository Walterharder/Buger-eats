import { ELEMENTS } from './elements';
const el = ELEMENTS;

class Cadastro {
    accessRegister(){
        cy.visit('/deliver')
    }

    validateAccessRegister(){
        cy.url().should('include', '/deliver')
    }

    fillName(name){
        cy.get(el.inputName).type(name)
    }
    
    fillCPF(cpf){
        cy.get(el.inputCPF).type(cpf)
    }
   
    fillEmail(email){
        cy.get(el.inputEmail).type(email)
    }
    
    fillWhatsapp(whatsapp){
        cy.get(el.inputWhatsapp).type(whatsapp)
    }
    
    fillCep(cep){
        cy.get(el.inputPostalcode).type(cep)
    }

    fillAddressNumber(numero){
        cy.get(el.inputAddressNumber).type(numero)
    }
    
    validadeAdress(rua){
        cy.get(el.inputAdress).should('have.value', rua)      
    }

    fillAdressDetails(adressDetails){
        cy.get(el.inputAddressDetails).type(adressDetails)     
    }
    
    fillDistrict(bairro){
        cy.get(el.inputDistrict).should('have.value', bairro)   
    }

    validadeCityUf(city){
        cy.get(el.inputCityUf).should('have.value', city)   
    }

    clickMoto(deliveryMoto){
        cy.contains(el.deliveryMoto, deliveryMoto).click()
    }
    
    fillBicicleta(){
        
    }
    
    fillCarro(){
        
    }
    
    fillImageCnh(cnh){
        cy.get(el.inputImage).attachFile('/images/' + cnh)
    }
    
    clickButtonCEP(){
        cy.get(el.buttonCep).click()
    }

    clickButtonRegister(){
        cy.get(el.buttonRegister).click()
    }

    validadeSuccess(success){
        cy.get(el.messageSuccess).should('have.text', success)   
    }

    clickButtonConfirm(){
        cy.get(el.buttonConfirm).click()
    }
}

export default new Cadastro();