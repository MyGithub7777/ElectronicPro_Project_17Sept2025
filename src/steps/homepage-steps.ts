import { Given, When } from "@cucumber/cucumber";

Given('user launch browser with url', async function () {
    console.log("browser launched with url");
});

When('user click on signin link', async function () {
   await this.homepage_obj.clickOnSignInLink();
   await this.page.waitForTimeout(2000);
});