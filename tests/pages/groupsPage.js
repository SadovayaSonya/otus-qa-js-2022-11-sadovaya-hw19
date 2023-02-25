import {Selector, t} from 'testcafe';
import {groupsUrl} from '../helpers/constants';

class GroupsPage {
    constructor() {
        this.inputSearchGroups = Selector('#groups_list_search');
        this.buttonSearchGroups = Selector('.ui_search_button_search');
        this.buttonSubscribeToHabr = Selector('#search_sub-20629724');
        this.counterGroups = Selector('#groups_groups_tab span.ui_tab_count_new');
        this.rowOfGroupHabr = Selector('[data-group-id="20629724"]');
        this.buttonGroupActionsMenu = Selector('.group_row_actions .ui_actions_menu_icons');
        this.buttonUnsubscribeFromGroup = Selector('[onclick*="GroupsList.subscribe"]');

    }

    async openPage() {
        await t
            .navigateTo(groupsUrl);
    }

    async searchOfGroup(nameGroup) {
        await t
            .typeText(this.inputSearchGroups, nameGroup)
            .click(this.buttonSearchGroups)
            .wait(1000);
    }

    async subscribeToHabr() {
        await t
            .click(this.buttonSubscribeToHabr)
            .eval(() => location.reload());
    }

    async checkSubscribeToHabr() {
        await t
            .expect(this.counterGroups.textContent).eql('1')
            .expect(this.rowOfGroupHabr.exists).ok();
    }

    async unsubscribeFromGroup() {
        await t
            .click(this.buttonGroupActionsMenu)
            .click(this.buttonUnsubscribeFromGroup)
            .eval(() => location.reload());
    }
}

export default new GroupsPage();