import LoginScreen from "../locators/login.screen";
import Basic from "../../commons/basics";
require('dotenv').config();
const loginScreen = new LoginScreen();
const basic = new Basic();
export default class LoginPage{
    async logIn(){
        await basic.waitAndClick($(loginScreen.buttons.logIn));
        await basic.waitAndSetValue($(loginScreen.fields.email), process.env.EMAIL);
        await basic.waitAndClick($(loginScreen.buttons.submit));
        await basic.waitAndSetValue($(loginScreen.fields.password), process.env.PASSWORD);
        await basic.waitAndClick($(loginScreen.buttons.submit));
        await browser.pause(3000);
    }
}