import WatchPage from '../pageobjects/watch.page';
import {
    waitAndClick
} from '../utilities/helper'
import {
    expect as chaiExpect
} from 'chai';
import 'chai/register-should';
const chai = require('chai');




describe('Watches Page', () => {
    before(() => {
        WatchPage.open();
        WatchPage.moveTo();
        //browser.pause(1000);
        waitAndClick(WatchPage.watchesLink, 5000);


    });



    //  after(() =>{
    //      browser.url('https://www.ebay.com');
    //  });

    //  afterEach(() =>{
    //      browser.refresh();

    //  });

    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/sch/260324/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27');
        const promoBanner = $('//span[@tabindex="0"]');
        expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner title', async () => {
        const watchesButton = $('//span[text()="Наручные часы"]');

        const watchesButtonText = watchesButton.getText();


        await expect(watchesButton).toHaveText('Наручные часы');
        chaiExpect(watchesButtonText).to.not.be.empty;
    })

    it('should contain link on banner button and verify its clickable', async () => {
        const watchesButtonLink = $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27")]');



        await expect(watchesButtonLink).toHaveLinkContaining('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27');
        await expect(watchesButtonLink).toBeClickable();


    });

    it('should click on watch section', async () => {
        await WatchPage.clicklink();



        const url = $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27")]');

        chaiExpect(url).to.include('/260325/');
        await expect(browser).toHaveUrl('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27');


    });



});