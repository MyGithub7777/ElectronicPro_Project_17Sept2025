import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


When('user enter name as {string} and email as {string}',async function (name, email) {
    await this.signuppage_obj.enterUsername(name);
    await this.signuppage_obj.enterEmailAddress(email);
});

When('user enter password as {string} and confirm password as {string}',async function (password, confirm_password) {
   await this.signuppage_obj.enterPassword(password);
   await this.signuppage_obj.enterConfirmPassword(confirm_password);
});

When('user click on signup button', async function () {
    await this.signuppage_obj.clickOnSignupButton();
});

Then('shows error msg as {string}', async function (message: string) {
  await this.page.waitForTimeout(5000);
  let acutal_message = await this.signuppage.getErrorMessage();
  console.log(acutal_message);
  expect(acutal_message).toContain(message);
})
