// import { Given, When, Then } from "@cucumber/cucumber";
// import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";
// import { Homepage } from "../pageobjects/homepage";
// import { Loginpage } from "../pageobjects/loginpage";
// import { Signuppage } from "../pageobjects/signuppage";
// import { MyAccountpage } from "../pageobjects/myaccountpage";

// var browser: Browser;
// var context: BrowserContext;
// var page: Page;

// var homepage_obj: Homepage;
// var loginpage_obj: Loginpage;
// var signuppage_obj: Signuppage;
// var myaccountpage_obj: MyAccountpage;

// Given('user launch browser with url', async function () {
//     browser = await chromium.launch({headless: false});
//     context = await browser.newContext();
//     page = await context.newPage();

//     await page.goto('https://electronicpro.odoo.com/');
//     await this.page.waitForTimeout(2000);
//     homepage_obj = new Homepage(page);
//     loginpage_obj = new Loginpage(page);
//     signuppage_obj = new Signuppage(page);
//     myaccountpage_obj = new MyAccountpage(page);

// });

// When('user click on signin link', async function () {
//    await homepage_obj.clickOnSignInLink();
//    await this.page.waitForTimeout(2000);
// });

// When('user click on dont have account link', async function () {
//     await loginpage_obj.clickOnDontHaveAnAccountLink();
// });

// When('user enter name as {string} and email as {string}',async function (name, email) {
//     await signuppage_obj.enterUsername(name);
//     await signuppage_obj.enterEmailAddress(email);
// });

// When('user enter password as {string} and confirm password as {string}',async function (password, confirm_password) {
//    await signuppage_obj.enterPassword(password);
//    await signuppage_obj.enterConfirmPassword(confirm_password);
// });

// When('user click on signup button', async function () {
//     await signuppage_obj.clickOnSignupButton();
// });

// Then('user should navigate to my account page {string}',async function (expected_result: string) {
//     var text = await myaccountpage_obj.getTextFromMyAccountPage();
//     expect(text).toEqual(expected_result);
// });