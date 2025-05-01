import { test, expect} from '@playwright/test';
const { request } = require('playwright');
const { chromium } = require('playwright');
import {HomePage} from './pages/HomePage.js';
import { LoginPage } from './pages/LoginPage.js';
import {ProfilePage} from './pages/ProfilePage.js';

let apiContext;

test.describe('Check request', () => {
    test.beforeEach(async ({ page }, testInfo) => {        
        await page.goto('/');

        await expect(page).toHaveTitle('Hillel Qauto');

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);         

        await homePage.loginButton.click();
        await expect(loginPage.title).toBeVisible();
        await loginPage.fillLoginForm("example2140@example.com", "Test1test");
        
      });

    test('Check profile request', async ({ page }) => {
        const profilePage = new ProfilePage(page); 
        const responsePromise = page.waitForResponse('**/profile');
        
        await profilePage.profileButton.click();

        const response = await responsePromise;
        const data = await response.json();

        await expect(JSON.stringify(data)
        .replace(/.*,"photoFilename":"(.*.png)".*/mg, "\$1")).toEqual("default-user.png");   
        await expect(JSON.stringify(data)
        .replace(/.*,"name":"(.*)",".*/mg, "\$1")).toEqual("Name");      
        await expect(JSON.stringify(data)
        .replace(/.*,"lastName":"(.*)".*/mg, "\$1")).toEqual("Last");      
    });    
});