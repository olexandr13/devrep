const assert = require('assert');
const loginPage = require('../../pages/login.page');
const registrationPage = require('../../pages/registration.page');
const BasePage = require('../../pages/base.page');
const mainPage = require('../../pages/main.page');
const basePage = new BasePage();

describe('Master-Test portal', () => {
    xit('Registration', async () => {
        await basePage.open('http://master-test.net/ru/auth/registration');
        await registrationPage.fillName('Andrey');
        await registrationPage.fillSurname('Surname');
        await registrationPage.fillEmail();
        await registrationPage.fillPassword();
        await registrationPage.clickRegButton();
        
        const resultText = await registrationPage.getResultText();
        assert.strictEqual(resultText, 'Для завершения регистрации введите присланный вам на e-mail код:');
    });

    xit('Login',async () => {
        await loginPage.open('http://master-test.net/en');
        await loginPage.login();

        const resultText = await loginPage.getLoginResultText();
        assert.strictEqual(resultText, 'Welcome to Master-Test!');
    });
   
    xit('Logout', async () => {
        await loginPage.open('http://master-test.net/en');
        await loginPage.login();
        await mainPage.clickExitLink();

        const textLoginPageElement = await loginPage.getLoginPageElement();
        await textLoginPageElement.waitForDisplayed(3000);

        const startUrl = await browser.getUrl();
        assert.strictEqual(startUrl, 'http://master-test.net/en');      
    });

    xit('Profile', async () => {
        await browser.url('http://master-test.net/en');
        const emailInput = await $('[name="email"]');
        await emailInput.setValue('A.prysiazhnyi@creatio.com');
  
        const passwordInput = await $('[name="password"]');
        await passwordInput.setValue('qwerty123');
  
        await (await $('[name="submit"]')).click();

        const resultElement = await $('#ModuleWin_Config h2');
        await resultElement.waitForDisplayed(3000);

        await (await $('div.top-menu>a[href="#m=Settings"]')).click();
        
        const nameField = await $('[name="fa2c30"]');
        await nameField.setValue('AndreyNew');

        const surnameField = await $('[name="f1ed6f"]');
        await surnameField.setValue('DevRepublikNew');

        const patronymicField = await $('[name="f98a3a"]');
        await patronymicField.setValue('Courses');

        const telephoneField = await $('[name="f1d6e5"]');
        await telephoneField.setValue('5555555');

        const bqCheckboxPath = '[name="fe5291"]';
        const bqCheckbox = await $(bqCheckboxPath);
        if (!(await (await $(bqCheckboxPath + '[checked]')).isExisting())) await bqCheckbox.click();  

        const glCheckboxPath = '[name="fd3a18"]';
        const glCheckbox = await $(glCheckboxPath);
        if (!(await (await $(glCheckboxPath + '[checked]')).isExisting())) await glCheckbox.click();

        const isStudentCheckboxPath = '[name="fec337"]';
        const isStudentCheckbox = await $(isStudentCheckboxPath);
        if (!(await (await $(isStudentCheckboxPath + '[checked]')).isExisting())) await isStudentCheckbox.click();

        const isTeacherCheckboxPath = '[name="ffde63"]';
        const isTeacherCheckbox = await $(isTeacherCheckboxPath);
        if (!(await (await $(isTeacherCheckboxPath + '[checked]')).isExisting())) await isTeacherCheckbox.click();

        const subscribeCheckboxPath = '[name="fd5b99"]';
        const subscribeCheckbox = await $(subscribeCheckboxPath);
        if (!(await (await $(subscribeCheckboxPath + '[checked]')).isExisting())) await subscribeCheckbox.click();

        const saveButton = await $('[name="save_sattings"]');
        await saveButton.click();

        await resultElement.waitForDisplayed(10000);

        const welcomeText = await resultElement.getText();
        assert.strictEqual(welcomeText, 'Welcome to Master-Test!');
    });

    it ('Invite your student', async () => {
        await loginPage.open('http://master-test.net/en');
        await loginPage.login();

        const inviteEmailField = await $('[name="invite_email"]');
        await inviteEmailField.setValue('wwwww@gmail.com');

        const inviteStudentPath = '[name="invite_to_student"]';
        const inviteStudent = await $(inviteStudentPath);
        if (!(await (await $(inviteStudentPath + '[checked]')).isExisting())) await inviteStudent.click();
        
        const sendInviteButton = await $('.x-panel .icon-email_go');
        await sendInviteButton.click();

        const inviteTextField = await $('.x-window .x-form-textarea');
        await inviteTextField.waitForDisplayed(2000);
        await inviteTextField.setValue('Hello! Join us!');

        const sendInviteWindowButton = await $('.x-window .icon-email_go');
        await sendInviteWindowButton.click();

        await browser.waitUntil(async () => {
            return (await browser.getAlertText()) === 'Invititation was sent successfuly';
        },3000);
    });

    xit('Test complete', async () => {
        await login();

        const catalogLink = await $('a[href="/en/catalog"]');
        await catalogLink.click();

        await browser.switchWindow('http://master-test.net/en/catalog');
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'http://master-test.net/en/catalog';
        }, 5000);

        const testLink = await $('a[href="#category_90"]');
        await testLink.click();

        const testName = await $('//*[contains(text(),"English tenses")]');
        await testName.click();

        const test1 = await $('[href="#quiz_item_1"]');
        await test1.waitForDisplayed(5000);
        await test1.click();
        
        const test1answer = await $('[name="question_answer_1"][value="2"]');
        await test1answer.waitForDisplayed(1000);
        await test1answer.click();

        const nextButton = await $('.icon-arrow_right');
        await nextButton.click();

        const test2answer = await $('[name="question_answer_2"][value="2"]');
        await test2answer.waitForDisplayed(1000);
        await test2answer.click();

        await nextButton.click();

        const test3answer = await $('[name="question_answer_3"][value="2"]');
        await test3answer.waitForDisplayed(1000);
        await test3answer.click();

        await nextButton.click();

        const test4answer = await $('[name="question_answer_4"][value="2"]');
        await test4answer.waitForDisplayed(1000);
        await test4answer.click();

        await nextButton.click();

        const test5answer = await $('[name="question_answer_5"][value="1"]');
        await test5answer.waitForDisplayed(1000);
        await test5answer.click();

        const finishButton = await $('[name="finish_button"]');
        await finishButton.click();

        const testResults = await $('//span[contains(text(),"Test Results - English tenses")]');
        await testResults.waitForDisplayed(3000);

        const resultsIcon = await browser.$$('.icon-cancel');
        assert.strictEqual((await resultsIcon.length), 5);
    });
})