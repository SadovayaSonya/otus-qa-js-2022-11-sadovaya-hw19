import authPage from '../pages/authPage';
import feedPage from '../pages/feedPage';
import {baseUrl} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK авторизация')
    .page(baseUrl);

test('Авторизация в ВК через номер телефона и пароль', async t => {
    await authPage.switchToRussianLang();
    await authPage.login();
    await feedPage.checkForBoxPublishingNews();
});
