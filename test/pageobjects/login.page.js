import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get searchInput() {return $('#gh-ac') } 
    get searchBtn() {return $('#gh-btn') }
    get shopButton(){return $('//span[text()="Watches"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    async input(value){
        await(await this.searchInput).setValue(value);
        await(await this.searchBtn).click();
    }

    async clicklink(){
        await (await this.shopButton).click();

    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

  
  
}

export default new LoginPage();
