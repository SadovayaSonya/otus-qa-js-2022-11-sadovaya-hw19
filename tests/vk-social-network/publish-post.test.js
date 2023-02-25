import authPage from '../pages/authPage';
import profilePage from '../pages/profilePage';
import {baseUrl, textForPost} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK публикация записи')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await profilePage.openPage()
    })
    .afterEach(async () => await profilePage.boxPost.deletePost());

test('Публикация приватной записи с темой IT на странице', async t => {
    const numberOfPostsBefore = await profilePage.checkNumbersOfPosts();
    await profilePage.boxPublishingNews.sendPost(textForPost);
    const numberOfPostsAfter = await profilePage.checkNumbersOfPosts();
    await profilePage.compareNumbersOfPostsBeforeAndAfter(numberOfPostsBefore, numberOfPostsAfter);
});
