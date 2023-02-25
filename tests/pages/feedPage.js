import {Selector, t} from 'testcafe';
import NewsPublishingBoxElement from '../elements/newsPublishingBoxElement';
import PostElement from '../elements/postElement';

class FeedPage {
    constructor() {
        this.boxPublishingNews = new NewsPublishingBoxElement();
        this.boxPost = new PostElement();

    }

    async checkForBoxPublishingNews() {
        await t.expect(this.boxPublishingNews.inputTextNews.exists).ok();
    }
}

export default new FeedPage();