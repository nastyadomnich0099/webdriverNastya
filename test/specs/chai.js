import WatchPage from '../pageobjects/watch.page';
import MainPage from '../pageobjects/main.page';
import {
    waitAndClick
} from '../utilities/helper'
import {
    expect as chaiExpect
} from 'chai';
import 'chai/register-should';
const chai = require('chai');




describe('Watches Page', () => {

    before(async () => {
    
        await MainPage.open() 
        await MainPage.selectLanguage();
        await browser.pause(1000);
        await WatchPage.openWatchesPage();
    });



     after(() =>{
         browser.url('https://www.ebay.com/');
     });

     afterEach(() =>{
         browser.refresh();

     });
    

    it('should show the banner container', () => {
        const promoBanner = $('//span[@tabindex="0"]');
        expect(promoBanner).toBeDisplayed();
    });

    it('should contain link on banner button and verify its clickable', async () => {
        const watchesButtonLink = $('//a[@class="b-textlink b-textlink--parent"]');
        await expect(watchesButtonLink).toBeDisplayed();
        await expect(watchesButtonLink).toBeClickable();


    });
});