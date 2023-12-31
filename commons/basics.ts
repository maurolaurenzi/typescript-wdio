export default class Basic{
    async waitAndClick(element){
        await element.waitForDisplayed();
        await element.click();
    }

    async waitAndSetValue(inputElement, value: string){
        await inputElement.waitForDisplayed();
        await inputElement.setValue(value);
    }
}