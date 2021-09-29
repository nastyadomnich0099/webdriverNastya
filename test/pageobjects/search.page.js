  import Page from './page';

class SearchPage extends Page {
  // [COMMENT] отступы
    get searchInput() {return $('#gh-ac') } ;
    get searchBtn() {return $('#gh-btn') };
  get category() {return $('#gh-cat option:nth-child(1)');
}

// [COMMENT] название метода не совсем отражает реальность. по названию мы должны только ввести текст, а по факту выполняется поиск
async input(value){
    await(await this.searchInput).setValue(value);
    await(await this.searchBtn).click();
}

// [COMMENT] getText чего? название метода не дает достаточно информации
async getText(){
    await (await this.category).getText();
}







}

export default new SearchPage();