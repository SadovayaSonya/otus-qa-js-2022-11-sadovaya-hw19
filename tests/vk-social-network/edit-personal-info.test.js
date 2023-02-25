import authPage from '../pages/authPage';
import editPersonalInfoPage from '../pages/editPersonalInfoPage';
import {baseUrl, hometown, infoAboutUser} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK заполнение личной информации')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await editPersonalInfoPage.openPage()
    });

test('Заполнение основной информации о пользователе', async t => {
    await editPersonalInfoPage.fillInfoAboutUser(infoAboutUser);
    await editPersonalInfoPage.fillFamilyStatus();
    await editPersonalInfoPage.fillHometown(hometown);
    await editPersonalInfoPage.fillLanguageSkills();
    await editPersonalInfoPage.clickSave();
    await editPersonalInfoPage.checkChangesSaved();
});
