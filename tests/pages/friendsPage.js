import {Selector, t} from 'testcafe';
import {friendsUrl} from '../helpers/constants';

class FriendsPage {
    constructor() {
        this.inputSearchFriend = Selector('#search_query');
        this.buttonSearch = Selector('.ui_search_button_search');
        this.buttonAddFriend = Selector('[id*="search_sub"]');
    }

    async openPage() {
        await t
            .navigateTo(friendsUrl);
    }

    async searchFriend(idFriend) {
        await t
            .typeText(this.inputSearchFriend, idFriend)
            .click(this.buttonSearch);
    }

    async checkFoundFriend(idFriend) {
        await t
            .expect(Selector(`.name > a[href="/${idFriend}"]`).exists).ok();
    }

    async addFriend() {
        await t
            .click(this.buttonAddFriend);
    }

    async checkAddedFriend() {
        await t
            .expect(this.buttonAddFriend.getStyleProperty('display')).eql('none');
    }
}

export default new FriendsPage();