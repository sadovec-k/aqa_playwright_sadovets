import { BasePage } from './BasePage.js';

export class RegistrationPage extends BasePage{
    constructor(page) {
      super(page);
      this.title = page.locator('.modal-title','Registration');
      this.registerButton = page.locator('.hero-descriptor_btn');
      this.close = page.locator('.close');

      this.lableName = page.locator('//label[text()=\'Name\']');
      this.inputName = page.locator('[id=signupName]');
      this.alertName = page.locator('//input[@id="signupName"]/following-sibling::div[@class="invalid-feedback"]');

      this.lableLastName = page.locator('//label[text()=\'Last name\']');
      this.inputLastName = page.locator('[id=signupLastName]');
      this.alertLastName = page.locator('//input[@id="signupLastName"]/following-sibling::div[@class="invalid-feedback"]');

      this.lableEmail = page.locator('//label[text()=\'Email\']');
      this.inputEmail = page.locator('[id=signupEmail]');
      this.alertEmail = page.locator('//input[@id="signupEmail"]/following-sibling::div[@class="invalid-feedback"]');

      this.lablePassword = page.locator('[for="signupPassword"]');
      this.inputPassword = page.locator('[id=signupPassword]');
      this.alertPassword = page.locator('//input[@id="signupPassword"]/following-sibling::div[@class="invalid-feedback"]');

      this.lableReEnterPassword = page.locator('[for="signupRepeatPassword"]');
      this.inputReEnterPassword = page.locator('[id=signupRepeatPassword]');
      this.alertReEnterPassword = page.locator('//input[@id="signupRepeatPassword"]/following-sibling::div[@class="invalid-feedback"]');

      this.register = page.locator('//button[text()=\'Register\']');
    }
  
  }
