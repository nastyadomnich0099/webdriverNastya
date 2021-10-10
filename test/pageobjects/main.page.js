import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {

    get languageBtn() {
        return $('#gh-eb-Geo-a-default')
    }
    get languageBtn2() {
        return $('#gh-eb-Geo-a-en')
    }





 open() {
    return super.open('/');
}


async selectLanguage() {

    await (await this.languageBtn).click();
    await (await this.languageBtn2).click();
}

}

export default new MainPage();