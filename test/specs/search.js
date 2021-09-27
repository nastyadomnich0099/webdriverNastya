import WatchPage from '../pageobjects/watch.page';
import SearchPage from '../pageobjects/search.page';
import {waitForTextChange} from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter'




describe('Ebay Product Search', () => {

    before(async () => {
        await browser.url('https://www.ebay.com/');
        // [COMMENT] здесь получается, что метод WatchesPage.Open() открывает не WatchesPage(). Это нарушает логику пейдж-обджектов. такие методы можно вынести в условный MainPage объект
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



    it('should open the main url and verify the title', async () => {
        // [COMMENT] тут мы делаем лишнее действие. ebay уже открылся благодаря before()
        await browser.url('https://www.ebay.com');
        await expect(browser).toHaveTitle(resources.homeTitle);
    });



    it('should search for a product and verify the search text value', async () => {
        allureReporter.addSeverity('Critical');

        await SearchPage.input('laptop');
        // [COMMENT] зачем пробел после SearchPage?)
        await expect(SearchPage .searchInput).toHaveValue('laptop');

    });

    it('should redirect to a new page and verify the title', async () => {
        await expect(browser).toHaveTitle(resources.laptopTitle);
    });

    // [COMMENT] отступы
    it('should update the search category', async () => {
      allureReporter.addFeature('search category');


       waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 3000);
        await expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
        
    });

});