describe("Orange HRM tests", () => {
  it("Login - success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("admin123");
    cy.get("[type='submit']").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.get(".oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  });
  it("Login - failed", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("wrongpassword");
    cy.get("[type='submit']").click();
    cy.get("[role='alert']")
      .should("be.visible")
      .and("contain.text", "Invalid credentials");
  });
});
