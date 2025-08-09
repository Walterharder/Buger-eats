import Cadastro from "../support/pages/cadastro"
import { fakerPT_BR as faker } from '@faker-js/faker'
import * as fakerBr from 'faker-br'


console.log('Objeto fakerBr:', fakerBr);


describe('Cadastro', () => {
    let cadastroData;
    let dataFaker;

    beforeEach(() => {
        Cadastro.accessRegister()

        dataFaker = {
            name: faker.person.fullName(),
            cpf: fakerBr.br.cpf({ format: false }),
            email: faker.internet.email(),
            whatsapp: faker.phone.number().replace(/^\+55\s?/, '')
        }
    })

    before(() => {
        cy.fixture('cadastroData').then(data => {
            cadastroData = data
        })
    });

    it('Validar acesso a tela de Cadastro', () => {
        Cadastro.validateAccessRegister()
    })

    it('Validar o campo Nome Completo como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeNameRequired(cadastroData.nameRequired)
    })

    it('Validar o campo CPF como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeCPFRequired(cadastroData.cpfRequired)
    })

    it('Validar o campo E-mail como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeEmailRequired(cadastroData.emailRequired)
    })

    it('Validar o campo CEP como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeCEPRequired(cadastroData.cepRequired)
    })

    it('Validar o campo Número como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeAddressNumberRequired(cadastroData.addressNumberRequired)
    })

    it('Validar o campo Método de Entrega como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeDeliveryRequired(cadastroData.deliveryRequired)
    })

    it('Validar o campo Foto da CNH como obrigatório.', () => {
        Cadastro.clickButtonRegister()
        Cadastro.validadeCNHRequired(cadastroData.cnhRequired)
    })

    it('Validar o cadastro com CPF com 12 dígitos.', () => {
        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(12), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaMoto(cadastroData.cnh)
        Cadastro.clickButtonRegister()
        Cadastro.validadeCPFInvalid(cadastroData.messageCpfInvalid)
    })

    it('Validar o cadastro com CPF com 10 dígitos.', () => {
        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(10), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaMoto(cadastroData.cnh)
        Cadastro.clickButtonRegister()
        Cadastro.validadeCPFInvalid(cadastroData.messageCpfInvalid)
    })

    //Bug do site, o campo não tem validação se o cpf é válido.
    it('Validar cadastro com CPF inválido.', () => {
        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(11), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaMoto(cadastroData.cnh)
        Cadastro.clickButtonRegister()
        Cadastro.validadeCPFInvalid(cadastroData.messageCpfInvalid)
    })

    //Bug do site, o campos de WhatsApp não é mostrado como obrigatório.
    it('Validar o cadastro apenas com campos obrigatórios informados.', () => {
        Cadastro.fillName(dataFaker.name)
        Cadastro.fillCPF(dataFaker.cpf)
        Cadastro.fillEmail(dataFaker.email)
        Cadastro.fillCep(cadastroData.cep)
        Cadastro.clickButtonCEP()
        Cadastro.fillAddressNumber(faker.string.numeric(2))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaMoto(cadastroData.cnh)
        cy.validade_messageSuccess(cadastroData.messageSucesso)
    })

    it('Validar a busca por CEP.', () => {
        Cadastro.fillCep(cadastroData.cep)
        Cadastro.clickButtonCEP()
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
    })

    //Bug do site, permite enviar o formulário com o e-mail incorreto.
    it('Validar cadastro com E-mail inválido.', () => {
        const userName = faker.internet.userName();
        const invalidEmailBadDomain = `${userName}@.com`;
        const invalidEmailNoDotCom = `${userName}@gmail`;
        const invalidEmailNoAt = `${userName}gmail`;
        const invalidEmailWithSpace = `${userName} @gmail. com`;
        const invalidEmailWithoutSpace = `${userName}@gmail.com`;
        const invalidEmailWithComma = `${userName},@gmail.com`;
        const invalidEmail = '.com';

        Cadastro.fillName(dataFaker.name)
        Cadastro.fillCPF(faker.string.numeric(11))
        Cadastro.fillWhatsapp(dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaMoto(cadastroData.cnh)
        cy.validade_emailInvalid(invalidEmailBadDomain, cadastroData.invalidEmailBadDomain)
        cy.validade_emailInvalid(invalidEmailNoAt, cadastroData.invalidEmailNoAt)
        cy.validade_emailInvalid(invalidEmailWithComma, cadastroData.invalidEmailWithComma)
        cy.validade_emailInvalid(invalidEmail, cadastroData.invalidEmail)
        Cadastro.fillEmail(invalidEmailWithSpace)
        Cadastro.validateFillEmail(invalidEmailWithoutSpace)
        Cadastro.clearEmail()
        cy.validade_emailInvalid(invalidEmailNoDotCom, cadastroData.invalidEmailNoDotCom)
    })


    it('Validar cadastro com método de entrega Moto.', () => {
        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(11), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaMoto(cadastroData.cnh)
        cy.validade_messageSuccess(cadastroData.messageSucesso)
    })

    it('Validar cadastro com método de entrega Bicicleta.', () => {
        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(11), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaBicicleta(cadastroData.cnh)
        cy.validade_messageSuccess(cadastroData.messageSucesso)
    })

    it('Validar cadastro com método de entrega Van/Carro.', () => {
        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(11), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_entregaCarroVan(cadastroData.cnh)
        cy.validade_messageSuccess(cadastroData.messageSucesso)
    })

    it('Validar envio de arquivo PDF em Foto da CNH.', () => {
        cy.validade_errorExcecao()

        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(11), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_arquivoValidacao(cadastroData.pdf, cadastroData.cnhRequired)
    })

    it('Validar envio de arquivo CSV em Foto da CNH.', () => {
        cy.validade_errorExcecao()

        cy.fill_sessionDados(dataFaker.name, faker.string.numeric(11), dataFaker.email, dataFaker.whatsapp)
        cy.fill_sessionEndereco(cadastroData.cep, faker.string.numeric(2), faker.lorem.word(5))
        cy.validade_sessionEndereco(cadastroData.address, cadastroData.cidade_uf, cadastroData.bairro)
        cy.fill_arquivoValidacao(cadastroData.csv, cadastroData.cnhRequired)
    })

})