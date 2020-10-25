const { expect } = require('chai');
const HomePage = require('../pageObjects/Home.page');
const NewLineOfCreditPage = require('../pageObjects/NewLineOfCredit.page');
const PersonalLineOfCreditPage = require('../pageObjects/PersonalLineOfCredit.page');

describe('SCENARIO 2', () => {
    before('Launch Application', () => {
        HomePage.open();
        expect(HomePage.title.getText()).equal('Listing Line Of Credits');
    });

    it('Should load "New line of credit" page', function () {
        HomePage.newLineOfCreditLink.click();
        NewLineOfCreditPage.creditForm.waitForDisplayed({ timeout: 5000 });
        expect(NewLineOfCreditPage.title.getText()).equal('New Line Of Credit');
    });

    it('Should create new line of credit', function () {
        NewLineOfCreditPage.createLineOfCredit(35, 1000);
        expect(PersonalLineOfCreditPage.successMsg.getText())
          .equal('Line of credit was successfully created.');
    });

    it('Should Draw $500, Payback $200, Draw $100', function () {
        PersonalLineOfCreditPage
          .draw(500, '1')
          .payback(200, '15')
          .draw(100, '25');

        const actualInterestAt30Days = PersonalLineOfCreditPage.interestAt30Days.getText();
        const expectedInterestAt30Days = '11.99';
        expect(actualInterestAt30Days.substring(actualInterestAt30Days.indexOf('$') + 1))
          .equal(expectedInterestAt30Days);

        const actualTotalPayoffAt30Days = PersonalLineOfCreditPage.totalPayoffAt30Days.getText();
        const expectedTotalPayoffAt30Days = '411.99';
        expect(actualTotalPayoffAt30Days.substring(actualTotalPayoffAt30Days.indexOf('$') + 1))
          .equal(expectedTotalPayoffAt30Days);
    });
});
