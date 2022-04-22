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
    it('Workflow Activity; Ensure user can create new activity, update and delete ', () =>{

        cy.get('.ng-tns-c16-16.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.get('.ng-tns-c16-28 > .layout-menuitem-text').click()
         cy.get('.p-toolbar-group-left > .p-button-success > .p-button-label').click()
        cy.get('#activityName').type('EDMS BUGS VERIFICATION')
        cy.get('[icon="pi pi-check"] > .p-button-label').click()
        cy.get('.p-paginator-pages > :nth-child(5)').click()
        cy.get(':nth-child(1) > :nth-child(3) > .p-button-success > .p-button-icon').click()
        cy.get('#activityName').type('test')
        cy.get('[icon="pi pi-check"]').click()
        cy.wait(10000)
        cy.get(':nth-child(2) > :nth-child(3) > .p-button-warning > .p-button-icon').click({ force: true})
        cy.get('.p-confirm-dialog-accept > .p-button-label').click({ force: true})
       
    })
    it('Workflow Rout;Ensure user can create new Approval Rout, check Approval level and user level ', () =>{

        cy.get('.ng-tns-c16-16.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.get('.ng-tns-c16-29').click()
        cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-toolbar > .p-mb-4 > .p-toolbar-group-left > .p-button-success').click()
        cy.get('#approvalGroupName').type('test')
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item').click({ force: true})
        cy.get('[icon="pi pi-check"]').click({ force: true})
        //Approval level
        cy.get('#p-tabpanel-0 > .p-grid > .p-col-12 > .card > p-table > .p-datatable > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1) > [style="text-align: right;"] > .p-button-rounded').click({ force: true})
        //user level
        cy.get('#p-tabpanel-1 > .p-grid > .p-col-12 > .card > p-table > .p-datatable > .p-datatable-wrapper > table > .p-datatable-tbody > :nth-child(1) > [style="text-align: right;"] > .p-button-rounded').click({ force: true})

        
        
    })
    it('Workflow Activity Rout Mapping;Ensure user can map activity to rout', () =>{

        cy.get('.ng-tns-c16-16.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.get('.ng-tns-c16-30 > .layout-menuitem-text').click()
        cy.wait(10000)
        cy.get('#workFlowActivityId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(2) > .p-dropdown-item').click()
        cy.wait(10000)
        cy.get('#approvalGroupId > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.wait(10000)
        cy.get('#value > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click()
        cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click()
        cy.get('[icon="pi pi-check"]').click()
        
    })

    it.only('Approval workflower; Ensure user can upload and Submit Document for Approval, ', () =>{
        cy.get('.ng-tns-c16-16.layout-root-menuitem > .ng-trigger > .undefined > .p-ripple > .layout-menuitem-text').click()
        cy.get('.ng-tns-c16-31 > .layout-menuitem-text').click()
        cy.get('.p-button-primary > .p-button-label').click()
        cy.wait(10000)
        cy.get('#title').type('EDMS FILE')
        cy.get('#comment').type('ok')
        cy.get('.ng-untouched > .p-checkbox > .p-checkbox-box').click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.get(':nth-child(3) > .p-dropdown-item').click()
        cy.get('#fileDropRef').click()
        cy.get('[icon="pi pi-upload"] > .p-button-label').click()
        cy.get(':nth-child(4) > .row-items > .document-name').click()
        cy.get('[label="Submit"] > .p-button-label').clcik()
        
        
       
    })


        
        
    })