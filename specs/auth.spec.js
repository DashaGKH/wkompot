import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function (){
    it('Successful log in', async function (){
        await LoginPage.open();
        await browser.url('/user/login');
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('DTest@exmpl.com', 'Test1234');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed()
        //await browser.pause(3000);

    });
 });