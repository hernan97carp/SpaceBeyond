describe("TC Fixture - Login", () => {
    beforeEach("Visitar la Pagina de Login", () => {
        cy.goToLogin()
          cy.SignIn()
    })
    it("TC1: Hacer Login exitosamente", () => {
    cy.contains("Select Destination").click()
    })


})