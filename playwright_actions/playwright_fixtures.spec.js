const { test, expect } = require('./fixtures/loginFixtures.js');
const { chromium } = require('playwright');
const { request } = require('@playwright/test');

test.describe('Login to the user\'s garage', () => {

    test('Check Login to user\'s garage', async ({ userGaragePage }) => {

        await expect(userGaragePage.userNavigationButton).toBeVisible();
            
    });

    test('Add carr by API positive case', async ({ userGaragePage }) => {
    
        const browser = await chromium.launch();
        const context = await browser.newContext({ storageState: 'playwright_actions/auth/loginState.json' });
        
        const cookies = await context.cookies();
        const sidValue = cookies.find(cookie => cookie.name === 'sid').value;
        
        const apiContext = await request.newContext({
          baseURL: 'https://qauto.forstudy.space',
          extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': 'sid='+ sidValue
          }
        });    
    
        const newCar = await apiContext.post(`api/cars`, {
          data: {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122000
          }
        });
    
        const responseBody = await newCar.json();
            
        await expect(newCar.status()).toEqual(201);   
        await expect(JSON.stringify(responseBody)
        .replace(/.*,\"carBrandId\":(.*?),\".*/mg, "\$1")).toEqual("1");      
        await expect(JSON.stringify(responseBody)
        .replace(/.*,\"carModelId\":(.*?),\".*/mg, "\$1")).toEqual("1");
        await expect(JSON.stringify(responseBody)
        .replace(/.*,\"mileage\":(.*?),\".*/mg, "\$1")).toEqual("122000");
        await expect(JSON.stringify(responseBody)
        .replace(/.*,\"brand\":\"(.*?)\",\".*/mg, "\$1")).toEqual("Audi");
        await expect(JSON.stringify(responseBody)
        .replace(/.*,\"model\":\"(.*?)\",\".*/mg, "\$1")).toEqual("TT");
    });

    test('Add carr by API negative case, wrong mileage', async ({ userGaragePage }) => {
    
      const browser = await chromium.launch();
      const context = await browser.newContext({ storageState: 'playwright_actions/auth/loginState.json' });
        
      const cookies = await context.cookies();
      const sidValue = cookies.find(cookie => cookie.name === 'sid').value;
    
      const apiContext = await request.newContext({
        baseURL: 'https://qauto.forstudy.space',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': 'sid='+ sidValue
        }
      });    
    
      const newCar = await apiContext.post(`api/cars`, {
        data: {
          "carBrandId": 1,
          "carModelId": 1,
          "mileage": 123456123
        }
      });
    
      const responseBody = await newCar.json();
    
      await expect(newCar.status()).toEqual(400);   
      await expect(JSON.stringify(responseBody)
      .replace(/.*,\"message\":\"(.*)\".*/mg, "\$1")).toEqual("Mileage has to be from 0 to 999999"); 
    });

    test('Add carr by API negative case, wrong brandID', async ({ userGaragePage }) => {
    
      const browser = await chromium.launch();
      const context = await browser.newContext({ storageState: 'playwright_actions/auth/loginState.json' });
        
      const cookies = await context.cookies();
      const sidValue = cookies.find(cookie => cookie.name === 'sid').value;
      
      const apiContext = await request.newContext({
        baseURL: 'https://qauto.forstudy.space',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': 'sid='+ sidValue
        }
      });    
      
      const newCar = await apiContext.post(`api/cars`, {
        data: {
          "carBrandId": 10000,
          "carModelId": 1,
          "mileage": 123456
        }
      });
      
      const responseBody = await newCar.json();
      
      await expect(newCar.status()).toEqual(404);   
      await expect(JSON.stringify(responseBody)
      .replace(/.*,\"message\":\"(.*)\".*/mg, "\$1")).toEqual("Brand not found"); 
    });
});