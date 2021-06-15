// import LoginPage from  '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';


// // describe('My Login application', () => {
// //     it('should login with valid credentials', async () => {
// //         await LoginPage.open();

// //         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
// //         await expect(SecurePage.flashAlert).toBeExisting();
// //         await expect(SecurePage.flashAlert).toHaveTextContaining(
// //             'You logged into a secure area!');
// //     });
// // });



// describe('Ebay Product Search', ()=>{
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

// });