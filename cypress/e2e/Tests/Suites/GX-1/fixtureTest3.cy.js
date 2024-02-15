describe("TC Fixture - Login", () => {
    beforeEach("Visitar la Pagina de Login", () => {
        cy.goToLogin()
          cy.SignIn2("pepito","123546")
    })
    it("TC1: Hacer Login exitosamente", () => {
    cy.contains("Select Destination").click()
    })


})