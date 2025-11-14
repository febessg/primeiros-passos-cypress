import userData from "../fixtures/users/user-data.json";

describe("Orange HRM tests", () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    alertMessage: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: 'a[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
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
  it.only("User info update - success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click();
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid);
    cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click();
    cy.get(selectorsList.firstNameField).clear().type("FirstName test");
    cy.get(selectorsList.lastNameField).clear().type("LastName test");
    cy.get(selectorsList.genericField).eq(3).clear().type("Emp-id");
    cy.get(selectorsList.genericField).eq(4).clear().type("Other id test");
    cy.get(selectorsList.genericField).eq(5).clear().type("99999");
    cy.get(selectorsList.dateField).eq(1).clear().type("2025-12-10");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  });
});
