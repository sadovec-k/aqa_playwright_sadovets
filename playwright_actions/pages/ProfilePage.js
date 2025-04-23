import { BasePage } from './BasePage.js';

export class ProfilePage extends BasePage {
    constructor(page) {
      super(page);
      this.userNavigationButton = page.locator('//button[@id="userNavDropdown"]');
      this.addCarButton = page.locator('//button[text()="Add car"]');
    }
  
  }