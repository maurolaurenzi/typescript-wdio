import FilmScreen from "../locators/film.screen";
import Basic from "../../commons/basics";
const filmScreen = new FilmScreen();
const basic = new Basic();
export default class FilmPage{
    async addOrRemoveFromWatchlist(){
        await basic.waitAndClick($(filmScreen.buttons.watchlist));
    }
}