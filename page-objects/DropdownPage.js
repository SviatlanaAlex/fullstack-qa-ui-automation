import {expect} from "@playwright/test";

export class DropdownPage {

    constructor(page) {

        this.page = page;
        this.dropdown = page.locator("#dropdown");

    }

    async goTo() {

        await this.page.goto('/dropdown');

    }

    async selectAnOption(name) {

        await this.dropdown.selectOption(name);

        const chosenOptionValue = name.replace("Option ", "");
        await expect(await this.dropdown).toHaveValue(chosenOptionValue);

    }

}