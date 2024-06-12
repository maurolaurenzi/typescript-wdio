import FilmScreen from "../locators/film.screen";
import {waitAndClick} from "../../commons/basics";
const filmScreen = new FilmScreen();
export default class FilmPage{
    async addOrRemoveFromWatchlist(){
        await waitAndClick($(filmScreen.buttons.watchlist));
    }
}