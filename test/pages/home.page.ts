import HomeScreen from "../locators/home.screen";
import Basic from "../../commons/basics";
const homeScreen = new HomeScreen();
const basic = new Basic();
export default class HomePage{
    async searchFilm(filmName: string, filmLink: string){
        await basic.waitAndSetValue($(homeScreen.fields.searchBar), filmName);
        await basic.waitAndClick($(homeScreen.dropdownOptions.film(filmLink)));
    }
    async goToWatchlist(){
        await basic.waitAndClick($(homeScreen.buttons.watchlist));
    }
    async goToUserProfile(){
        await basic.waitAndClick($(homeScreen.buttons.userProfile));
    }
}