import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
    constructor(page) {
      super(page);
      this.loginButton = page.locator('.header_signin');
      this.registerButton = page.locator('.hero-descriptor_btn');
    }
  
  }
  