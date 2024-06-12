import WatchlistScreen from "../locators/watchlist.screen";
import {waitAndClick} from "../../commons/basics";
const watchlistScreen = new WatchlistScreen();
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
        await waitAndClick($(watchlistScreen.tiles.filmInWatchlist(filmLink)));
    }
}