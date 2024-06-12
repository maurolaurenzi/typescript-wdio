import HomeScreen from "../locators/home.screen";
import {waitAndClick, waitAndSetValue} from "../../commons/basics";
const homeScreen = new HomeScreen();
export default class HomePage{
    async searchFilm(filmName: string, filmLink: string){
        await waitAndSetValue($(homeScreen.fields.searchBar), filmName);
        await waitAndClick($(homeScreen.dropdownOptions.film(filmLink)));
    }
    async goToWatchlist(){
        await waitAndClick($(homeScreen.buttons.watchlist));
    }
    async goToUserProfile(){
        await waitAndClick($(homeScreen.buttons.userProfile));
    }
}