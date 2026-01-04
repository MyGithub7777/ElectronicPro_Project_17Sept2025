import { Page } from "@playwright/test";

export class MyAccountpage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //locator
    private  myaccount_text = `//h3[@class='my-3']`;


    //actions
    public async getTextFromMyAccountPage(): Promise<string> {
        var text = await this.page.locator(this.myaccount_text).innerText();
        console.log(text);
        return text;
    }


}