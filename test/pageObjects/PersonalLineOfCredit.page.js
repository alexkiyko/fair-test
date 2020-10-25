class PersonalLineOfCreditPage {
  get successMsg() {
    return $('//p[@id="notice"]');
  }

  get interestAt30Days() {
    return $('//p[5]')
  }

  get totalPayoffAt30Days() {
    return $('//p[6]')
  }

  get transactionTypeDropdown() {
    return $('//select[@id="transaction_type"]');
  }

  get transactionAmount() {
    return $('//input[@id="transaction_amount"]');
  }

  get transactionAppliedAtDropdown() {
    return $('//select[@id="transaction_applied_at"]');
  }

  get saveTransactionBtn() {
    return $('//input[@type="submit"]');
  }

  /**
   * draw
   * @param amount {number}
   * @param onDay {string}
   */

  draw(amount, onDay) {
    const interestBeforeTransaction = this.interestAt30Days.getText();
    this.transactionTypeDropdown.selectByVisibleText('Draw');
    this.transactionAmount.setValue(amount);
    this.transactionAppliedAtDropdown.selectByVisibleText(onDay);
    this.saveTransactionBtn.click();

    browser.waitUntil(() => {
      const interestAfterTransaction = this.interestAt30Days.getText();
      return interestAfterTransaction !== interestBeforeTransaction
      }, {
        timeout: 5000
      }
    );
    return this;
  }

  /**
   * payback
   * @param amount {number}
   * @param onDay {string}
   */

  payback(amount, onDay) {
    const interestBeforeTransaction = this.interestAt30Days.getText();
    this.transactionTypeDropdown.selectByVisibleText('Payment');
    this.transactionAmount.setValue(amount);
    this.transactionAppliedAtDropdown.selectByVisibleText(onDay);
    this.saveTransactionBtn.click();

    browser.waitUntil( () => {
      const interestAfterTransaction = this.interestAt30Days.getText();
      return interestAfterTransaction !== interestBeforeTransaction
      },{
      timeout: 5000
      }
    );
    return this;
  }
}

module.exports = new PersonalLineOfCreditPage();
