import BasePage from './BasePage.js';

class AddCarPage extends BasePage {
    constructor(page) {
      super(page);
      this.title = page.locator('.modal-title','Add a car');
    }
  
  }

  module.exports = AddCarPage;  