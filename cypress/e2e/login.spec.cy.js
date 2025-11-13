describe("Orange HRM tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    alertMessage: "[role='alert']",
    dashboardHeader: ".oxd-topbar-header-breadcrumb-module",
  };

  it("Login - success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("admin123");
    cy.get(selectorsList.submitButton).click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.get(selectorsList.dashboardHeader).should("have.text", "Dashboard");
  });
  it("Login - failed", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(selectorsList.usernameField).type("Admin");
    cy.get(selectorsList.passwordField).type("wrongpassword");
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.alertMessage)
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  });
});
