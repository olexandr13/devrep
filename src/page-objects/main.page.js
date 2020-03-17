const BasePage = require('../pages/base.page');

class MainPage extends BasePage{
    constructor() {
        super();
         this.exitLink = '#exit_link';
         this.inviteEmailField = '[name="invite_email"]';
    }

    async fillInviteEmailField() {
        const inviteEmailField = await $(this.inviteEmailField);
        await inviteEmailField.setValue('test@gmail.com');
    }

    async clickExitLink() {
        const exitLink = await $(this.exitLink);
        await exitLink.click();
    }

};

module.exports = new MainPage();