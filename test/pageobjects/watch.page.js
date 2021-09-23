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

    get  url() {return $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27")]')};
    get watchesCategoryList() {return $$('//ul/li/a[@class="b-textlink b-textlink--sibling"]')};
  


 

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    // async getWatchesCategotyList(){
    //     console.log(await (await this.watchesCategoryList).getText()); 

       


    // }

    async getText(){

        await (await this.watchesButton).getText();
    }

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

    async toHaveText(){
        await expect (await this.watchesButton).toHaveText('Watches');

    }

    // async getText(){
    //     await (await this.watchesButton).getText();
    //     await expect (await this.watchesButton).toHaveText('Watches');
    // }




    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }

    async selectLanguage(){

        await (await this.languageBtn).click();
        await (await this.languageBtn2).click();

       // await (await this.languageBtn).selectByVisibleText("English");
        

    }

    async moveTo(){
        await (await this.fashionLink).moveTo();
    }

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
