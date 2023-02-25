import {Selector, t} from 'testcafe';

class NewsPublishingBoxElement {
    constructor() {
        this.inputTextNews = Selector('#post_field');
        this.buttonVisibilitySettings = Selector('#post_visibility_btn [role="button"]');
        this.buttonCategorySettings = Selector('#post_discover_category_btn [role="button"]');
        this.itemDropdownVisibilityOnlyFriends = Selector('#friends_only');
        this.itemDropdownCategoryIt = Selector('[aria-label="IT"]');
        this.buttonSendPost = Selector('#send_post');
    }

    async sendPost(text) {
        await t
            .click(this.inputTextNews)
            .typeText(this.inputTextNews, text)
            .click(this.buttonVisibilitySettings)
            .click(this.itemDropdownVisibilityOnlyFriends)
            .click(this.buttonCategorySettings)
            .click(this.itemDropdownCategoryIt)
            .click(this.buttonSendPost)
            .wait(2000);
    }
}

export default NewsPublishingBoxElement;