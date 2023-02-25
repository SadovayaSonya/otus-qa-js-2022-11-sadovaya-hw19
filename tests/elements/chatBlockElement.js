import {Selector, t} from 'testcafe';

class ChatBlockElement {
    constructor() {
        this.buttonChatInList = Selector('.nim-dialog').nth(0);
        this.inputTextMessage = Selector('#im_editable0');
        this.buttonSendMessage = Selector('.im-send-btn_send');
        this.countMsgInChat = Selector('li[class*="im-mess"]').count;
        this.textMsgInChat = Selector('.im-mess--text').nth(-1).textContent;
    }

    async open() {
        await t
            .click(this.buttonChatInList)
            .wait(500);
    }

    async sendMessage(textMsg) {
        await t
            .click(this.inputTextMessage)
            .typeText(this.inputTextMessage, textMsg)
            .click(this.buttonSendMessage);
    }

    async checkCountMessages(numberOfMessagesBefore, numberOfMessagesAfter) {
        await t
            .expect(numberOfMessagesBefore + 1).eql(numberOfMessagesAfter);
    }

    async checkTextSendMessage(textMsg) {
        await t
            .expect(this.textMsgInChat).eql(textMsg);
    }
}

export default ChatBlockElement;