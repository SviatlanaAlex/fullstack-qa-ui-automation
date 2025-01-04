import {expect} from "@playwright/test";

export class InputPage {

    constructor(page) {

        this.page = page;
        this.inputField = page.locator("input");

    }

    async goTo() {

        await this.page.goto('/inputs');

    }

    async fillTextField(numberAsString) {

        await this.inputField.fill(numberAsString);

        await expect(await this.inputField).toHaveValue(numberAsString);

    }

}