import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { Homepage } from "../pageobjects/homepage";
import { Loginpage } from "../pageobjects/loginpage";
import { Signuppage } from "../pageobjects/signuppage";
import { MyAccountpage } from "../pageobjects/myaccountpage";


export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    //pom classes 
    homepage_obj!: Homepage;
    loginpage_obj!: Loginpage;
    signuppage_obj!: Signuppage;
    myaccountpage_obj!: MyAccountpage;
  
    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);