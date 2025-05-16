
describe('Cadastro', () => {

    it('Usuário deve se tornar um entregador', () =>{
        //cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Walter Mateus',
            cpf: '82308380039',
            email: 'waltermateus@teste.com',
            whatsapp: '11985858585', 
            enedereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            }, 
            metodo_entrega: 'Moto', 
            cnh:'Nova-CNH_2.jpg'
        }

        var mensagem = {
            sucesso: 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.enedereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address"]').should('have.value', entregador.enedereco.rua)
        cy.get('input[name="address-number"]').type(entregador.enedereco.numero)
        cy.get('input[name="address-details"]').type(entregador.enedereco.complemento)
        cy.get('input[name="district"]').should('have.value', entregador.enedereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.enedereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)

        cy.get('.button-success').click()
        cy.get('#swal2-html-container').should('have.text', mensagem.sucesso)
        cy.get('.swal2-confirm').click()




    })
})