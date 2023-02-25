import authPage from '../pages/authPage';
import bookmarksPage from '../pages/bookmarksPage';
import feedPage from '../pages/feedPage';
import {baseUrl} from '../helpers/constants';
import dotenv from 'dotenv';

dotenv.config();

fixture('VK удаление элемента из закладок')
    .page(baseUrl)
    .beforeEach(async () => {
        await authPage.login();
        await feedPage.boxPost.addPostToBookmarks();
        await bookmarksPage.openPage();
    });

test('Удаление сохраненного поста из закладок', async t => {
    const numberOfItemsBefore = bookmarksPage.countItemsInBookmarks;
    await bookmarksPage.deleteItemFromBookmarks();
    const numberOfItemsAfter = bookmarksPage.countItemsInBookmarks;
    await bookmarksPage.checkCountItems(numberOfItemsBefore, numberOfItemsAfter);
});
