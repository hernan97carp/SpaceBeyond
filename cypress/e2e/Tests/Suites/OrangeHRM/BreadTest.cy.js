
describe('US 123 | OrangeHRM | Breadcrumb | Buscar empleado por el breadcrumb', () => {
    beforeEach("Precondicion: Admin debe hacer login", () => {
cy.LoginOrange("Admin","admin123")

    })
describe("Employee Management Module", () => {

  it("TC1: Search for an employee by X value", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.url().should('contain','viewEmployeeList')
    cy.get("[type='submit']").click({ force: true })
    // Adjust the timeout as needed
  })

  it("TC2: Add a new employee from the employee list", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.url().should('contain','viewEmployeeList')
    cy.contains('Add').click({force:true})
  })

  it("TC3: Reset values in the employee search form", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.url().should('contain','viewEmployeeList')
    cy.get("[type='reset']").click({force:true})
  })
})
    
})