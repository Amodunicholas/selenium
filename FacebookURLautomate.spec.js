///<reference types = 'cypress' />
describe('facebook url', () =>{
    it('Navigate to url', () =>{
        cy.visit('https://www.facebook.com/')
    })
    it('create acct', () =>{
        cy.get('[data-testid=open-registration-form-button]').click()
        cy.contains('First name').type('Sunday')
        //cy.get('#u_2_b_Eq').type('Sunday')
        cy.wait(10000)
        cy.contains('Surname').type('Nani')
        //cy.get('#u_2_d_J\/').type('Nani')
        cy.get('#u_2_g_jn').type('08103143225')
        cy.get('#password_step_input').type('Yamahay')
        cy.get('#day').type(3)
        cy.get('#month').type(2)
        cy.get('#year').type(1980)
        cy.get('#u_2_5_ZI').click()
        cy.get('#u_2_s_vZ').click()
    })
})