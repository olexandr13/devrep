const assert = require('assert')
const RegistrationPage = require('../../src/page-objects/registration-page');
const URL = require('../../src/config');

const registrationPage = new RegistrationPage();

describe('Suite', () => {

    it('Registration', async () => {
      await browser.url(URL);
     
      await registrationPage.fillName();
      await registrationPage.fillSurname();
      await registrationPage.fillEmail();
      await registrationPage.fillPassword();

      await (await $('#submit_button')).click();

      const resultElement = await $('#email-help-link+p');
      await resultElement.waitForDisplayed(3000);

      const text = await resultElement.getText();

      // assert.strictEqual(text, 'Для завершения регистрации введите присланный вам на e-mail код:');
      assert.strictEqual(text, 'To complete registration, enter sent you an e-mail code:');
      await browser.pause(1000)
    })
})
