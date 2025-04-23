import {test as base, expect, Page} from '@playwright/test';
import { ProfilePage } from '../pages/ProfilePage.js';

exports.test = base.test.extend({
    userGaragePage: async ({browser}, use ) => {
        const context = await browser.newContext({
            storageState: 'playwright_actions/auth/loginState.json',
          });
        
        const page = await context.newPage();
       
        await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/panel/garage');
        
        await use(new ProfilePage(page));
   
    },
  });

  export { expect } from '@playwright/test';
  