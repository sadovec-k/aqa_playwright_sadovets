import { test, expect } from '@playwright/test';
import * as Utils from './utils/Utils.js';
import {HomePage} from './pages/HomePage.js';
import {Login} from './pages/LoginPage.js';
import {RegistrationPage} from './pages/RegistrationPage.js';
import {ProfilePage} from './pages/ProfilePage.js';

let newUserEmail = '';

test.describe('two tests', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        // await page.authenticate({
        //     username: 'guest',
        //     password: 'welcome2qauto'
        //   });
        await page.goto('/');

        await expect(page).toHaveTitle('Hillel Qauto');
        
      });

    test('Check Login button on Home Page', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new Login(page); 
        await homePage.loginButton.click();
        await expect(loginPage.title).toBeVisible();
    });

    test('Check Register button on Home Page', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page); 
        await homePage.registerButton.click();
        await expect(registrationPage.title).toBeVisible();
    });

    test('Check UI on Registration Page', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);

        await homePage.registerButton.click();
        await expect(registrationPage.title).toBeVisible();
        await expect(registrationPage.close).toBeVisible();

        //Filed Name
        await expect(registrationPage.lableName).toBeVisible();  
        await expect(registrationPage.lableName).toHaveText('Name');
        
        await expect(registrationPage.inputName).toBeVisible();
        await expect(registrationPage.inputName).toHaveText('');
        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).color;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
        
        //Filed LastName
        await expect(registrationPage.lableLastName).toBeVisible();  
        await expect(registrationPage.lableLastName).toHaveText('Last name');

        await expect(registrationPage.inputLastName).toBeVisible();
        await expect(registrationPage.inputLastName).toHaveText('');
        expect(await registrationPage.inputLastName.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);

        //Filed Email
        await expect(registrationPage.lableEmail).toBeVisible();  
        await expect(registrationPage.lableEmail).toHaveText('Email');

        await expect(registrationPage.inputEmail).toBeVisible();
        await expect(registrationPage.inputEmail).toHaveText('');
        expect(await registrationPage.inputEmail.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertEmail).toHaveCount(0);

        //Filed Password
        await expect(registrationPage.lablePassword).toBeVisible();  
        await expect(registrationPage.lablePassword).toHaveText('Password');

        await expect(registrationPage.inputPassword).toBeVisible();
        await expect(registrationPage.inputPassword).toHaveText('');
        expect(await registrationPage.inputPassword.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);

        //Filed ReEnterPassword
        await expect(registrationPage.lableReEnterPassword).toBeVisible();  
        await expect(registrationPage.lableReEnterPassword).toHaveText('Re-enter password');

        await expect(registrationPage.inputReEnterPassword).toBeVisible();
        await expect(registrationPage.inputReEnterPassword).toHaveText('');
        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertReEnterPassword).toHaveCount(0);

         //button Register
         await expect(registrationPage.register).toBeVisible();  
         await expect(registrationPage.register).toHaveText('Register'); 
    });

    //Field Name
    test('Field Name empty fuild', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);

        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value is incorrect(numbers)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);

        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.NUMBERS);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value is incorrect(space)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);

        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.SPACE);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value is incorrect(special symbol)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.SPECIAL_SYMBOL);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value is incorrect(Not english symbol)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.KIRILYK_SYMBOL);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value is shorter than 2 ch', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.TO_SHORT_NAME);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value is longer than 20 ch', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.TO_LONG_NAME);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    test('Name value has invalid type and length', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputName.click();
        await registrationPage.inputName.fill(Utils.ErrorData.ONE_NUMBER);

        await registrationPage.inputLastName.click();

        expect(await registrationPage.inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertName).toHaveCount(0);
    });

    //Field Last Name
    test('Field Last Name empty fuild', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputName.click();
        
        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value is incorrect(numbers)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.NUMBERS);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value is incorrect(space)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.SPACE);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value is incorrect(special symbol)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.SPECIAL_SYMBOL);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value is incorrect(Not english symbol)', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.KIRILYK_SYMBOL);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value is shorter than 2 ch', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.TO_SHORT_NAME);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value is longer than 20 ch', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.TO_LONG_NAME);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    test('Last Name value has invalid type and length', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputLastName.click();
        await registrationPage.inputLastName.fill(Utils.ErrorData.ONE_NUMBER);

        await registrationPage.inputName.click();

        expect(await registrationPage.inputLastName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertLastName).toHaveCount(0);
    });

    //Field Email
    test('Email field is empty', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputEmail.click();
        await registrationPage.inputName.click();

        expect(await registrationPage.inputEmail.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertEmail).toHaveCount(0);
    });

    test('Email field incorrect data', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputEmail.click();
        await registrationPage.inputEmail.fill(Utils.ErrorData.WRONG_EMAIL);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputEmail.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertEmail).toHaveCount(0);
    });

    //Field Password
    test('Password field is empty', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.click();
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);
    });

    test('Password to short', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.click();
        await registrationPage.inputPassword.fill(Utils.ErrorData.TO_SHORT_PASS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);
    });

    test('Password to long', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.click();
        await registrationPage.inputPassword.fill(Utils.ErrorData.TO_LONG_PASS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);
    });

    test('Password hasn\'t numbers', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.click();
        await registrationPage.inputPassword.fill(Utils.ErrorData.PASS_ABSENT_NUMBERS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);
    });

    test('Password hasn\'t capital letter', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.click();
        await registrationPage.inputPassword.fill(Utils.ErrorData.PASS_ABSENT_CAPITAL_LETTER);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);
    });

    test('Password hasn\'t usual letter', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.click();
        await registrationPage.inputPassword.fill(Utils.ErrorData.PASS_ONLY_CAPITAL_LETTERS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertPassword).toHaveCount(0);
    });

    //Field Re-enter Password
    test('Re-enter Password field is empty', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputReEnterPassword.click();
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.inputReEnterPassword).toHaveCount(0);
    });

    test('Re-enter Password to short', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputReEnterPassword.click();
        await registrationPage.inputReEnterPassword.fill(Utils.ErrorData.TO_SHORT_PASS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.inputReEnterPassword).toHaveCount(0);
    });

    test('Re-enter Password to long', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputReEnterPassword.click();
        await registrationPage.inputReEnterPassword.fill(Utils.ErrorData.TO_LONG_PASS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertReEnterPassword).toHaveCount(0);
    });

    test('Re-enter Password hasn\'t numbers', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputReEnterPassword.click();
        await registrationPage.inputReEnterPassword.fill(Utils.ErrorData.PASS_ABSENT_NUMBERS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertReEnterPassword).toHaveCount(0);
    });

    test('Re-enter Password hasn\'t capital letter', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputReEnterPassword.click();
        await registrationPage.inputReEnterPassword.fill(Utils.ErrorData.PASS_ABSENT_CAPITAL_LETTER);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertReEnterPassword).toHaveCount(0);
    });

    test('Re-enter Password hasn\'t usual letter', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputReEnterPassword.click();
        await registrationPage.inputReEnterPassword.fill(Utils.ErrorData.PASS_ONLY_CAPITAL_LETTERS);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertReEnterPassword).toHaveCount(0);
    });

    //Check matching of password
    test('Check matching in the Re-enter Password filed', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();
        await registrationPage.inputPassword.fill(Utils.CorrectData.PASSWORD);
        await registrationPage.inputReEnterPassword.fill(Utils.CorrectData.PASSWORD_2);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputReEnterPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.alertReEnterPassword).toHaveCount(0);
    });

    test('Check matching in the Password filed', async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        
        await homePage.registerButton.click();        
        await registrationPage.inputReEnterPassword.fill(Utils.CorrectData.PASSWORD);
        await registrationPage.inputPassword.fill(Utils.CorrectData.PASSWORD_2);
        await registrationPage.inputName.click();

        expect(await registrationPage.inputPassword.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(registrationPage.inputPassword).toHaveCount(0);
    });

    //Register user and login
    test('Register new user and Login ', async ({ page }) => {
        
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        const profilePage = new ProfilePage(page);
        
        await homePage.registerButton.click();
        await expect(registrationPage.title).toBeVisible();
        newUserEmail = Utils.getEmail();
        await registrationPage.inputName.fill(Utils.CorrectData.NAME);
        await registrationPage.inputLastName.fill(Utils.CorrectData.LAST_NAME);
        await registrationPage.inputEmail.fill(newUserEmail);
        await registrationPage.inputPassword.fill(Utils.CorrectData.PASSWORD);
        await registrationPage.inputReEnterPassword.fill(Utils.CorrectData.PASSWORD);
        
        await registrationPage.register.click();  
        await expect(profilePage.userNavigationButton).toBeVisible();
    });
});