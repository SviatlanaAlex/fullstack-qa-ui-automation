import {expect} from "@playwright/test";

export class CheckboxesPage {

    constructor(page) {

        this.page = page;
        this.checkboxes = page.getByRole("checkbox");

    }

    async goTo() {

        await this.page.goto('/checkboxes');

    }

    async checkboxesCount() {

        return (await this.checkboxes.count());

    }

    async readStates() {

        console.log("\nCheckboxes states:")
        for (let i = 0; i < await this.checkboxesCount(); i++) {
            if (await this.checkboxes.nth(i).isChecked()) {
                console.log(`- checkbox ${i + 1} is selected`);
            } else {
                console.log(`- checkbox ${i + 1} is deselected`);
            }
        }

    }

    async changeStates() {

        console.log("\nStates change: selecting deselected checkbox and deselecting selected checkbox");
        for (let i = 0; i < await this.checkboxesCount(); i++) {
            if (await this.checkboxes.nth(i).isChecked()) {
                await this.checkboxes.nth(i).uncheck();
                await expect(this.checkboxes.nth(i)).not.toBeChecked();
            } else {
                await this.checkboxes.nth(i).check();
                await expect(this.checkboxes.nth(i)).toBeChecked();
            }
        }

    }

}