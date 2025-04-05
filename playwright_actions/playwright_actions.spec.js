import { test, expect } from '@playwright/test';
import * as Utils from './Utils.js';

let newUserEmail = '';

test.describe('two tests', () => {
    test.beforeEach(async ({ page }, testInfo) => {
        // await page.authenticate({
        //     username: 'guest',
        //     password: 'welcome2qauto'
        //   });
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');

        await expect(page).toHaveTitle('Hillel Qauto');
        
      });

	test('Check Login button on Home Page', async ({ page }) => {
	    await page.locator('.header_signin').click();
        await expect(page.locator('.modal-title','Log in')).toBeVisible();
	});

	test('Check Register button on Home Page', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await expect(page.locator('.modal-title','Registration')).toBeVisible();
	});

    test('Check UI on Registration Page', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await expect(page.locator('.modal-title','Registration')).toBeVisible();
        await expect(page.locator('.close')).toBeVisible();

        //Filed Name
        await expect(page.locator('//label[text()=\'Name\']')).toBeVisible();  
        await expect(page.locator('//label[text()=\'Name\']')).toHaveText('Name');
        
        const inputName =  page.locator('[id=signupName]');
        await expect(inputName).toBeVisible();
        await expect(inputName).toHaveText('');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).color;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
        
        //Filed LastName
        await expect(page.locator('//label[text()=\'Last name\']')).toBeVisible();  
        await expect(page.locator('//label[text()=\'Last name\']')).toHaveText('Last name');

        const inputLastName =  page.locator('[id=signupLastName]');
        await expect(inputLastName).toBeVisible();
        await expect(inputLastName).toHaveText('');
        expect(await inputLastName.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);

        //Filed Email
        await expect(page.locator('//label[text()=\'Email\']')).toBeVisible();  
        await expect(page.locator('//label[text()=\'Email\']')).toHaveText('Email');

        const inputEmail =  page.locator('[id=signupEmail]');
        await expect(inputEmail).toBeVisible();
        await expect(inputEmail).toHaveText('');
        expect(await inputEmail.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupEmail"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);

        //Filed Password
        await expect(page.locator('[for="signupPassword"]')).toBeVisible();  
        await expect(page.locator('[for="signupPassword"]')).toHaveText('Password');

        const inputPassword =  page.locator('[id=signupPassword]');
        await expect(inputPassword).toBeVisible();
        await expect(inputPassword).toHaveText('');
        expect(await inputPassword.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);

        //Filed ReEnterPassword
        await expect(page.locator('[for="signupRepeatPassword"]')).toBeVisible();  
        await expect(page.locator('[for="signupRepeatPassword"]')).toHaveText('Re-enter password');

        const inputReEnterPassword =  page.locator('[id=signupRepeatPassword]');
        await expect(inputReEnterPassword).toBeVisible();
        await expect(inputReEnterPassword).toHaveText('');
        expect(await inputReEnterPassword.evaluate((el) => {
        return window.getComputedStyle(el).color;
        })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);

         //button Register
         await expect(page.locator('//button[text()=\'Register\']')).toBeVisible();  
         await expect(page.locator('//button[text()=\'Register\']')).toHaveText('Register'); 
	});

    //Field Name
    test('Field Name empty fuild', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value is incorrect(numbers)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.NUMBERS);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value is incorrect(space)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.SPACE);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value is incorrect(special symbol)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.SPECIAL_SYMBOL);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value is incorrect(Not english symbol)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.KIRILYK_SYMBOL);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value is shorter than 2 ch', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.TO_SHORT_NAME);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value is longer than 20 ch', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.TO_LONG_NAME);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Name value has invalid type and length', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupName]').click();
        await page.locator('[id=signupName]').fill(Utils.ErrorData.ONE_NUMBER);

        await page.locator('[id=signupLastName]').click();

        const inputName =  page.locator('[id=signupName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    //Field Last Name
    test('Field Last Name empty fuild', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupName]').click();
        
        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value is incorrect(numbers)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.NUMBERS);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value is incorrect(space)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.SPACE);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value is incorrect(special symbol)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.SPECIAL_SYMBOL);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value is incorrect(Not english symbol)', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.KIRILYK_SYMBOL);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value is shorter than 2 ch', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.TO_SHORT_NAME);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value is longer than 20 ch', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.TO_LONG_NAME);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Last Name value has invalid type and length', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupLastName]').click();
        await page.locator('[id=signupLastName]').fill(Utils.ErrorData.ONE_NUMBER);

        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupLastName]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    //Field Email
    test('Email field is empty', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('//label[text()=\'Email\']').click();
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('//label[text()=\'Email\']');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupEmail"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Email field incorrect data', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('//label[text()=\'Email\']').click();
        await page.locator('//label[text()=\'Email\']').fill(Utils.ErrorData.WRONG_EMAIL);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('//label[text()=\'Email\']');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupEmail"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    //Field Password
    test('Password field is empty', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').click();
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Password to short', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').click();
        await page.locator('[id=signupPassword]').fill(Utils.ErrorData.TO_SHORT_PASS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Password to long', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').click();
        await page.locator('[id=signupPassword]').fill(Utils.ErrorData.TO_LONG_PASS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Password hasn\'t numbers', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').click();
        await page.locator('[id=signupPassword]').fill(Utils.ErrorData.PASS_ABSENT_NUMBERS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Password hasn\'t capital letter', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').click();
        await page.locator('[id=signupPassword]').fill(Utils.ErrorData.PASS_ABSENT_CAPITAL_LETTER);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Password hasn\'t usual letter', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').click();
        await page.locator('[id=signupPassword]').fill(Utils.ErrorData.PASS_ONLY_CAPITAL_LETTERS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    //Field Re-enter Password
    test('Re-enter Password field is empty', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupRepeatPassword]').click();
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Re-enter Password to short', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupRepeatPassword]').click();
        await page.locator('[id=signupRepeatPassword]').fill(Utils.ErrorData.TO_SHORT_PASS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Re-enter Password to long', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupRepeatPassword]').click();
        await page.locator('[id=signupRepeatPassword]').fill(Utils.ErrorData.TO_LONG_PASS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Re-enter Password hasn\'t numbers', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupRepeatPassword]').click();
        await page.locator('[id=signupRepeatPassword]').fill(Utils.ErrorData.PASS_ABSENT_NUMBERS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Re-enter Password hasn\'t capital letter', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupRepeatPassword]').click();
        await page.locator('[id=signupRepeatPassword]').fill(Utils.ErrorData.PASS_ABSENT_CAPITAL_LETTER);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Re-enter Password hasn\'t usual letter', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupRepeatPassword]').click();
        await page.locator('[id=signupRepeatPassword]').fill(Utils.ErrorData.PASS_ONLY_CAPITAL_LETTERS);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    //Check matching of password
    test('Check matching in the Re-enter Password filed', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();
        await page.locator('[id=signupPassword]').fill(Utils.CorrectData.PASSWORD);
        await page.locator('[id=signupRepeatPassword]').fill(Utils.CorrectData.PASSWORD_2);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupRepeatPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    test('Check matching in the Password filed', async ({ page }) => {
        await page.locator('.hero-descriptor_btn').click();        
        await page.locator('[id=signupRepeatPassword]').fill(Utils.CorrectData.PASSWORD);
        await page.locator('[id=signupPassword]').fill(Utils.CorrectData.PASSWORD_2);
        await page.locator('[id=signupName]').click();

        const inputName =  page.locator('[id=signupPassword]');
        expect(await inputName.evaluate((el) => {
            return window.getComputedStyle(el).border;
          })).toBe('rgb(73, 80, 87)');

        await expect(page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]')).toHaveCount(0);
	});

    //Register user and login
    test('Register new user and Login ', async ({ page }) => {
        
        await page.locator('.hero-descriptor_btn').click();
        await expect(page.locator('.modal-title','Registration')).toBeVisible();
        newUserEmail = Utils.getEmail();
        await page.locator('[id=signupName]').fill(Utils.CorrectData.NAME);
        await page.locator('[id=signupLastName]').fill(Utils.CorrectData.LAST_NAME);
        await page.locator('[id=signupEmail]').fill(newUserEmail);
        await page.locator('[id=signupPassword]').fill(Utils.CorrectData.PASSWORD);
        await page.locator('[id=signupRepeatPassword]').fill(Utils.CorrectData.PASSWORD);
        
        await page.locator('//button[text()=\'Register\']').click();  
        await expect(page.locator('//button[@id="userNavDropdown"]')).toBeVisible();
	});

    // //Login with new user
    // test('Login using new user', async ({ page }) => {
    //     await page.locator('.header_signin').click();
    //     await expect(page.locator('.modal-title','Log in')).toBeVisible();
                
    //     await page.locator('[id=signinEmail]').fill(globalThis.newUserEmail);
    //     await page.locator('[id=signinPassword]').fill(Utils.CorrectData.PASSWORD);
    //     await page.locator('//button[text()=\'Login\']').click();
        
    //     await expect(page.locator('//button[@id="userNavDropdown"]')).toBeVisible();
	// });

});