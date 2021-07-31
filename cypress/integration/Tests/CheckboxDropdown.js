import *as globalNavigations from '../../support/globalNavigations';

describe('Checkbox, Radio button and Dropdown test', ()=>{


    it('Checkbox Test', () => {
        
        globalNavigations.practicePage()

        // cy.get('#checkBoxOption1')
        //   .check()
        //   .should('be.checked')

        //   cy.get('#checkBoxOption3')
        //   .check()
        //   .should('be.checked')  

        //   cy.get('#checkBoxOption2')
        //   .check()
        //   should('not.be.checked')

        cy.get('input[type="checkbox"')
        .check(['option1','option3'])
        .should('be.checked')
        
    });

    it('Radio Buttons', () => {
        
        cy.get('[for="radio1"] > .radioButton')
    });

    describe('Dropdown test' ,() => {
         
        it('Static dropdown', () => {

            cy.get('select')
            .select('option1')
            .should('have.value','option1')
            });


        it('Dynamic dropdown', () => {

            cy.get('#autocomplete')
              .type('tur')

              cy.get('.ui-menu-item div').each(($e1, index, $list) =>{
                if($e1.text()==='Turkmenistan')
                {
                    $e1.click()
                }            
              })
                
        });

        // it works
        it('Assert the Dynamic dropdown', () => {
            cy.get('#autocomplete')
                .should('have.value', 'Turkmenistan')
        });
        
    });

});
