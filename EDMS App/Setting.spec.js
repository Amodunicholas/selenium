///<reference types = 'cypress' />
describe('login to EDMS App', () =>{
    beforeEach(() =>{
        cy.visit('https://credit360edm.azurewebsites.net/')
        cy.get('#inputgroup').type('access')
        cy.get('.p-button-label').click()
        cy.get('#inputgroup').type('admin')
        cy.get('#pwd').type('testing')
        cy.get('.p-button-label').click()

        // subModules functionality
    })
    it('Storage settings; Ensure user can set storage type', () =>{

        cy.get('.ng-tns-c16-18.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-28').click()
        cy.get('.p-dropdown-trigger').click()
        cy.get(':nth-child(2) > .p-dropdown-item > .ng-star-inserted').click()
    })

    it('Folder Types; Ensure user can create and modify new folder type', () =>{

        cy.get('.ng-tns-c16-18.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-29').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#folderTypeName').type('my doc.').should('be.visible','EDMS DOC.')
        cy.get('#Description').type('script')
        cy.get('#defaultFolderSize').type('84')
        cy.get('#physicalFilePath').type('document').should('be.visible','Desktop')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
         
    })

    it.only('Document Properties', () =>{
        cy.get('.ng-tns-c16-18.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click()
        cy.get('.ng-tns-c16-30').click()
        cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('#documentCategoryName').type('stp').should('be.visible','ce')
        cy.get('[icon="pi pi-check"]').click()
        cy.get('#p-tabpanel-1-label > .p-tabview-title').click()
        cy.get('#p-tabpanel-1 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(2) > .p-dropdown-item > .ng-star-inserted').click({ force: true})
        cy.get('#documentTypeName').type('sch')
        cy.get('[icon="pi pi-check"]').click({ force: true})
        cy.get(':nth-child(6) > :nth-child(3) > .p-button-sm').click()
        cy.get('#columnLabel').type('npm',{ force: true})
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(2) > .p-dropdown-item > .ng-star-inserted').click({ force: true})
        cy.get('[icon="pi pi-check"]').click({ force: true})
        
        
    })
        
        
})