import {Selector, t} from 'testcafe';
import DialogsBlockElement from '../elements/dialogsBlockElement';
import ChatBlockElement from '../elements/chatBlockElement';
import {messengerUrl} from '../helpers/constants';

class MessengerPage {
    constructor() {
        this.dialogsBlock = new DialogsBlockElement();
        this.dialogOfChat = new ChatBlockElement();
    }

    async openPage() {
        await t
            .navigateTo(messengerUrl);
    }
}

export default new MessengerPage();