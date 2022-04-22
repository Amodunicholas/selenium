///<reference types = 'cypress' />
describe('login to EDMS App', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('admin')
        cy.get('#pwd').type('testing')
        cy.get('.p-button-label').click()
        
        // Integration & API MGT Module
    })
    it('ThirdParty Integration', () =>{
        cy.get('.ng-tns-c16-19.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.get('.ng-tns-c16-28').click()
        cy.get('.p-d-flex > .p-button-success > .p-button-label').click()
        cy.get('#registrationCode').type('004')
        cy.get('#appName').type('Mary').should('be.visible','Mary')
        cy.get('#vendor').type('Mary Vensure').should('be.visible','Mary Vensure')
        cy.get('#patnershipNumber').type('5656565')
        cy.get('[icon="pi pi-check"] > .p-button-icon').click()
        
    })
    it.only('API Manager', () =>{
        cy.get('.ng-tns-c16-19.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.get('.ng-tns-c16-29').click()
        
    })

    
})