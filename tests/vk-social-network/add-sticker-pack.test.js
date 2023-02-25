import authPage from '../pages/authPage';
import stickersPage from '../pages/stickersPage';
import {baseUrl} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK добавление стикерпака')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await stickersPage.openPage()
    });

test('Добавление бесплатного стикерпака в коллекцию', async t => {
    await stickersPage.openTabFreeStickers();
    const idStickerPack = await stickersPage.getIdStickerPack();
    await stickersPage.buyStickerPack();
    await stickersPage.checkStickerPackAdded(idStickerPack);
});
