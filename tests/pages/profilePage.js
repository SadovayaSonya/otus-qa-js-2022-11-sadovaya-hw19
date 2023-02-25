import {Selector, t} from 'testcafe';
import NewsPublishingBoxElement from '../elements/newsPublishingBoxElement';
import PostElement from "../elements/postElement";

class ProfilePage {
    constructor() {
        this.boxPublishingNews = new NewsPublishingBoxElement();
        this.boxPost = new PostElement();
        this.counterPosts = Selector('#page_wall_count_own').getAttribute('value');
    }

    async openPage() {
        await t
            .navigateTo(`https://vk.com/${process.env.VK_ID}`);
    }

    async checkNumbersOfPosts() {
        const numberOfPosts = this.counterPosts;
        return Number(numberOfPosts);
    }

    async compareNumbersOfPostsBeforeAndAfter(numberPostsBefore, numberPostsAfter) {
        await t
            .expect(numberPostsBefore + 1).eql(numberPostsAfter);
    }
}

export default new ProfilePage();