import WatchPage from '../pageobjects/watch.page';
import MainPage from '../pageobjects/main.page';
import {
    waitAndClick
} from '../utilities/helper'
import {
    expect as chaiExpect
} from 'chai';
import 'chai/register-should';
import resources from '../resources';




describe('Watches Page', () => {

    before(async () => {
        await MainPage.open();
        await browser.pause(1000);
        await MainPage.selectLanguage();
        await WatchPage.openWatchesPage();
    });



    after(() => {
        browser.url('https://www.ebay.com/');
    });

    afterEach(() => {
        browser.refresh();

    });

    it('should verify the watches categoty list', async () => {
        var watchesList = await WatchPage.getWatchesCategotyList();
        chaiExpect(watchesList).to.deep.equal(resources.wathesCategoryList);
    });

    it('should show the banner container', () => {

        expect(WatchPage).toBeDisplayed();
    });

    it('should show the banner title', async () => {
        await WatchPage.toHaveWatchText();

    });

    it('should contain link on banner button and verify its clickable', async () => {

        await WatchPage.verifyWatchesCategLinkDisplayed('https://www.ebay.com/b/Watches/260325/bn_7117208191');
        await WatchPage.verifyWatchesCategLinkClickable();
    });

    it('should click on watch section', async () => {
        await WatchPage.clicklink();
        await WatchPage.haveWatchBanner();

    });



});