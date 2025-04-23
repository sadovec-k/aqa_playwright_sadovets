const { test, expect } = require('./fixtures/loginFixtures.js');

test.describe('Login to the user\'s garage', () => {

    test('Check Login to user\'s garage', async ({ userGaragePage }) => {

        await expect(userGaragePage.userNavigationButton).toBeVisible();
            
    });
});