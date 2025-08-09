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

    Email(){
        return cy.get(el.inputEmail)
    }

    clearEmail(){
        cy.get(el.inputEmail).clear()
            .should('have.text', '')
    }

    validateFillEmail(email){
        cy.get(el.inputEmail).should('have.value', email)
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
    
    validadeAdress(address){
        cy.get(el.inputAdress).should('have.value', address)      
    }

    fillAdressDetails(adressDetails){
        cy.get(el.inputAddressDetails).type(adressDetails)     
    }
    
    validadeDistrict(bairro){
        cy.get(el.inputDistrict).should('have.value', bairro) 
    }

    validadeCityUf(cidade_uf){
        cy.get(el.inputCityUf).should('have.value', cidade_uf)
    }

    clickMoto(){
        cy.get(el.deliveryMoto).click()
    }
    
    fillBicicleta(){
        cy.get(el.deliveryBicicleta).click()
    }
    
    fillCarro(){
        cy.get(el.deliveryCarro).click()
    }
    
    fillImageCnh(cnh){
        cy.get(el.inputImage).attachFile('/images/' + cnh)
    }
    
    fillArquivo(arquivo){
        cy.get(el.inputImage).attachFile('/arquivos/' + arquivo)
    }

    validateAtrrImage(){
        cy.get(el.inputImage).should('have.attr', 'accept', 'image/*')
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

    validadeNameRequired(nameRequired){
        cy.get(el.messageNameRequired).should('have.text', nameRequired)

    }
    validadeCPFRequired(cpfRequired){
        cy.get(el.messageCPFerror).should('have.text', cpfRequired)
    }

    validadeCPFInvalid(cpfInvalid){
        cy.get(el.messageCPFerror).should('have.text', cpfInvalid)
    }

    validadeEmailRequired(emailRequired){
        cy.get(el.messageEmailRequired).should('have.text', emailRequired)
    }

    validadeEmailInvalid(EmailInvalid){
        cy.get(el.messageEmailRequired).should('have.text', EmailInvalid)
    }

    validadeCEPRequired(cepRequired){
        cy.get(el.messageCEPRequired).should('have.text', cepRequired)
    }

    validadeAddressNumberRequired(addressRequired){
        cy.get(el.messageAddressNumberRequired).should('have.text', addressRequired)
    }

    validadeDeliveryRequired(deliveryRequired){
        cy.get(el.messageDeliveryRequired).should('have.text', deliveryRequired)
    }

    validadeCNHRequired(cnhRequired){
        cy.get(el.messageCNHRequired).should('have.text', cnhRequired)
    }
}

export default new Cadastro();