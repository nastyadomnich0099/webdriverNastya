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

    // [COMMENT] не пишем лесенкой :) команды одного уровня одна под одной.
    before(async () => {
    
        await WatchPage.open() 
        await WatchPage.selectLanguage();
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
        // [COMMENT] никогда не ищем элементы по @href. ссылки очень непостоянны, селектор легко сломать
        const watchesButtonLink = $('//a[contains(@href, "://www.ebay.com/b/Watches/260325/bn_7117208191")][@class="b-textlink b-textlink--parent"]');


        // [COMMENT] та же история) стараемся избегать поиска через .toHaveLinkContaining()
        await expect(watchesButtonLink).toHaveLinkContaining('https://www.ebay.com/b/Watches/260325/bn_7117208191');
        await expect(watchesButtonLink).toBeClickable();


    });
});