module.exports = class BasePage {
    constructor() {
        this.mainMenuResultElement = '#ModuleWin_Config h2';
    }

    async open(path) {
        await browser.url(path);
    }
   
    async getMainMenuResultElement() {
        const resultElement = await $(this.mainMenuResultElement);
        await resultElement.waitForDisplayed(3000);
        return resultElement;
    }

    async login() {
        const emailInput = await $('[name="email"]');
        await emailInput.setValue('A.prysiazhnyi@creatio.com');
    
        const passwordInput = await $('[name="password"]');
        await passwordInput.setValue('qwerty123');
    
        await (await $('[name="submit"]')).click();
    
        await this.getMainMenuResultElement();
    }

}