const faker = require('faker');

module.exports = class RegistrationPage {
  constructor() {
    this.nameInputSelector = '[name="name"]';
    this.surnameInputSelector = '[name="surname"]';
    this.emailSelector = '[name="email"]';
    this.passSelector = '[name="password"]';
    this.email = faker.internet.email();
  }

  async fillName() {
    const nameInput = await $(this.nameInputSelector);
    await nameInput.setValue('Alex');
  }

  async fillSurname() {
    const surnameInput = await $(this.surnameInputSelector);
    await surnameInput.setValue('Pelykh');
  }
  
  async fillEmail() {
    const emailInput = await $('[name="email"]');
    await emailInput.setValue(this.email);
  }

  async fillPassword() {
    const passInput = await $(this.passSelector);
    await passInput.setValue('Test1234');
  }
}
