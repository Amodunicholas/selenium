///<reference types = 'cypress' />
describe('Document', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('admin')
        cy.get('#pwd').type('testing')
        cy.get('.p-button-label').click()
        
        // subModules functionality
    })
    
    it('MyDocument; Ensure user can create new folder', () =>{
        cy.get('.ng-tns-c11-6.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.wait(5000)
        cy.get('.ng-tns-c11-19 > .layout-menuitem-text').click()
        cy.get(':nth-child(1) > :nth-child(7) > [title="New Folder"] > .pointer').click()
        cy.get('.p-field > .p-inputtext').type('EDMS docs').should('be.visible','EDMS docs')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        cy.get('.p-dialog-header-close-icon').click()
        cy.get('.p-submenu-icon').click()
        cy.get('.p-submenu-list > :nth-child(1) > .p-menuitem-link').click()
        cy.get('[style="left: 0px; width: calc((12.5% - 0.875px) * 1 + 0px); top: 0px; height: calc(100px);"] > .mat-figure > div').click()
    })
    
    it.only('Ensure user can share document', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-28').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-treetabletoggler.ng-star-inserted > .p-treetable-toggler > .pi').click()
        cy.get(':nth-child(3) > :nth-child(7) > [icon="pi pi-share-alt"]').click({ force: true})
        cy.get('#shareBeneficiaryType1 > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('.p-autocomplete-input-token').type('a')
        cy.get('#pr_id_11_list > :nth-child(2)').click({ force: true})
        cy.get('#shareTitle').type('Designer')
        cy.get('#fullAccess > .p-radiobutton > .p-radiobutton-box').click()
        cy.get('[icon="pi pi-check"]').click()
        cy.wait(10000)
        cy.screenshot()
        
    })
    it('ensure user can send document to Achieve', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-28').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-treetabletoggler.ng-star-inserted > .p-treetable-toggler > .pi').click()
        //right click selection
        cy.get('.p-menuitem-active > .p-menuitem-link').click()
        
    })
    it('ensure user can send document to Favorite', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-28').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-treetabletoggler.ng-star-inserted > .p-treetable-toggler > .pi').click() 
        
    })
    it('ensure user can access Document in Achieve ', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-29').click()
        //right click seletion
        
    })
    it('ensure user can access Document in my Favorite ', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-30 > .layout-menuitem-text').click()
        //right click seletion
        
    })
    it('ensure user can access share Document ', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-31').click()
        //right click seletion
        
    })
    it('ensure user can view Document shared ', () =>{
        cy.get('.ng-tns-c16-15.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-32 > .layout-menuitem-text').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-treetabletoggler.ng-star-inserted > .p-treetable-toggler > .pi').click()
        //right click to seletc for downloading
       
        
    })


})