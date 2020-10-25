const BasePage = require('./Base.page');

class HomePage extends BasePage {
    get title() {
        return $('//h1');
    }

    get newLineOfCreditLink() {
        return $('//a[text() = "New Line of credit"]');
    }

    open() {
        super.open('/');
    }
}

module.exports = new HomePage();
