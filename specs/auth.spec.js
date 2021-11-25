import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function (){
    beforeEach(async function (){
        await LoginPage.open();
    });

    it('Successful log in', async function (){
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('DTest@exmpl.com', 'Test1234');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();

    });

    it('Log in attempt with non-registered email', async function (){
        await LoginPage.login('DTestinvalid@exmpl.com', 'Test1234');
        await expect(LoginPage.notification).toHaveText('Email is not registered');
    });
    it('Log in attempt with invalid password', async function (){
        await LoginPage.login('DTest@exmpl.com', 'Test1234invalid');
        await expect(LoginPage.notification).toHaveText('Incorrect password');
    });

    it.only('Credentials are required', async function (){
        await LoginPage.inputUsername.setValue('test')
        await LoginPage.inputUsername.smartClear();
        await expect(LoginPage.loginError).toHaveText('Required');
        await LoginPage.inputPassword.setValue('test')
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordError).toHaveText('Required');
    });
 });