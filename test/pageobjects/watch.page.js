import Page from './page';
import {
    waitAndClick
} from '../utilities/helper'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WatchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username')
    }
    get inputPassword() {
        return $('#password')
    }
    get btnSubmit() {
        return $('button[type="submit"]')
    }

    get watchesButton() {
        return $('//a[@class="b-textlink b-textlink--parent"][text()="Watches"]')
    }

    get fashionLink() {
        return $('.hl-cat-nav__js-tab a[href *="Fashion"]')
    };
    get watchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]')
    };

    get watchesCategoryList() {
        return $$('//ul/li/a[@class="b-textlink b-textlink--sibling"]')
    };

    get promoBanner() {
        return $('//div[@class="title-banner__right-image"]')
    };

    get watchesButtonLink() {
        return $('//a[contains(@href, "://www.ebay.com/b/Watches/260325/bn_7117208191")][@class="b-textlink b-textlink--parent"]')
    };

    get watchBanner() {
        return $('//span [@class ="b-pageheader__text"]')
    };

    async getText() {

        await (await this.watchesButton).getText();
    }


    async getWatchesCategotyList() {
        var watchesList = [];
        for (const element of await this.watchesCategoryList) {
            let text = await element.getText();
            await watchesList.push(text);
        }

        return watchesList;
    }
    async login(username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }


    async clicklink() {
        await (await this.watchesButton).click();

    }

    async haveWatchBanner() {
        await (await this.watchBanner).waitForDisplayed()
    }


    async toHaveWatchText() {
        await expect(await this.watchesButton).toHaveText('Watches');

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    async clickWatch() {
        await (await this.watchesLink).click();
    }

    async openWatchesPage() {
        await (await this.fashionLink).moveTo();
        await browser.pause(5000);

        waitAndClick(await this.watchesLink, 5000);
    }

    async toBeDisplayed() {
        await (await this.promoBanner).toBeDisplayed()
    }

    async verifyWatchesCategLinkDisplayed(linkText) {
        await expect (await this.watchesButtonLink).toHaveLinkContaining(linkText)
    }

    async verifyWatchesCategLinkClickable() {
        await expect (await this.watchesButtonLink).toBeClickable()
    }

}

export default new WatchPage();