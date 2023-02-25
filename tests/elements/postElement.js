import {Selector, t} from 'testcafe';

class PostElement {
    constructor() {
        this.buttonPostActionMenu = Selector('.PostHeaderActionsUiActionMenuIcon').nth(0);
        this.buttonAddPostToBookmarks = Selector('[data-add="Сохранить в закладках"]').nth(0);
        this.buttonSetLikePost = Selector('.PostButtonReactions--post').nth(0);
        this.buttonDeletePost = Selector('[onclick*="deletePost"]').nth(0);
        this.textPostIsDeleted = Selector('.dld_inner');
    }

    async setLikePost() {
        await t
            .click(this.buttonSetLikePost);
    }

    async addPostToBookmarks() {
        await t
            .click(this.buttonPostActionMenu)
            .click(this.buttonAddPostToBookmarks);
    }

    async checkNumbersOfLikes() {
        let numberOfLikes = await this.buttonSetLikePost.getAttribute('data-reaction-counts');
        return JSON.parse(numberOfLikes)['0'];
    }

    async compareNumbersOfLikesBeforeAndAfter(numberLikesBefore, numberLikesAfter) {
        await t
            .expect(numberLikesBefore + 1).lte(numberLikesAfter);
    }

    async deletePost() {
        await t
            .click(this.buttonPostActionMenu)
            .click(this.buttonDeletePost);
    }

    async checkPostIsDeleted() {
        await t
            .expect(this.textPostIsDeleted.textContent).eql('Запись удалена. ');
    }

}

export default PostElement;