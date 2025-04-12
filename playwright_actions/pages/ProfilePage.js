import BasePage from './BasePage.js';

class ProfilePage extends BasePage {
    constructor(page) {
      super(page);
      this.userNavigationButton = page.locator('//button[@id="userNavDropdown"]');
    }
  
  }

  module.exports = ProfilePage;