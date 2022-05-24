// import Page from "./page";

class Login {
  async open(){
    browser.url("https://my.staging.anywhere.app/connect")
  }

  get emailField(){
    return $('#user-email')
  }

  get passwordField(){
    return $('#user-password')
  }

  get signInButton(){
    return $('#sign-in')
  }

  get inboxPage(){
    return $("//h1[contains(text(),'Inbox')]")
  }
  
  get connectIcon(){
    return $("//a[@id='sidebar-app-connect']//i")
  }

  get connectPage(){
    return $("//h2[contains(text(),'Connect')]")
  }

  get contactChat(){
    return $('//h4[contains(text(),"Martin")]')
  }

  get textField(){
    return $('#chat-input')
  }
}

module.exports = new Login()

// export default new Login();