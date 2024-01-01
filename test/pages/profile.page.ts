import ProfileScreen from "../locators/profile.screen";
import Basic from "../../commons/basics";
const profileScreen = new ProfileScreen();
const basic = new Basic();
export default class ProfilePage{
    async createList(title: string, description: string, films: [string]){
        await basic.waitAndClick($(profileScreen.buttons.lists));
        await basic.waitAndClick($(profileScreen.buttons.createList));
        await basic.waitAndSetValue($(profileScreen.fields.listTitle), title);
        await basic.waitAndSetValue($(profileScreen.fields.listDescription), description);
        for(const film of films){
            await basic.waitAndSetValue($(profileScreen.fields.addFilm), film);
            await basic.waitAndClick($(profileScreen.dropdownOptions.film(film)));
        }
        await basic.waitAndClick($(profileScreen.buttons.save));
    }
    async listPresentInProfile(title: string){
        await basic.waitAndClick($(profileScreen.buttons.lists));
        try{
            await $(profileScreen.tiles.list(title)).waitForDisplayed();
            return await $(profileScreen.tiles.list(title)).isDisplayed();
        }
        catch(error){
            return false;
        }
    }
    async filmPresentInList(listTitle: string, filmLink: string){
        await basic.waitAndClick($(profileScreen.tiles.list(listTitle)));
        try{
            await $(profileScreen.tiles.filmIList(filmLink)).waitForDisplayed();
            return await $(profileScreen.tiles.filmIList(filmLink)).isDisplayed();
        }
        catch(error){
            return false;
        }
    }
    async deleteList(listTitle: string){
        await basic.waitAndClick($(profileScreen.buttons.editList(listTitle)));
        await basic.waitAndClick($(profileScreen.buttons.deleteList));
        await basic.waitAndClick($(profileScreen.buttons.confirmDeletion));
        await basic.waitAndClick($(profileScreen.buttons.goToNowShowing));
    }
}