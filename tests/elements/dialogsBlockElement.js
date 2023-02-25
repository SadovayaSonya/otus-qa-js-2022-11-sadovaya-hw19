import {Selector, t} from 'testcafe';
import {fioUser} from '../helpers/constants';

class DialogsBlockElement {
    constructor() {
        this.buttonCreateChat = Selector('[aria-label="Новый чат"]');
        this.inputNameChat = Selector('#im_dialogs_creation_name');
        this.inputNameOrLastName = Selector('#im_dialogs_search');
        this.buttonConfirmCreateChat = Selector('[class*="confirm_creation"]');
        this.rowOfChatInList = Selector('span[role="link"]').getAttribute('aria-label');
        this.nameChat = Selector('._im_page_peer_name').textContent;

    }

    async createChat(nameChat) {
        await t
            .click(this.buttonCreateChat)
            .typeText(this.inputNameChat, nameChat)
            .typeText(this.inputNameOrLastName, fioUser)
            .click(this.buttonConfirmCreateChat)
            .wait(200);
    }

    async checkExistChat(nameChat) {
        await t
            .expect(this.nameChat).eql(nameChat)
            .expect(this.rowOfChatInList).eql(`Перейти к чату: ${nameChat}`);
    }
}

export default DialogsBlockElement;