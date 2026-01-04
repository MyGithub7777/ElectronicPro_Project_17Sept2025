import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then('user should navigate to my account page {string}',async function (expected_result: string) {
    var text = await this.myaccountpage_obj.getTextFromMyAccountPage();
    expect(text).toEqual(expected_result);
});