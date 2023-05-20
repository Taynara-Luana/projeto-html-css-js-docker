describe('#REALIZANDO TESTES NA TELA DE PORTÓFIO...', () => {

  beforeEach(() => {
    cy.visit('../src/view/index.html')
  })

  context("Validando elementos contidos dentro do HEAD da aplicação, da página de portfólio.", () => {
    it('Validando o título da página: se o título corresponde ao esperado.', () => {
      cy.title().should('be.equal', 'Portfólio')
    })
  })

  context("Validando elementos de textos contidos na parte principal da página de portfólio.", () => {
    it("Validando o conteúdo do título da aplicação (título principal). Garantindo que o que estamos esperando é o que estavamos enviando.", () => {
      cy.contains('.apresentacao__conteudo__titulo', 'Eleve a qualidade do seu software a outro nível com a utilização de boas práticas de automação de testes!')
    })

    it("Validando o conteúdo da apresentacao__conteudo__texto, contida no documento, se o que estamos esperando é realmente o que está em tela.", () => {
      cy.contains('.apresentacao__conteudo__texto', 'Olá! Sou Taynara Luana, analista de qualidade de Software. Ajudo QAs a testarem aplicações web utilizando de frameworks de automação de testes e também a colocarem em prática seus conhecimentos sobre testes de Software.')
    })
  })

  context("Validando os elementos de  botões contidos na tela.", () => {
    it('Validando se o botão com o texto Linkedin está contido na tela.', () => {
      cy.contains('#btnLinkedin', 'Linkedin');
    })

    it('Validando se o botão com o texto GitHub está contido na tela.', () => {
      cy.contains('#btnGitHub', 'GitHub');
    })

    it('Validando se ao clicar no botão de Linkedin, se estamos sendo direcionados para o perfil correto.', () => {
      cy.contains('#btnLinkedin', 'Linkedin')
        .should('be.visible')
        .click()
    })

    it('Validando se ao clicar no botão de GitHub, se estamos sendo direcionados para o perfil correto.', () => {
      cy.contains('#btnGitHub', 'GitHub')
        .should('be.visible')
        .click()
    })
  })
})