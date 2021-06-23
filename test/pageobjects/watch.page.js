import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WatchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get searchInput() {return $('#gh-ac') } 
    get searchBtn() {return $('#gh-btn') }
    get watchesButton(){return $('//span[text()="Наручные часы"]')}
    get languageBtn() {return $('#gh-eb-Geo-a-default')}
    get languageBtn2() {return $('#gh-eb-Geo-a-en')}
    get fashionLink() {return $$('.hl-cat-nav__js-tab a[href *="Fashion"]')[0]};
    get watchesLink() {return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    async input(value){
        await(await this.searchInput).setValue(value);
        await(await this.searchBtn).click();
    }

    async clicklink(){
        await (await this.watchesButton).click();

    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/watches');
    }

    async selectLanguage(){

        await (await this.languageBtn).click();

        await (await this.languageBtn).selectByVisibleText('English');
        

    }

    async moveTo(){
        await (await this.watchesLink).click();
    }

    async waitForDisplayed(){
        await (await this.watchesLink.waitForDisplayed())
    }

    async clickWatch(){
        await (await this.watchesLink.click())
    }



  
  
}

export default new WatchPage();
