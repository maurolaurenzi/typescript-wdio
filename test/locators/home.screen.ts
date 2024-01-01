export default class HomeScreen{
    buttons = {
        watchlist: '//div[contains(@class,"css")]/a[text()="Watchlist"]',
        userProfile: '//div[contains(@class,"css")]/a[contains(@href,"users")]'
    };
    fields = {
        searchBar: '//input[@name="query" and @version="desktop"]'
    };
    dropdownOptions = {
        film: (link: string) => `//a[@href="${link}"]`
    };
}