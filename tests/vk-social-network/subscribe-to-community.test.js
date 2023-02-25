import authPage from '../pages/authPage';
import groupsPage from '../pages/groupsPage';
import {baseUrl, nameGroupHabr} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK подписка на сообщество')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await groupsPage.openPage()
    })
    .afterEach(async () => await groupsPage.unsubscribeFromGroup());

test('Подписка на официальное сообщество Хабр', async t => {
    await groupsPage.openPage();
    await groupsPage.searchOfGroup(nameGroupHabr);
    await groupsPage.subscribeToHabr();
    await groupsPage.checkSubscribeToHabr();
});
