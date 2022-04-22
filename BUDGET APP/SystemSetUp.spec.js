///<reference types = 'cypress' /></>
describe('Automate Budget App', () =>{
    beforeEach( () =>{
        cy.visit('https://fintrakbudget.azurewebsites.net/')
        cy.get('#AppID').type('App_773814')
        cy.get('#Login1_UserName').type('admin')
        cy.get('#Login1_Password').type('Password10$')
        cy.get('#Login1_LoginButton').click()
    })
        // Module 1
    it('SystemetUP', () =>{
        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
    })
            //subModule
    it('General Setting', () =>{
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(1) > .rpLink > .rpOut > .rpText > span').click()
        cy.get('#AppID').type('App_773814')
        cy.get('#Login1_UserName').type('admin')
        cy.get('#Login1_Password').type('Password10$')
        cy.get('#Login1_LoginButton').click()
        cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')
    })
    it('fee SetUp (Ensure user add fee item)', () =>{

        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(16) > .rpLink > .rpOut > .rpText').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl00_btnAdd_Image').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtitem_code').type('564', { force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtCaption').type('890', { force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_input_captionTextBox1').type('yes', { force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbtype_Arrow').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbtype_DropDown > .rcbScroll > .rcbList > .rcbItem').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtCategory_Arrow').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtCategory_DropDown > .rcbScroll > .rcbList > :nth-child(5)').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtClassification_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtClassification_DropDown > .rcbScroll > .rcbList > :nth-child(3)').click({ force: true })
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbCalculationType_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbCalculationType_DropDown > .rcbScroll > .rcbList > :nth-child(6)').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtBasis').type('yes', { force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbMovement_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbMovement_DropDown > .rcbScroll > .rcbList > :nth-child(2)').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbUnit_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbMovement_DropDown > .rcbScroll > .rcbList > :nth-child(2)').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbUnit_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbUnit_DropDown > .rcbScroll > .rcbList > :nth-child(2)').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbbudgetable_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbUnit_DropDown > .rcbScroll > .rcbList > .rcbHovered').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbbudgetable_Arrow').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_cmbbudgetable_DropDown > .rcbScroll > .rcbList > .rcbItem').click({ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_txtCustom').type('3', { force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl02_ctl04_Button2').click({ force: true})
    })
    it.only('fee SetUp (Ensure user add fee item)', () =>{

        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(16) > .rpLink > .rpOut > .rpText').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl04_EditButton').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDFee_ctl00_ctl05_txtCaption').type('serah',{ force: true})
        
    })
    
    it('fee SetUp (Ensure user add fee clasification)', () =>{

        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(16) > .rpLink > .rpOut > .rpText').click()
        cy.get('.rtsFirst > .rtsLink > .rtsOut > .rtsIn > .rtsTxt').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDClassification_ctl00_ctl02_ctl00_btnAdd_Image').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDClassification_ctl00_ctl02_ctl03_txtclassification').type('Credit Balance',{ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDClassification_ctl00_ctl02_ctl03_Button2').click({ force: true})
        
    })
    it('fee SetUp (Ensure user add fee item)', () =>{

        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(16) > .rpLink > .rpOut > .rpText').click()
        cy.get(':nth-child(2) > .rtsLink > .rtsOut > .rtsIn > .rtsTxt').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDCategory_ctl00_ctl02_ctl00_btnAdd_Image').click()
        cy.get('#ctl00_ContentPlaceHolder1_GRDCategory_ctl00_ctl02_ctl03_txtcategory').type('asset',{ force: true})
        cy.get('#ctl00_ContentPlaceHolder1_GRDCategory_ctl00_ctl02_ctl03_Button2').click({ force: true})
        
    })

    it('General setting', () =>{
        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(1) > .rpLink > .rpOut > .rpText > span').click()

        
    })
    it('Budget Period Setting', () =>{
        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="height: auto; visibility: visible; display: block;"] > .rpLevel1 > :nth-child(2) > .rpLink > .rpOut > .rpText > span').click()
        cy.get(':nth-child(2) > .rtsLink > .rtsOut > .rtsIn > .rtsTxt').click()
        cy.get('.rtsLast > .rtsLink > .rtsOut > .rtsIn > .rtsTxt').click()
        
    })

    it('Budget Period Setting', () =>{
        cy.get(':nth-child(2) > .rpRootLink > .rpOut > .rpText').click()
        cy.get('[style="display:block;"] > .rpLevel1 > :nth-child(3) > .rpLink > .rpOut > .rpText > span').click()
        
        
    })

})