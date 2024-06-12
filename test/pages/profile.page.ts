import ProfileScreen from "../locators/profile.screen";
import {waitAndClick, waitAndSetValue} from "../../commons/basics";
const profileScreen = new ProfileScreen();
export default class ProfilePage{
    async createList(title: string, description: string, films: [string]){
        await waitAndClick($(profileScreen.buttons.lists));
        await waitAndClick($(profileScreen.buttons.createList));
        await waitAndSetValue($(profileScreen.fields.listTitle), title);
        await waitAndSetValue($(profileScreen.fields.listDescription), description);
        for(const film of films){
            await waitAndSetValue($(profileScreen.fields.addFilm), film);
            await waitAndClick($(profileScreen.dropdownOptions.film(film)));
        }
        await waitAndClick($(profileScreen.buttons.save));
    }
    async listPresentInProfile(title: string){
        await waitAndClick($(profileScreen.buttons.lists));
        try{
            await $(profileScreen.tiles.list(title)).waitForDisplayed();
            return await $(profileScreen.tiles.list(title)).isDisplayed();
        }
        catch(error){
            return false;
        }
    }
    async filmPresentInList(listTitle: string, filmLink: string){
        await waitAndClick($(profileScreen.tiles.list(listTitle)));
        try{
            await $(profileScreen.tiles.filmIList(filmLink)).waitForDisplayed();
            return await $(profileScreen.tiles.filmIList(filmLink)).isDisplayed();
        }
        catch(error){
            return false;
        }
    }
    async deleteList(listTitle: string){
        await waitAndClick($(profileScreen.buttons.editList(listTitle)));
        await waitAndClick($(profileScreen.buttons.deleteList));
        await waitAndClick($(profileScreen.buttons.confirmDeletion));
        await waitAndClick($(profileScreen.buttons.goToNowShowing));
    }
}