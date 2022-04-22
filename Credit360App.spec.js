///<reference types = 'cypress' />
describe('Automate credit360 App', () =>{
    beforeEach(() =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net')
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
        cy.wait(500)
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(500)
        
    })
//SHOW DROPDOWN OF MODULES
    it('MODULE1 Admin', () =>{
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c3-3').click()
     
        cy.get('.material-icons.ng-tns-c1-4').click()
        cy.get('span.ng-tns-c1-5').click()
        cy.wait(5000)
    })

    it('MODULE2 CustomerMGT', () =>{
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c1-0 > .material-icons.ng-tns-c1-0').click()
         cy.wait(5000)
         
    })

    
    it.only('MODULE3 Approval', () =>{
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c1-0 > .material-icons.ng-tns-c1-0').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c1-8 > .material-icons.ng-tns-c1-8').click()
        cy.get('.material-icons.ng-tns-c1-9').click()
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c1-8 > .material-icons.ng-tns-c1-8').click()
         cy.wait(5000)
         
    })

    it('MODULE4 Job Request', () =>{
        cy.get(':nth-child(5) > .ripplelink.ng-tns-c1-0 > .material-icons.ng-tns-c1-0').click()
         cy.wait(5000)
         
    })
    
    
    it('MODULE5 Credit', () =>{
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c1-0 > .material-icons.ng-tns-c1-0').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c1-13 > .material-icons.ng-tns-c1-13').click()
        cy.get('.material-icons.ng-tns-c1-14').click()
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c1-13 > .material-icons.ng-tns-c1-13').click()
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c1-13 > .material-icons.ng-tns-c1-13').click()
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c1-13 > .material-icons.ng-tns-c1-13').click()
        cy.get(':nth-child(12) > .ripplelink.ng-tns-c1-13 > .material-icons.ng-tns-c1-13').click()
         cy.wait(5000)
         
    })

    it('MODULE6 Report', () =>{
        cy.get(':nth-child(8) > .ripplelink.ng-tns-c1-0 > .material-icons.ng-tns-c1-0').click()
        cy.get('.material-icons.ng-tns-c1-20').click()
         cy.wait(5000)
         
    })
    
})