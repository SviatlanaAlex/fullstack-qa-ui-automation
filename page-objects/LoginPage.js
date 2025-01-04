import {expect} from "@playwright/test";

export class LoginPage {

    constructor(page) {

        this.page = page;
        this.usernameLocation = page.locator(".subheader em").first();
        this.passwordLocation = page.locator(".subheader em").last();
        this.usernameField = page.getByLabel("Username");
        this.passwordField = page.getByLabel("Password");
        this.loginButton = page.getByRole("button", {name: "Login"});
        this.successAlert = page.locator(".flash.success");

    }

    async goTo() {

        await this.page.goto('/login');

    }

    async fillCredentialsAndLogin() {

        const username = await this.usernameLocation.innerText();
        const password = await this.passwordLocation.innerText();

        await this.usernameField.fill(username);
        await this.passwordField.fill(password);

        await this.loginButton.click();

    }

    async verifyLoggedInState() {

        const successMessage = "You logged into a secure area!";

        await this.page.waitForURL("/secure");
        await expect(await this.successAlert).toContainText(successMessage);

    }

}