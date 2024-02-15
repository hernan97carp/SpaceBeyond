describe("TC Fixture - Login", () => {
    beforeEach("Visitar la Pagina de Login", () => {
        cy.visit("https://demo.testim.io/")
        cy.contains("Log in").should("be.visible")
        cy.url().should("contain", "testim")
        cy.fixture("data/Account.Page").then((the) => {
            cy.contains(the.LoginButton.On)
                .should("be.visible")
                .click()
        })
    })
    it("TC1: Hacer Login exitosamente", () => {
        cy.fixture("data/Account.Page").then((the) => {
            cy.get(the.username.input)
                .type(the.username.data.valid)// introducir texto en el campo username
            
            cy.get(the.password.input)
                .type(the.password.data.valid)
            cy.get(the.SubmitButton).click()
            cy.contains(the.LoginButton.Off).should("be.visible")
        })
    })


})