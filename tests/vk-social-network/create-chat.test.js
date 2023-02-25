import authPage from '../pages/authPage';
import messengerPage from '../pages/messengerPage';
import {baseUrl, nameChat} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK создание чата')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await messengerPage.openPage()
    });

test('Создание нового чата', async t => {
    await messengerPage.dialogsBlock.createChat(nameChat);
    await messengerPage.dialogsBlock.checkExistChat(nameChat);
});
