import userData from "../fixtures/users/user-data.json";

describe("Orange HRM tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    alertMessage: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
  };

  it("Login - success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
  });
  it("Login - failed", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFailed.username);
    cy.get(selectorsList.passwordField).type(userData.userFailed.password);
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.alertMessage)
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  });
});
