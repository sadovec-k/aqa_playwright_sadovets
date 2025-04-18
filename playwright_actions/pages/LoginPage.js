import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
    constructor(page) {
      super(page);
      this.title = page.locator('.modal-title','Log in');
      this.inputEmail = page.locator('[id=signinEmail]');
      this.inputPassword = page.locator('[id=signinPassword]');
      this.loginButton = page.locator('//button[text()=\'Login\']');
    }

    async fillLoginForm(username, password) {
      await this.inputEmail.fill(username);
      await this.inputPassword.fill(password);
      await this.loginButton.click();
    }    
  }
  