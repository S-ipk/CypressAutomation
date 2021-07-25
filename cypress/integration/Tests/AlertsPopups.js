
import *as globalNavigations from '../../support/globalNavigations';

describe('Alerts and Popups with Cypress', () => {

      it('Navigate to the ptactice page', () => {
          globalNavigations.practicePage();
      })

      it('Click alert and popup buttons', () => {

        cy.get('#alertbtn')
          .click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
            
        })

        cy.get('#confirmbtn') 
          .click()

          cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            
        })  
          
      });




});