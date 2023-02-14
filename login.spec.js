const { cyan } = require("colorette")

describe('login functionality', function(){
    it('verify with valid credentials', function(){
        //arrange 
        //open URL
        cy.visit("https//www.saucedemo.com")
        //action
        //enter username
        cy.getcy.get('#user-name').type("standard_user")
        // Enter the password
        cy.get('#password').type("secret_sauce")
        // Click on login button
        cy.get('#login-button').click()
        // Assertion
        // Verify dashboard  url
        cy.get('.title').should('be.visible')
    })
    
})
it('verify with invalid credentials', function () {

    // Arrange
// open the url 
cy.visit('https://www.saucedemo.com/')
// Action 
// Enter the username 
cy.get('#user-name').type("standard_us")
// Enter the password
cy.get('#password').type("secret_sau")
// Click on login button
cy.get('#login-button').click()
// Assertion
// Verify dashboard  url
cy.get('.error-button').should('be.visible')



})

//practice test

describe("login functionality", function(){
    it ("verify with valid with credentials", function(){
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("problem_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get(".title").should("be.visible")
    })
})
