import {Selector, t} from 'testcafe';
import {editPersonalInfoUrl} from '../helpers/constants';

class EditPersonalInfoPage {
    constructor() {
        this.inputInfoAboutUser = Selector('#pedit_general_short_information');
        this.dropdownFamilyStatus = Selector('#container3 input.selector_input.selected');
        this.itemInDropdownFamilyStatus = Selector('li[title="В активном поиске"]');
        this.inputHometown = Selector('#pedit_home_town');
        this.dropdownLanguageSkills = Selector('#container9 input.selector_input');
        this.itemInDropdownLanguageSkills = Selector('li[title="Русский Русский"]');
        this.buttonSave = Selector('[onclick*="saveGeneral"]');
        this.msgChangesSaved = Selector('.msg_text > b');
    }

    async openPage() {
        await t
            .navigateTo(editPersonalInfoUrl);
    }

    async fillInfoAboutUser(infoAboutUser) {
        await t
            .typeText(this.inputInfoAboutUser, infoAboutUser);
    }

    async fillHometown(hometown) {
        await t
            .typeText(this.inputHometown, hometown);
    }

    async fillFamilyStatus() {
        await t
            .click(this.dropdownFamilyStatus)
            .click(this.itemInDropdownFamilyStatus);
    }

    async fillLanguageSkills() {
        await t
            .click(this.dropdownLanguageSkills)
            .click(this.itemInDropdownLanguageSkills);
    }

    async clickSave() {
        await t
          .click(this.buttonSave);
    }

    async checkChangesSaved() {
        await t
          .expect(this.msgChangesSaved.textContent).eql('Изменения сохранены');
    }
}

export default new EditPersonalInfoPage();