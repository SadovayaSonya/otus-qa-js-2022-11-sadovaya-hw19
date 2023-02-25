import {Selector, t} from 'testcafe';
import {bookmarksUrl} from '../helpers/constants';

class BookmarksPage {
    constructor() {
        this.countItemsInBookmarks = Selector('.page_block.bookmark_block').count;
        this.buttonActionMenuOfItem = Selector('.bookmarks_rows .ui_actions_menu_icons').nth(0);
        this.buttonDeleteFromBookmarks = Selector('[onclick*="removeBookmark"]').nth(0);
    }

    async openPage() {
        await t
            .navigateTo(bookmarksUrl);
    }

    async deleteItemFromBookmarks() {
        await t
            .click(this.buttonActionMenuOfItem)
            .click(this.buttonDeleteFromBookmarks);
    }

    async checkCountItems(numberOfItemsBefore, numberOfItemsAfter) {
        await t
            .expect(numberOfItemsBefore - 1).eql(numberOfItemsAfter);
    }
}

export default new BookmarksPage();