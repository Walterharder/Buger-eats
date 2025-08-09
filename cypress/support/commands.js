import Cadastro from './pages/cadastro'; 

Cypress.Commands.add('fill_sessionDados', (name, cpf, email, whatsapp) => {
    Cadastro.fillName(name)
    Cadastro.fillCPF(cpf)
    Cadastro.fillEmail(email)
    Cadastro.fillWhatsapp(whatsapp)
})

Cypress.Commands.add('fill_sessionEndereco', (cep, number, complemento) => {
    Cadastro.fillCep(cep)
    Cadastro.clickButtonCEP()
    Cadastro.fillAddressNumber(number)
    Cadastro.fillAdressDetails(complemento)
})

Cypress.Commands.add('validade_sessionEndereco', (address, cidade_uf, bairro ) => {
    Cadastro.validadeAdress(address)
    Cadastro.validadeCityUf(cidade_uf)
    Cadastro.validadeDistrict(bairro)
})

Cypress.Commands.add('fill_entregaMoto', (cnh) => {
    Cadastro.clickMoto()
    Cadastro.fillImageCnh(cnh)
})

Cypress.Commands.add('fill_arquivoValidacao', (arquivo, message) => {
    Cadastro.validateAtrrImage()
    Cadastro.fillArquivo(arquivo)
    Cadastro.clickButtonRegister()
    Cadastro.validadeCNHRequired(message)
    Cadastro.validateAtrrImage()
})

Cypress.Commands.add('fill_entregaBicicleta', (cnh) => {
    Cadastro.fillBicicleta()
    Cadastro.fillImageCnh(cnh)
})

Cypress.Commands.add('fill_entregaCarroVan', (cnh) => {
    Cadastro.fillCarro()
    Cadastro.fillImageCnh(cnh)
})

Cypress.Commands.add('validade_messageSuccess', (messageSucesso) => {
    Cadastro.clickButtonRegister()
    Cadastro.validadeSuccess(messageSucesso)
    Cadastro.clickButtonConfirm()
})

Cypress.Commands.add('validade_emailInvalid', (invalidEmail, messageInvalid) => {
    Cadastro.fillEmail(invalidEmail)
    Cadastro.clickButtonRegister()
    Cadastro.Email()
      .then(($input) => {
        const isInvalid = $input[0].checkValidity() === false;
        expect(isInvalid).to.be.true;

        const validationMessage = $input[0].validationMessage;

        expect(validationMessage).to.include(messageInvalid); 
      });
    Cadastro.clearEmail()
})

Cypress.Commands.add('validade_errorExcecao', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('createObjectURL') && err.message.includes('Overload resolution failed')) {
            return false;
        }
        return true;
    });
})



