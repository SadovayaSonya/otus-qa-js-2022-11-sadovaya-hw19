import authPage from '../pages/authPage';
import messengerPage from '../pages/messengerPage';
import {baseUrl, nameChat, textMessage} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK отправка сообщения')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await messengerPage.openPage();
        await messengerPage.dialogsBlock.createChat(nameChat);
    });

test('Отправка текстового сообщения в чат', async t => {
    await messengerPage.dialogOfChat.open();
    const numberOfMessagesBefore = await messengerPage.dialogOfChat.countMsgInChat;
    await messengerPage.dialogOfChat.sendMessage(textMessage);
    const numberOfMessagesAfter = await messengerPage.dialogOfChat.countMsgInChat;
    await messengerPage.dialogOfChat.checkCountMessages(numberOfMessagesBefore, numberOfMessagesAfter);
    await messengerPage.dialogOfChat.checkTextSendMessage(textMessage);
});
