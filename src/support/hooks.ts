import { After, Before, Status } from "@cucumber/cucumber"
import { CustomWorld } from "./customworld"
import { chromium, firefox, LaunchOptions } from "@playwright/test";
import { Homepage } from "../pageobjects/homepage";
import { Loginpage } from "../pageobjects/loginpage";
import { Signuppage } from "../pageobjects/signuppage";
import { MyAccountpage } from "../pageobjects/myaccountpage";
import path from "path";
import fs from "fs";



Before( { timeout: 20000 }, async function (this: CustomWorld) {

    let browserName = "chrome";
    let launchoptions: LaunchOptions = { headless: false, args: ["--start-maximized"] }
   
    if(browserName == 'chrome') {
        this.browser = await chromium.launch({...launchoptions});
    }
    else if(browserName == 'firefox') {
        this.browser = await firefox.launch({...launchoptions});
    }
    else if(browserName == 'msedge') {
        this.browser = await chromium.launch({...launchoptions, channel: 'msedge' });
    }
    else {
        console.log('browser not exist');
    }

    this.context = await this.browser.newContext({
        viewport: null,
        recordVideo: { dir: "reports/test-results/videos/", }
    });
    await this.context.tracing.start({ screenshots: true, snapshots: true });
    this.page = await this.context.newPage();

    await this.page.goto('https://electronicpro.odoo.com/');
    await this.page.waitForTimeout(2000);
    this.homepage_obj = new Homepage(this.page);
    this.loginpage_obj = new Loginpage(this.page);
    this.signuppage_obj = new Signuppage(this.page);
    this.myaccountpage_obj = new MyAccountpage(this.page);
})

After( async function (this: CustomWorld, scenario) {

      if (scenario.result?.status === Status.FAILED) {
        const screenshotPath = path.join(
            "reports/test-results",
            `screenshot-${Date.now()}.png`
        );
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
        const screenshot = fs.readFileSync(screenshotPath);
        this.attach(screenshot, "image/png");

        // Attach video (Playwright saves automatically in outputDir)
        const videoPath = await this.page.video()?.path();
        await this.page.close();
        if (videoPath && fs.existsSync(videoPath)) {
            const video = fs.readFileSync(videoPath);
            this.attach(video, "video/webm");
        }

        // Attach trace (saved in outputDir)
        const tracePath = path.join("reports/test-results", `trace.zip`);
        await this.context.tracing.stop({ path: tracePath });
        if (fs.existsSync(tracePath)) {
            const trace = fs.readFileSync(tracePath);
            this.attach(trace, "application/zip");
        }
    await this.context.close();
    await this.browser.close();
}
})