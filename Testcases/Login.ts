import {browser, by} from 'protractor'

describe("Login page ", function (){
    it("should be navigated to HomePage when login with valid account", async function(){
        
        let username_ele = browser.element(by.model("Auth.user.name"))
        let password = browser.element(by.model("Auth.user.password"))
        let userDes = browser.element(by.model("model[options.key]"))
        let login_btn = browser.element(by.xpath("//button[contains(text(),'Login')]"))
        let home_title= browser.element(by.xpath("//h1[text()='Home']"))

        await browser.waitForAngularEnabled(true)
        await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        await browser.manage().window().maximize()
        await username_ele.sendKeys("angular")
        await password.sendKeys("password")
        await userDes.sendKeys("ABC")
        await login_btn.click()
        
        await expect(home_title.isDisplayed()).toBe(true)
        await browser.sleep(5000)
    })
})