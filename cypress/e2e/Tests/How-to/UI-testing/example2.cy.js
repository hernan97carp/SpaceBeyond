describe('US # : Aquí se escribe el titular de la user story', () => {
    beforeEach('Precondición: aquí empiezas escribiendo una precondición o mas', () => {
        cy.visit('https://example.cypress.io') // esto es un comando de acción directa
        
    })
 it('TestCase 1: Hacer clic en el enlace de comandos de consulta', () => {
 
    cy.get('a[href="/commands/querying"]').eq(2).click();

    // Esperar a que la nueva página se cargue completamente
    cy.url().should('not.eq', 'about:blank');
    cy.url().should('include', '/commands/querying');

    // Agrega más comprobaciones según sea necesario
});

it('TestCase 2: Verificar elementos en la página cargada', () => {
    // Esperar a que la URL incluya la ruta específica
   cy.get('a[href="/commands/querying"]').eq(2).click();
 
    cy.get('#query-btn')
    .click()
    // Agrega más comprobaciones según sea necesario
});
 
    it('US # TC#3: aquí puedes escribir otro caso de prueba', () => {
              cy.get('a[href="/commands/querying"]').eq(2).click();
        cy.get(".query-btn") // selector de clases
        .should('contain.text','Button') // assertion BDD para validar resultado esperado(de muchas formas)
    })

})