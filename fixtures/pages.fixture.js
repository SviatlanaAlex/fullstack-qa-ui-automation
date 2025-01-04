import {test as base} from "@playwright/test";
import {AddRemoveElementsPage} from "../page-objects/AddRemoveElementsPage";
import {CheckboxesPage} from "../page-objects/CheckboxesPage";
import {DropdownPage} from "../page-objects/DropdownPage";
import {InputPage} from "../page-objects/InputPage";
import {LoginPage} from "../page-objects/LoginPage";
import {UploadDownloadFilePage} from "../page-objects/UploadDownloadFilePage";

export const test = base.extend({

    addRemoveElementsPage: async ({page}, use) => {
        const addRemoveElementsPage = new AddRemoveElementsPage(page);
        await use(addRemoveElementsPage);
    },
    checkboxesPage: async ({page}, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
    dropdownPage: async ({page}, use) => {
        const dropdownPage = new DropdownPage(page);
        await use(dropdownPage);
    },
    inputPage: async ({page}, use) => {
        const inputPage = new InputPage(page);
        await use(inputPage);
    },
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    uploadDownloadFilePage: async ({page}, use) => {
        const uploadDownloadFilePage = new UploadDownloadFilePage(page);
        await use(uploadDownloadFilePage);
    },

});
