import {browser, by} from 'protractor'
//suite
describe("Login page ", function (){
    // testcase
    it("should be navigated to HomePage when login with valid account", async function(){
        // automate each step
        await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        await browser.manage().window().maximize()
        await browser.sleep(5000)
       
        //verify result
       
    })
})