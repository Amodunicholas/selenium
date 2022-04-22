///<reference types = 'cypress' /></>
describe('Automate Budget App', () =>{
    it('Navigate to url', () =>{
        cy.visit('https://fintrakbudget.azurewebsites.net/')
        cy.get('#AppID').type('App_773814')
        cy.get('#Login1_UserName').type('admin')
        cy.get('#Login1_Password').type('Password10$')
        cy.get('#Login1_LoginButton').click()
    })
})