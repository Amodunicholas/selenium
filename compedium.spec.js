/// <reference types = "cypress"/>
describe('Compendium', () => {
    it('Navigate through the site', () => {
    cy.visit('https://compendiumdev.co.uk/')
    }) 
    it('Do you want to test and develop software better?', () => {
    cy.get('h1')
      .should('be.visible')
    cy.wait(5000)
    })  
    it('Learn At Your Own Pace with these Online Training Courses', () => {
    cy.get('.coursesSection > .sectionHeading > h2')
      .scrollIntoView()
      .should('be.visible')
    cy.wait(10000)
    })
    it('footer page', () => {
    cy.get('.newsSection > .sectionHeading > h2')
      .scrollIntoView()
      .should('be.visible')
    cy.wait(5000)
    })
    it('Hire Me To Help You', () => {
    cy.get('.hiringSection > .sectionHeading > h2').scrollIntoView().should('be.visible')
    })
    it('form page', () => {
    cy.get('.thumbCellSplit') 
    })
    })