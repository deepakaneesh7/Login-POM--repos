// import Login from './page/login.page'
const Login  = require('./page/login.page');

describe('Login',async () => {
  it.only('Open a browser and Login',async () => {
    await Login.open()
    await expect(browser).toHaveTitleContaining('Login')
    await Login.emailField.setValue('sai@mailinator.com')   
    await expect(Login.emailField).toHaveValueContaining('sai@mailinator.com')
    await Login.passwordField.setValue('Test123123')
    await expect(Login.passwordField).toHaveValueContaining('Test123123')
    await Login.signInButton.click()
  });

  it('Go to Connect and select a contact',async () => {
    await Login.connectPage.waitForDisplayed({ timeout : 50000})
    await expect(Login.connectPage).toHaveTextContaining('Connect')
    await Login.contactChat.click()
  });

  it('Send a message to the contact',async () => {
    await Login.textField.setValue('Hi! This message is from WebdriverIO!')
    await browser.keys("Enter")
  });

});