import {browser, by} from 'protractor'
//suite
describe("Login page ", function (){
    // testcase
    it("should be navigated to HomePage when login with valid account", async function(){
        // define element
        let username_ele = browser.element(by.id("username"))
        let password = browser.element(by.id("password"))
        let userDes = browser.element(by.id("formly_1_input_username_0"))
        let login_btn = browser.element(by.xpath("//button[contains(text(),'Login')]"))
        let home_title= browser.element(by.xpath("//h1[text()='Home']"))
        // automate each step
        await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        await browser.manage().window().maximize()
        await username_ele.sendKeys("angular")
        await password.sendKeys("password")
        await userDes.sendKeys("ABC")
        await login_btn.click()
        //verify result
        await expect(home_title.isDisplayed()).toBe(true)
        await browser.sleep(5000)
    })
})