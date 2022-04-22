///<reference types = 'cypress' />
describe('login to EDMS App', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('admin')
        cy.get('#pwd').type('testing')
        cy.get('.p-button-label').click()   
    })
    // security module 
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="Three Level Security"]').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="File Level"]').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="User Level"]').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="Folder Level"]').click()
        cy.wait(10000)
    })

    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="Administrator Deletes"] > .p-button-label').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('.p-md-6 > .card > .p-button-danger').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="User Deletes"]').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{

        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('.card > .p-button-small').click()
        cy.wait(10000)
    })
    it('Security manager; Ensure user can check operation', () =>{
        
        cy.get('.ng-tns-c16-27 > .layout-menuitem-text').click()
        cy.get('[label="Storage Security"]').click()
    })
})