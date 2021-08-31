import WatchPage from '../pageobjects/watch.page';
import {
    waitForTextChange
} from '../utilities/helper'




describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', async () => {
        await browser.url('https://www.ebay.com/');
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });



    it('should search for a product and verify the search text value', async () => {

        await WatchPage.input('laptop');
        await expect(WatchPage.searchInput).toHaveValue('laptop');

    });

    it('should redirect to a new page and verify the title', async () => {
        await expect(browser).toHaveTitle('laptop | eBay');
    });

    it('should update the search category', async () => {
        const category = $('#gh-cat option:nth-child(1)');
        await (waitForTextChange(category, 'PC Laptops & Netbooks', 3000));
        await expect(category).toHaveText('PC Laptops & Netbooks');
    });

});