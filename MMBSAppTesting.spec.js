/// <reference types = "cypress" />
describe('mmbsAPP', () =>{
    it('Login should work fine', () =>{
        
        cy.visit('https://fintrakbankingmmbs.azurewebsites.net/')
        
        cy.get('#Username').type('tayo.olawumi')
        cy.get('#Password').type('Password10$')
        cy.get('.btn').click()
        

    })
    
    it('user select modules to work with', () =>{
        
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
    })
    
})