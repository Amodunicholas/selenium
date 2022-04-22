///<reference types ="cypress" />
describe('Empty test', () => {
    it('test one', () => {
        cy.visit('https://codedamn.com')
        
    })

    it('learning', () =>{
        cy.get('.text-white > .gallery').click()
        cy.get('.text-white > .links').click()
        cy.get('.text-white > :nth-child(3) > .jsx-2544930237').click()
    })
})