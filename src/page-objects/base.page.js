module.exports = class BasePage {
  constructor() {
      this.path = 'http://master-test.net/en';
  }

  async open() {
      await browser.url(this.path);
  }

  async login() {
      const emailInput = await $('[name="email"]');
      await emailInput.setValue('A.prysiazhnyi@creatio.com');
  
      const passwordInput = await $('[name="password"]');
      await passwordInput.setValue('qwerty123');
  
      await (await $('[name="submit"]')).click();
  
      const resultElement = await $('#ModuleWin_Config h2');
      await resultElement.waitForDisplayed(3000);
  };
}