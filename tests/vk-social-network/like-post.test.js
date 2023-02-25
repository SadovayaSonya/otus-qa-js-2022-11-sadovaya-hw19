import authPage from '../pages/authPage';
import feedPage from '../pages/feedPage';
import {baseUrl} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK лайк посту')
    .page(baseUrl)
    .beforeEach(async () => await authPage.login());

test('Установка лайка посту', async t => {
    const numberOfLikesBefore = await feedPage.boxPost.checkNumbersOfLikes();
    await feedPage.boxPost.setLikePost();
    const numberOfLikesAfter = await feedPage.boxPost.checkNumbersOfLikes();
    await feedPage.boxPost.compareNumbersOfLikesBeforeAndAfter(numberOfLikesBefore, numberOfLikesAfter);
});
