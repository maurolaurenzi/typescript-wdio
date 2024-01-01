import WatchlistScreen from "../locators/watchlist.screen";
import Basic from "../../commons/basics";
const watchlistScreen = new WatchlistScreen();
const basic = new Basic();
export default class WatchlistPage{
    async filmPresentInWatchlist(filmLink: string){
        try{
            await $(watchlistScreen.tiles.filmInWatchlist(filmLink)).waitForDisplayed();
            return await $(watchlistScreen.tiles.filmInWatchlist(filmLink)).isDisplayed();
        }
        catch(error){
            return false;
        }
    }
    async goToFilm(filmLink: string){
        await basic.waitAndClick($(watchlistScreen.tiles.filmInWatchlist(filmLink)));
    }
}