describe("TC Hard Code - Login", () => {
    beforeEach("Visitar la pagina del login", () => {
        cy.visit("https://demo.testim.io")
        cy.contains("Log in").should("be.visible")
        cy.url().should("contain", "testim")
        cy.contains("Log in").click()
    })
    it("TC1: Hacer Login exitosamente", () => {
        cy.get("[type='text']").eq(4) // username
        .type("John")
        cy.get("[type='password']") // password
        .type("123456")
        cy.get("button[type='submit']") // Botón de login
            .click()
        cy.contains("Hello").should("be.visible")
    })
})