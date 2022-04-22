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
    it('BusinessUnit; Ensure user can create new business unit, update and delete', () =>{

        cy.get('.ng-tns-c16-17.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click({ force: true})
        cy.get('.ng-tns-c16-28').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#businessUnitName').type('Nicholas Academy').should('be.visible','Nicholas Academy')
        cy.get('#businessUnitCode').type('00232').should('be.visible','00232')
        cy.get('#businessUnitDescription').type('Education').should('be.visible','Education')
        cy.get('[icon="pi pi-check"]').click({ force: true})
        //update
        cy.get(':nth-child(1) > :nth-child(4) > .p-button-success').click()
        cy.get('#businessUnitName').type('Admin')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        //delete
        cy.get(':nth-child(4) > :nth-child(4) > .p-button-warning').click()
        cy.get('.p-confirm-dialog-accept').click()
    })
    it('User Role; Ensure user can create, update and delete new Roles', () =>{

        cy.get('.ng-tns-c16-17.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click({ force: true})
        cy.get('.ng-tns-c16-29 > .layout-menuitem-text').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#roleName').type('Officer1')
        cy.get('#roleCode').type('00232')
        cy.get('#roleDescription').type('Scripting')
        cy.get('[icon="pi pi-check"]').click() 
        //update
        cy.get(':nth-child(1) > :nth-child(5) > .p-button-success').click()
        cy.get('#roleCode').type('Post')
        cy.get('[icon="pi pi-check"]').click()
        //delete
        cy.get(':nth-child(1) > :nth-child(5) > .p-button-warning').click()
        cy.get('.p-confirm-dialog-accept').click()
        
    })

    it('Profile User;Ensure that a user can be  created and updated', () =>{

        cy.get('.ng-tns-c16-17.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click({ force: true})
        cy.get('.ng-tns-c16-30').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#firstName').type('dele')
        cy.get('#lastName').type('paul')
        cy.get('#userName').type('jerry')
        cy.get('#phone').type('09198357722')
        cy.get('#roleId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(2) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#businessUnitId > .p-dropdown').click()
        cy.get(':nth-child(2) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#email').type('delley@gmail')
        cy.get('#password').type('testing')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()    
    })

    it('User Group Type; Ensure user can create new user group type', () =>{

        cy.get('.ng-tns-c16-17.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click({ force: true})
        cy.get('.ng-tns-c16-31').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('#groupTypeName').type('yea')
        cy.get('[icon="pi pi-check"]').click()
        cy.get(':nth-child(7) > :nth-child(3) > .p-button-success').click({ force: true})    
    })

    it('User Group;Ensure user can create new user groups', () =>{

       cy.get('.ng-tns-c16-17.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click({ force: true})
       cy.get('.ng-tns-c16-32 > .layout-menuitem-text').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#groupName').type('qa1')
        cy.get('#groupDescription').type('scripters')
        cy.get('#groupEmail').type('amodun@gmail.com')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
       
        
    })
    it.only('Entity Management;Ensure user can create new entity', () =>{
        cy.get('.ng-tns-c16-17.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple').click({ force: true})
        cy.get('.ng-tns-c16-33').click()
        cy.get('.p-toolbar-group-left > .p-button-success').click()
        cy.get('.ng-pristine.ng-star-inserted > :nth-child(1) > .p-field > #entityTypeId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click()
        cy.get('#businessUnitId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('#entityCode').type('0093')
        cy.get('#firstName').type('peter')
        cy.get('#lastName').type('john')
        cy.get('#email').type('john@gmail').should('be.visible', 'john@gmail')
        cy.get('#phone').type('08060819729')
        cy.get('[icon="pi pi-check"]').click()
        cy.get(':nth-child(9) > :nth-child(8) > .p-button-warning').click({ force: true})
        cy.get('.p-confirm-dialog-accept').click()
       
        
    })
        
    })