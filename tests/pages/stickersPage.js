import {Selector, t} from 'testcafe';
import {stickersUrl} from '../helpers/constants';

class StickersPage {
    constructor() {
        this.tabFreeStickers = Selector('#pedit_general_short_information');
        this.buttonBuyStickerPack = Selector('#tb_stickers_free .StickersBuyButton').nth(0);
        this.buttonMyStickers = Selector('[onclick*="showMyStickers"]');
        this.textAddedOnButtonStickerPack = Selector('#tb_stickers_free .FlatButton__content').textContent;
    }

    async openPage() {
        await t
            .navigateTo(stickersUrl);
    }

    async openTabFreeStickers() {
        await t
           .click(this.tabFreeStickers);
    }

    async buyStickerPack() {
        await t
            .click(this.buttonBuyStickerPack);
    }

    async getIdStickerPack() {
        let idStickerPack = await this.buttonBuyStickerPack.getAttribute('class');
        return idStickerPack.match(/\d+/g)[0];
    }

    async checkStickerPackAdded(idStickerPack) {
        await t
            .click(this.buttonMyStickers)
            .wait(2000)
            .expect(Selector(`#im_stickers_my_${idStickerPack}`).exists).ok();
    }
}

export default new StickersPage();