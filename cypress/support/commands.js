Cypress.Commands.add('fillDados', (email, password) => {
    Cadastro.fillName(cadastroData.name)
    Cadastro.fillCPF(cadastroData.cpf)
    Cadastro.fillEmail(cadastroData.email)
    Cadastro.fillWhatsapp(cadastroData.whatsapp)
    Cadastro.fillCep(cadastroData.fillCep)
})
