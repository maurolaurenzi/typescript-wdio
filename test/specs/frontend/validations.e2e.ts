import LoginPage from "../../pages/login.page";
const loginPage = new LoginPage();
describe("Basic user operations", ()=>{
    before(async()=>{
        await browser.url("https://mubi.com/");
        await loginPage.logIn();
    });
    
    it("first test", async()=>{
        await browser.pause(3000);
    });
});
