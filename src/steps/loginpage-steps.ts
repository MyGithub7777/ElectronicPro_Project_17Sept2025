import { When } from "@cucumber/cucumber";


When('user click on dont have account link', async function () {
    await this.loginpage_obj.clickOnDontHaveAnAccountLink();
});