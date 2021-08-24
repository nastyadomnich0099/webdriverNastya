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
        await WatchPage.selectLanguage();

      

        await browser.pause(5000);
        await WatchPage.openWatchesPage();



        // await WatchPage.fashionLink.moveTo();
        // await browser.pause(5000);
        // await WatchPage.watchesLink.click();
        // await browser.pause(5000);


        



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
            'Watch Accessories',
            'Parts, Tools & Guides',
            'Watches Mixed Lots',
        ]);
    });

    // it('should show the banner container', () => {
    //     const promoBanner = $('//span[@tabindex="0"]');
    //     expect(promoBanner).toBeDisplayed();
    // });

    // it('should show the banner title', async () => {
    //     const watchesButton = $('//span[text()="Watches"]');
    //     await expect(watchesButton).toHaveText('Watches');

    // })

    // it('should contain link on banner button and verify its clickable', async () => {
    //     const watchesButtonLink = $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=watches")]');
    //     await expect(watchesButtonLink).toHaveLinkContaining('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=watches');
    //     await expect(watchesButtonLink).toBeClickable();


    // });

    // it('should click on watch section', async () => {
    //     await WatchPage.clicklink();



    //     //const url = $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27")]');

    //     // await expect(url).to.include('/260325/');
    //     await expect(browser).toHaveUrl('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=watches');


    // });



});