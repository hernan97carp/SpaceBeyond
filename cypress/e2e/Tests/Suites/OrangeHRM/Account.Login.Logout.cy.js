describe("SpaceBeyond | Account | Log-IN and Log-Out", () => {
    
    beforeEach("Precondition:Usuario debe estar situado en el login Page", () => {
        cy.visit("https://demo.testim.io/")
        cy.contains("Log in").click()
        cy.url().should("contain","login")
    });

    it("US-GX-01 | TC1: Validar iniciar sesion exitosamente cuando las credenciales son validas", () => {
        cy.loginSpace("Hernan",'123456aB')
    });

    it("US-GX-02 | TC2: Validar No poder iniciar sesion cuando el campo name esta Vacio", () => {
        cy.loginSpace("", "123456aB")
        //validate login:
        cy.contains("Name is a required field.").should("be.visible")
        cy.contains("Password is a required field.").should("not.exist")
    });

        it("US-GX-03 | TC3: Validar No poder iniciar sesion cuando el campo password esta Vacio", () => {
        cy.loginSpace("Hernan", "")
        //validate login:
     
            cy.contains("Password is a required field.").should("be.visible")
              cy.contains("Name is a required field.").should("not.exist")
        });
    

        it("US-GX-04 | TC4: Validar Salir de sesion exitosamente luego haber iniciado sesion", () => {
        cy.loginSpace("Hernan", "123456aB")
        //validate login:
     
            cy.get(".mui-dropdown button").click()
            cy.get(".mui--is-open a").click()
            cy.contains("Log in").should("be.visible")
        });
});
