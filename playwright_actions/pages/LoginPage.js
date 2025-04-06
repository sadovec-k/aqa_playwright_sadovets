import BasePage from './BasePage.js';

class LoginPage extends BasePage {
    constructor(page) {
      super(page);
      this.title = page.locator('.modal-title','Log in');
  
    }
  
    
  }

  module.exports = LoginPage ;
  