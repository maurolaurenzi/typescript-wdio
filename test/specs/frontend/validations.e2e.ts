import LoginPage from "../../pages/login.page";
import HomePage from "../../pages/home.page";
import FilmPage from "../../pages/film.page";
import WatchlistPage from "../../pages/watchlist.page";
import ProfilePage from "../../pages/profile.page";
import testData from "../../data/testData.json";
const loginPage = new LoginPage();
const homePage = new HomePage();
const filmPage = new FilmPage();
const watchlistPage = new WatchlistPage();
const profilePage = new ProfilePage();
describe("Basic user operations in Mubi website", ()=>{
    before(async()=>{
        await browser.url("https://mubi.com/");
        await loginPage.logIn();
    });

    it("should add a film to the watchlist and then remove it", async()=>{
        await homePage.searchFilm(testData["2001ASpaceOdyssey"], testData["2001ASpaceOdysseyLink"]);
        await filmPage.addOrRemoveFromWatchlist();
        await homePage.goToWatchlist();
        const filmWasAddedToWatchlist = await watchlistPage.filmPresentInWatchlist(testData["2001ASpaceOdysseyLink"]);
        expect(filmWasAddedToWatchlist).toBe(true);
        await watchlistPage.goToFilm(testData["2001ASpaceOdysseyLink"]);
        await filmPage.addOrRemoveFromWatchlist();
        await homePage.goToWatchlist();
        await browser.refresh();
        const filmStillInWatchlist = await watchlistPage.filmPresentInWatchlist(testData["2001ASpaceOdysseyLink"]);
        expect(filmStillInWatchlist).toBe(false);
    });

    it("should create a new list and then delete it", async()=>{
        await homePage.goToUserProfile();
        await profilePage.createList(testData.title, testData.description, [testData.scottPilgrimVsTheWorld]);
        await homePage.goToUserProfile();
        const listWasCreated = await profilePage.listPresentInProfile(testData.title);
        expect(listWasCreated).toBe(true);
        const filmPresentInList = await profilePage.filmPresentInList(testData.title,testData.scottPilgrimLink);
        expect(filmPresentInList).toBe(true);
        await profilePage.deleteList(testData.title);
        await homePage.goToUserProfile();
        const listPresentInProfile = await profilePage.listPresentInProfile(testData.title);
        expect(listPresentInProfile).toBe(false);
    });
});
