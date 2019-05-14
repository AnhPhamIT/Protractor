import { browser, by, protractor, ElementFinder } from "protractor";

describe("User", function(){ 

    it("should be welcome when login with valid account", async function(){
        
        browser.waitForAngularEnabled(false)
        browser.manage().window().maximize()
        browser.get("http://travelwithus.asia/")        
        console.log("Browser has been started successfully")

        console.log("selecting on Sign In")
        await browser.element(by.xpath("//a[normalize-space()='Sign In']")).click()
        await browser.sleep(5000)
        console.log("Input email")
        await browser.element(by.xpath("//input[@id='email']")).sendKeys("ptvanh@mailinator.com")
        console.log("Input password")
        await browser.element(by.xpath("//input[@id='pwd']")).sendKeys("123456")
        console.log("selecting on Login button")
        await browser.element(by.xpath("//button[text()='Login']")).click()

        console.log("verify welcome email in the top right corner")
        await expect(browser.element(by.xpath("//a[contains(text(),'Welcome ptvanh@mailinator.com')]")).isDisplayed()).toBe(true)
    })

})