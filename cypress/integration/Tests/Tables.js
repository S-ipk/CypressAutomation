
import { hasUncaughtExceptionCaptureCallback } from 'process';
import *as globalNavigations from '../../support/globalNavigations';

describe('Handlinh tables with Cypress', () => {

    it('Navigate to the ptactice page', () => {
        globalNavigations.practicePage();
    });

    it('should behave...',()=>{
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if(text.includes('WebServices')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                    const priceText = price.text()
                    expect(priceText).to.equals('35')
                })
            }

        })

    });

});