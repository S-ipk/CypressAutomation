import *as globalNavigations from '../../support/globalNavigations';

describe('Alerts and Popups with Cypress', () => {

    it('Navigate to the practice page', () => {
        globalNavigations.practicePage();
    })

    it('Select the new tab button', () => {
        cy.get('#opentab')
          .invoke('removeAttr','target')
          .click()
    });

    it('Verify navigated to the new page', () =>{
        cy.url()
          .should('include','rahulshettyacademy')

    });

    it('Navigate to the main url',()=>{
        cy.go('back')

    });

});