
export async function waitAndClick(element){
    await element.waitForDisplayed();
    await element.click();
}

export async function waitAndSetValue(inputElement, value: string){
    await inputElement.waitForDisplayed();
    await inputElement.setValue(value);
}