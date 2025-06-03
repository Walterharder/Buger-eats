import Home from "../support/pages/home"
import Cadastro from "../support/pages/cadastro"

describe('home page', () => {
    let homeData;

    before(() => {
        cy.fixture('homeData').then(data => {
            homeData = data
        })
    });

    beforeEach(() => {
        Home.accessHome()
    })

    it('Validar o título do app.', () => {
        Home.validateTitle(homeData.title)
    })

    it('Validar o subtítulo do app. ', () => {
        Home.validateWelcomeHome(homeData.welcomeHome)
    })

    it('Validar a frase do app.', () => {
        Home.validatePhrase(homeData.phrase)
    })

    it('Validar o botão de Cadastre-se.', () => {
        Home.validateButtonRegister(homeData.buttonRegister)
    })

    it('Validar o direcionamento do botão Cadastre-se.', () => {
        Home.clickButtonRegister()
        Cadastro.validateAccessRegister()
    })
})