class NewLineOfCreditPage {
  get title() {
      return $('//h1');
  }

  get creditForm() {
      return $('//form[@id="new_line_of_credit"]');
  }

  get APRField() {
      return $('//input[@id="line_of_credit_apr"]');
  }

  get lineOfCreditField() {
      return $('//input[@id="line_of_credit_credit_limit"]');
  }

  get CreateLineOfCreditBtn() {
      return $('//input[@type="submit"]');
  }

    /**
     * createLineOfCredit
     * @param apr {number}
     * @param creditLimit {number}
     */

  createLineOfCredit(apr, creditLimit){
      this.APRField.setValue(apr);
      this.lineOfCreditField.setValue(creditLimit);
      this.CreateLineOfCreditBtn.click();
  }
}

module.exports = new NewLineOfCreditPage();
