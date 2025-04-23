import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
//import LoginData from '../utils/loginData.json' assert { type: 'json' };

const login = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await homePage.loginButton.click();
  await loginPage.fillLoginForm("example2140@example.com", "Test1test");

  await page.waitForSelector('//button[@id="userNavDropdown"]');
  await page.context().storageState({ path: 'playwright_actions/auth/loginState.json' });

  await browser.close();
};

login();