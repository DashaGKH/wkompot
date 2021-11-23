describe('Auth', function (){
    it('Successful log in', async function (){
        await browser.url('/user/login');
        await expect($('.login-form-button'))
            .toBeDisabled()
        await $('[qa-id="email"]')
            .setValue('DTest@exmpl.com');
        await $('[qa-id="password"]')
            .setValue('Test1234');
        await expect($('.login-form-button'))
            .toBeEnabled()
        await $('.login-form-button')
            .click();
        await expect($("img[alt=\"avatarIcon\"]"))
            .toBeDisplayed()
        //await browser.pause(3000);

    });
 });