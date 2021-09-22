  import Page from './page';

class SearchPage extends Page {
    get searchInput() {return $('#gh-ac') } ;
    get searchBtn() {return $('#gh-btn') };
  get category() {return $('#gh-cat option:nth-child(1)');
}


async input(value){
    await(await this.searchInput).setValue(value);
    await(await this.searchBtn).click();
}

async getText(){
    await (await this.category).getText();
}







}

export default new SearchPage();