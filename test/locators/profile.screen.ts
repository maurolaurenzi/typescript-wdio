export default class ProfileScreen{
    buttons = {
        lists: '//div[contains(text(),"Lists")]',
        createList: '//div[contains(text(),"Create a list")]',
        save: '//button[text()="Save"]',
        editList: (listTitle: string) => `//a[contains(@href,"en/lists/${listTitle}/edit")]`,
        deleteList: '//button[text()="Delete list"]',
        confirmDeletion: '//button[text()="Delete"]',
        goToNowShowing: '//a[contains(text(),"Go to now showing")]'
    };
    fields = {
        listTitle: '//textarea[@placeholder="Title"]',
        listDescription: '//textarea[@placeholder="Write your description here..."]',
        addFilm: '//input[@placeholder="Add a film..."]'
    };
    dropdownOptions = {
        film: (name: string) => `//span[text()="${name}"]`
    };
    tiles = {
        list: (listTitle: string) => `//h2[text()="${listTitle}"]`,
        filmIList: (link: string) => `//a[@href="${link}"]`
    }
}