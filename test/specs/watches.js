import WatchPage from '../pageobjects/watch.page';
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
      await WatchPage.open();
        await browser.pause(1000);
        await WatchPage.openWatchesPage();
    });



     after(() =>{
         browser.url('https://www.ebay.com/');
     });

     afterEach(() =>{
         browser.refresh();

     });

    it('should verify the watches categoty list', async () => {
        var watchesList = await WatchPage.getWatchesCategotyList();
        chaiExpect(watchesList).to.deep.equal(resources.wathesCategoryList);
    });

    it('should show the banner container', () => {
        // [COMMENT] если уже есть пейдж-обджект, зачем искать элементы в классе тестов?
        const promoBanner = $('//div[@class="title-banner__right-image"]');
        expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner title', async () => {
        await WatchPage.toHaveText();

    });
    

    it('should contain link on banner button and verify its clickable', async () => {
        // [COMMENT] не ищем элементы по ссылкам
        const watchesButtonLink = $('//a[contains(@href, "://www.ebay.com/b/Watches/260325/bn_7117208191")][@class="b-textlink b-textlink--parent"]');
        // [COMMENT] не ищем элементы по ссылкам
        await expect(watchesButtonLink).toHaveLinkContaining('https://www.ebay.com/b/Watches/260325/bn_7117208191');
        await expect(watchesButtonLink).toBeClickable();
    });

    it('should click on watch section', async () => {
        await WatchPage.clicklink(); 
        // [COMMENT] тут лучше проверить открытие ссылки через поиск некого характерного элемента на открывшейся странице. текст ссылки легко может измениться, и тест упадет
        await expect(browser).toHaveUrl('https://www.ebay.com/b/Watches/260325/bn_7117208191');


    });



});