import { Page } from "@playwright/test";

export class Homepage {

    private page: Page;
    constructor(p: Page) {
        this.page = p;
    }

    //obj repo 
    private signin_link = `(//a[text()='Sign in'])[1]`;

    // actions
    public async clickOnSignInLink() {
        await this.page.locator(this.signin_link).click();
    }

}