import Cadastro from "../support/pages/cadastro"

describe('Cadastro', () => {
    let cadastroData;

    beforeEach(() => {
        Cadastro.accessRegister()
    })


    before(() => {
        cy.fixture('cadastroData').then(data => {
            cadastroData = data
        })
    });


    it('Validar acesso a tela de Cadastro', () => {
        Cadastro.validateAccessRegister()
    })

    // it('Validar o campo Nome Completo como obrigatório.', () => {
    // })

    // it('Validar o campo CPF como obrigatório.', () => {
    // })

    // it('Validar o campo E-mail como obrigatório.', () => {
    // })

    // it('Validar o campo CEP como obrigatório.', () => {
    // })

    // it('Validar o campo Número como obrigatório.', () => {
    // })

    // it('Validar o campo Método de Entrega como obrigatório.', () => {
    // })

    // it('Validar o campo Foto da CNH como obrigatório.', () => {
    // })

    // it('Validar cadastro com CPF inválido.', () => {
    // })

    // it('Validar a busca por CEP.', () => {
    // })

    // it('Validar cadastro com E-mail inválido.', () => {
    // })


    it.only('Validar cadastro com método de entrega Moto.', () =>{
        
        Cadastro.validateAccessRegister()
        Cadastro.fillName(cadastroData.name)
        Cadastro.fillCPF(cadastroData.cpf)
        Cadastro.fillEmail(cadastroData.email)
        Cadastro.fillWhatsapp(cadastroData.whatsapp)
        Cadastro.fillCep(cadastroData.cep)
        Cadastro.clickButtonCEP()
        Cadastro.validadeAdress(cadastroData.address)
        Cadastro.fillAddressNumber(cadastroData.number)
        Cadastro.fillAdressDetails(cadastroData.complemento)
        Cadastro.fillDistrict(cadastroData.bairro)
        Cadastro.validadeCityUf(cadastroData.cidade_uf)

        Cadastro.clickMoto(cadastroData.entregaMoto)

        Cadastro.fillImageCnh(cadastroData.cnh)

        Cadastro.clickButtonRegister()
        Cadastro.validadeSuccess(cadastroData.messageSucesso)
        Cadastro.clickButtonConfirm()
    })

    // it('Validar cadastro com método de entrega Bicicleta.', () => {
    // })

    // it('Validar cadastro com método de entrega Van/Carro.', () => {
    // })

    // it('Validar envio de arquivo PDF em Foto da CNH.', () => {
    // })

    // it('Validar envio de arquivo CSV em Foto da CNH.', () => {
    // })

})