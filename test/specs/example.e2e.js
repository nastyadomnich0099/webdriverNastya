import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';


describe('Watches Page', ()=>{
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
    const watchesButton = $('//span[text()="Watches"]');
    expect(watchesButton).toHaveLinkContaining('/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0');
    expect(watchesButton).toBeClickable();
});

it('should click on watch section', async  () => {
    LoginPage.clicklink();
    expect(browser).toHaveUrl('https://www.ebay.com/sch/260325/i.html?_from=R40&_nkw=laptop&LH_TitleDesc=0');
});

});