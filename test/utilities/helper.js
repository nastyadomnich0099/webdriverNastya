export const waitForTextChange = (el, text, timeout) =>{
    browser.waitUntil(
        function(){
            return el.getText() === text;
        },
        {timeout: timeout}
    );
};

export const waitAndClick = (el, timeout)=>{
    browser.waitUntil(
        function(){
    el.waitForDisplayed({timeout});
    el.click();
         } );
};