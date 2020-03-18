const BasePage = require('../pages/base.page');

class LoginPage extends BasePage{
    constructor() {
        super();
        this.textOnLoginPageElement = '#main_content_left>h2';
    }

    async getLoginPageElement() {
        const loginPageElement = await $(this.textOnLoginPageElement);
        return loginPageElement;
    }

    async getLoginResultText() {
        const resultTextElement = await super.getMainMenuResultElement();
        const resultText = await resultTextElement.getText();
        return resultText;
    }
};

module.exports = new LoginPage();