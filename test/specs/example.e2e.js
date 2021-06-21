import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';



describe('Watches Page', ()=>{
   

it ('should show the banner container', () => {
browser.url('https://www.ebay.com/sch/260324/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27');
const promoBanner = $('//span[@tabindex="0"]');
expect(promoBanner).toBeDisplayed();
});

it('should show the banner title', async () =>{
    const watchesButton = $('//span[text()="Наручные часы"]');
    await expect (watchesButton).toHaveText('Наручные часы');
})

it('should contain link on banner button and verify its clickable', async () => {
    const watchesButton = $('//a[contains(@href, "://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27")]');
    await expect(watchesButton).toHaveLinkContaining('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27');
    await expect(watchesButton).toBeClickable();
});

it('should click on watch section', async  () => {
    await LoginPage.clicklink();
    await expect(browser).toHaveUrl('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0%27');


});

});