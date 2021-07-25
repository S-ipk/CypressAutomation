
import *as globalNavigations from '../../support/globalNavigations';
import *as userInformation from '../../support/userInformation';


describe('Login to the library application/user Story/Test case',()=>{

    it('Navigate to the library login page',()=>{
        
        //cy.visit('https://library2.cybertekschool.com/login.html')
        globalNavigations.libraryLoginPage()

    });
    it('Input email and password',()=>{
        
        cy.get('label')
          .contains('Email address')
           .type(userInformation.librarianEmail)
         
           cy.get('label') 
             .contains('Password')
             .type(userInformation.librarianPassword)  

    });

    it('Click to the sign in button',()=>{

        cy.get('.btn')
          .click()

    });

    it('Verify that logged in successfully',()=>{

        cy.url()
          .should('eq','https://library2.cybertekschool.com/#dashboard')

    });


});