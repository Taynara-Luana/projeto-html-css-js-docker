describe('#REALIZANDO TESTES NO MENU DO SITE...', { browser: "chrome" }, () => {

    beforeEach(() => {
        cy.visit('../src/view/index.html')
        cy.viewport(1280, 720)
    })

    context("Validando testes no menu da página desenvolvida.", () => {
        it("Quando clicar no menu 'Home', então o usuário deve ser redirecionado para a página HOME.", () => {
            cy.wait(1000)
            cy.get('[href="index.html"]').first().click()
        })

        it("Quando clicar no menu 'Sobre', então o usuário deve ser redirecionado para a página SOBRE.", () => {
            cy.wait(1000)
            cy.get('[href="sobre.html"]').first().click()
            cy.wait(1000)
            cy.get('[href="index.html"]').first().click()
        })

        /*
        it("Quando clicar no menu 'Contato', então o usuário deve ser redirecionado para a página CONTATO.", () => {
            cy.get('[href="contato.html"]').first().click()
            cy.wait(3000)
        })
        */
    })
})