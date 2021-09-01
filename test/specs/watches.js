import WatchPage from '../pageobjects/watch.page';
import {
    waitAndClick
} from '../utilities/helper'
import {
    expect as chaiExpect
} from 'chai';
import 'chai/register-should';



describe('Watches Page', () => {

    before(async () => {
        await browser.url('https://www.ebay.com/');
       // await WatchPage.selectLanguage();
        await browser.pause(1000);
        await WatchPage.openWatchesPage();

        //await WatchPage.input("watches");
    });



     after(() =>{
         browser.url('https://www.ebay.com/');
     });

     afterEach(() =>{
         browser.refresh();

     });

    it('should verify the watches categoty list', async () => {
        var watchesList = await WatchPage.getWatchesCategotyList();
        chaiExpect(watchesList).to.deep.equal([
            'Watches',
            'Parts, Tools & Guides',
            'Watch Accessories',
            'Watches Mixed Lots',
        ]);
    });

    it('should show the banner container', () => {
        const promoBanner = $('//span[@tabindex="0"]');
        expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner title', async () => {
        await WatchPage.toHaveText();

    });

    it('should contain link on banner button and verify its clickable', async () => {
        const watchesButtonLink = $('//a[contains(@href, "://www.ebay.com/b/Watches/260325/bn_7117208191")][@class="b-textlink b-textlink--sibling"]');
        await expect(watchesButtonLink).toHaveLinkContaining('https://www.ebay.com/b/Watches/260325/bn_7117208191');
        await expect(watchesButtonLink).toBeClickable();


    });

    it('should click on watch section', async () => {
        await WatchPage.clicklink(); 
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Watches/260325/bn_7117208191');


    });



});