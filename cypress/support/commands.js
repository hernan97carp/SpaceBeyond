/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

beforeEach(() => {
	cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
});


Cypress.Commands.add('loginSpace', (username,password) => {
    cy.fixture("data/Login.Page").then((the) => {
        username && cy.get(the.username.input).type(username)
        password && cy.get(the.password.input).type(password)
        cy.get(the.loginButton).click()

    })

})


Cypress.Commands.add('goToLogin', () => {
	        cy.visit("https://demo.testim.io/")
        cy.contains("Log in").should("be.visible")
        cy.url().should("contain", "testim")
        cy.fixture("data/Account.Page").then((the) => {
            cy.contains(the.LoginButton.On)
                .should("be.visible")
                .click()
        })
})
Cypress.Commands.add('SignIn', () => {
	  cy.fixture("data/Account.Page").then((the) => {
            cy.get(the.username.input)
                .type(the.username.data.valid)// introducir texto en el campo username
            
            cy.get(the.password.input)
                .type(the.password.data.valid)
            cy.get(the.SubmitButton).click()
            cy.contains(the.LoginButton.Off).should("be.visible")
        })
})
Cypress.Commands.add('SignIn2', (username, password) => {
	  cy.fixture("data/Account.Page").then((the) => {
            cy.get(the.username.input)
                .type(username)// introducir texto en el campo username
            
            cy.get(the.password.input)
                .type(password)
            cy.get(the.SubmitButton).click()
            cy.contains(the.LoginButton.Off).should("be.visible")
        })
})
Cypress.Commands.add('getAutocompletedValues', () => {
	const autocompletedValues = [];
	return cy
		.get('.auto-complete__multi-value__label')
		.each(element => {
			autocompletedValues.push(element.text());
		})
		.then(() => {
			return autocompletedValues;
		});
});

Cypress.Commands.add("LoginOrange", (user,password) => {
    cy.session('Login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should("contain", "orangehrm")
        //Iniciar Sesión
        cy.get("[name='username']")
            .type(user)
        cy.get("[name='password']")
            .type(password)
        cy.get("[type='submit']")
            .click()
    })
})
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
