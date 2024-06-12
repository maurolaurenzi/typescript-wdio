import LoginScreen from "../locators/login.screen";
import {waitAndClick, waitAndSetValue} from "../../commons/basics";
require('dotenv').config();
const loginScreen = new LoginScreen();
export default class LoginPage{
    async logIn(){
        await waitAndClick($(loginScreen.buttons.logIn));
        await waitAndSetValue($(loginScreen.fields.email), process.env.EMAIL);
        await waitAndClick($(loginScreen.buttons.submit));
        await waitAndSetValue($(loginScreen.fields.password), process.env.PASSWORD);
        await waitAndClick($(loginScreen.buttons.submit));
    }
}