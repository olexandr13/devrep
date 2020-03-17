const faker = require('faker');

 class RegistrationPage {
  constructor() {
    this.nameInputSelector = '[name="name"]';
    this.surnameInputSelector = '[name="surname"]';
    this.emailSelector = '[name="email"]';
    this.passSelector = '[name="password"]';
    this.email = faker.internet.email();
    this.regButton = '#submit_button';
    this.resultElement = '#email-help-link+p';
  }

  async fillName(name) {
    const nameInput = await $(this.nameInputSelector);
    await nameInput.setValue(name);
  }

  async fillSurname(surname) {
    const surnameInput = await $(this.surnameInputSelector);
    await surnameInput.setValue(surname);
  }
  
  async fillEmail() {
    const emailInput = await $('[name="email"]');
    await emailInput.setValue(this.email);
  }

  async fillPassword() {
    const passInput = await $(this.passSelector);
    await passInput.setValue('Test1234');
  }

  async clickRegButton() {
      const regButton = await $(this.regButton);
      await regButton.click();
  }

  async getRegistrationResultText() {
      const resultElement = await $(this.resultElement);
      await resultElement.waitForDisplayed(3000);
      const resultElementText = await resultElement.getText();
      return resultElementText;
  }
}

module.exports = new RegistrationPage();