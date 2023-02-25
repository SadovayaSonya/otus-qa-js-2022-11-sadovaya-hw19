import {Selector, t} from 'testcafe';

class AuthPage {
    constructor() {
        this.inputPhoneOrEmail = Selector('#index_email');
        this.buttonLogin = Selector('.VkIdForm__signInButton');
        this.buttonLoginWithPassword = Selector('.vkc__Bottom__switchToPassword');
        this.inputPassword = Selector('[name="password"]');
        this.buttonContinue = Selector('.vkuiButton');
        this.toggleRussianLang = Selector('#index_footer_wrap a').withText('Русский');
    }

    async login(phoneOrEmail = process.env.VK_PHONE, password = process.env.VK_PASSWORD) {
        await t
            .typeText(this.inputPhoneOrEmail, phoneOrEmail)
            .click(this.buttonLogin)
            .click(this.buttonLoginWithPassword)
            .wait(1000)
            .typeText(this.inputPassword, password)
            .click(this.buttonContinue)
            .wait(2000);
    }

    async switchToRussianLang() {
        await t
            .click(this.toggleRussianLang)
            .wait(2000);
    }
}

export default new AuthPage();