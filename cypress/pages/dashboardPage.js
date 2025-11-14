class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: ".orangehrm-dashboard-grid",
    };
    return selectors;
  }

  accessDashboardPage() {
    cy.location("pathname").should("eq", "/web/index.php/dashboard/index");
    cy.get(this.selectorsList().dashboardGrid).should("be.visible");
  }
}

export default DashboardPage;
