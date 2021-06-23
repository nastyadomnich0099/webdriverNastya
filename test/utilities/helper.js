export const waitForTextChange = (el, text, timeout) =>{
    browser.waitUntil(
        function(){
            return category.getText() === text;
        },
        {timeout}
    );
};

export const waitAndClick = (el, timeout)=>{
    browser.waitUntil(
        function(){
    el.waitForDisplayed({timeout});
    el.click();
        });
};