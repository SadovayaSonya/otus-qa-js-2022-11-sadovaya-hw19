import authPage from '../pages/authPage';
import friendsPage from '../pages/friendsPage';
import {baseUrl} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK добавление друга')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await friendsPage.openPage()
    });

test(`Добавление нового друга с ID ${process.env.VK_ID_FRIEND}`, async t => {
    await friendsPage.searchFriend(process.env.VK_ID_FRIEND);
    await friendsPage.checkFoundFriend(process.env.VK_ID_FRIEND);
    await friendsPage.addFriend();
    await friendsPage.checkAddedFriend();
});
