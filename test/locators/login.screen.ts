export default class LoginScreen{
    buttons = {
        logIn: '//div[contains(text(),"Log In")]',
        submit: '//button[@type="submit"]',
    };
    fields = {
        email: '//div[@data-testid="login-container"]//input[@type="text"]',
        password: '//input[@type="password"]'
    }
}