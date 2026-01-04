import { Page } from "@playwright/test";

export class Loginpage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //locator
    private dont_have_an_account_link = 'a.btn.btn-link.btn-sm.mt-2';


    //actions
    public async clickOnDontHaveAnAccountLink() {
        await this.page.locator(this.dont_have_an_account_link).click();
    }


}