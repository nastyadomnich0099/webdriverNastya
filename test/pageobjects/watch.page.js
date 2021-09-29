import Page from './page';
import {waitAndClick} from '../utilities/helper'

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
 
    get watchesButton(){return $('//a[@class="b-textlink b-textlink--parent"][text()="Watches"]')}
    get languageBtn() {return $('#gh-eb-Geo-a-default')}
    get languageBtn2() {return $('#gh-eb-Geo-a-en')}
    get fashionLink() {return $('.hl-cat-nav__js-tab a[href *="Fashion"]')};
    get watchesLink() {return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]')};

    // [COMMENT] не ищем элементы по ссылкам
    get  url() {return $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27")]')};
    get watchesCategoryList() {return $$('//ul/li/a[@class="b-textlink b-textlink--sibling"]')};

    async getText(){

        await (await this.watchesButton).getText();
    }

    // [COMMENT] отступы и форматирование! + между методами нужна пустая строка
    async getWatchesCategotyList(){
        var watchesList =[];
       for (const element of await this.watchesCategoryList) {
           let text = await element.getText();
           await watchesList.push(text);
       }

        return watchesList;
    }
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }


    async clicklink(){
        await (await this.watchesButton).click();

    }

    // [COMMENT] название метода не информативно
    async toHaveText(){
        await expect (await this.watchesButton).toHaveText('Watches');

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    // [COMMENT] явно стоит переместить в MainPage
    open () {
        return super.open('/');
    }

    // [COMMENT] явно стоит переместить в MainPage. не имеет отношения к Watches
    async selectLanguage(){

        await (await this.languageBtn).click();
        await (await this.languageBtn2).click();
    }

    // [COMMENT] moveTo к чему? не информативное название
    async moveTo(){
        await (await this.fashionLink).moveTo();
    }

    // [COMMENT] waitFor что Displayed?
    async waitForDisplayed(){
        await (await this.watchesLink.waitForDisplayed())
    }

    async clickWatch(){
        await (await this.watchesLink).click();
    }

    async openWatchesPage(){
        await (await this.fashionLink).moveTo();
        await  browser.pause(5000);

       waitAndClick(await this.watchesLink , 5000);
         

    }



  
  
}

export default new WatchPage();
