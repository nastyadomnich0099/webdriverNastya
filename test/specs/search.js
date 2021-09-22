import WatchPage from '../pageobjects/watch.page';
import SearchPage from '../pageobjects/search.page';
import {waitForTextChange} from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter'




describe('Ebay Product Search', () => {

    before(async () => {
        await browser.url('https://www.ebay.com/');
        await WatchPage.open();
       await WatchPage.selectLanguage();
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



    it('should open the main url and verify the title', async () => {
        await browser.url('https://www.ebay.com');
        await expect(browser).toHaveTitle(resources.homeTitle);
    });



    it('should search for a product and verify the search text value', async () => {
        allureReporter.addSeverity('Critical');

        await SearchPage.input('laptop');
        await expect(SearchPage .searchInput).toHaveValue('laptop');

    });

    it('should redirect to a new page and verify the title', async () => {
        await expect(browser).toHaveTitle(resources.laptopTitle);
    });

    it('should update the search category', async () => {
       //var category = $('#gh-cat option:nth-child(1)'); // If we commented we will get 'category is not defined '
      allureReporter.addFeature('search category');


       waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 3000);
        // browser.waitUntil(
        //     function(){
        //         return (SearchPage.category).getText() === 'PC Laptops & Netbooks'
        //     },
        //     {timeout: 3000}
        // );
       // await (waitForTextChange(category, 'PC Laptops & Netbooks', 3000));
        await expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
        
    });

});