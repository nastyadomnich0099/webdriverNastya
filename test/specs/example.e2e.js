import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';


// describe('My Login application', () => {
// //     it('should login with valid credentials', async () => {
// //         await LoginPage.open();

// //         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
// //         await expect(SecurePage.flashAlert).toBeExisting();
// //         await expect(SecurePage.flashAlert).toHaveTextContaining(
// //             'You logged into a secure area!');
// //     });
// // });



describe('Ebay Product Search', ()=>{
//     it('should open the main url and verify the title',async () =>{
//           browser.url('https://www.ebay.com/');
//           expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay'
//           );
//     });


//     it('should search for a product and verify the search text value',async () =>{
    
//      LoginPage.input('laptop');
//      expect(LoginPage.searchInput).toHaveValue('laptop');
      
//     });

// it('should redirect to a new page and verify the title', () =>{
//     expect(browser).toHaveTitle('laptop | eBay');
// });

// it('should update the search category', ()=>{
//     const category = $('#gh-cat option:nth-child(1)');
//     expect(category).toHaveText('PC Laptops & Netbooks');
// })


it ('should show the banner container', () => {
    browser.url('https://www.ebay.com/sch/260324/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0');
    const promoBanner = $('//span[@tabindex="0"]');
    expect(promoBanner).toBeDisplayed();
    });
    
    it('should show the banner title',() =>{
        const infoTitle = $('//span[text()="Watches"]');
        expect (infoTitle).toHaveText('Watches');
    })
    
    it('should contain link on banner button and verify its clickable', () => {
        const shopButton = $('//span[text()="Watches"]');
        expect(shopButton).toHaveLinkContaining('/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0');
        expect(shopButton).toBeClickable();
    });
    
    it('should click on watch section', async  () => {
        LoginPage.clicklink();
        expect(browser).toHaveUrl('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0');
    });

});
