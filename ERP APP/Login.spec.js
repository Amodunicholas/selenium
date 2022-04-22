///<reference types = 'cypress' />
describe('login to ERP App', () =>{
    it('Navigate to url', () =>{
        cy.visit('https://nibsserp.nibss-plc.com.ng/Account/login?ReturnUrl=%2F')
        cy.get('#Username').type('hod-erp')
        cy.get('#Password').type('ER_Proj123')
        cy.get('.btn').click()
    })
        
        
    })