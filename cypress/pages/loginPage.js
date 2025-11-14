class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      submitButton: "[type='submit']",
      alertMessage: "[role='alert']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithCredentials(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().submitButton).click();
  }

  loginWithWrongCredentials(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().submitButton).click();
    cy.get(this.selectorsList().alertMessage)
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  }
}

export default LoginPage;
