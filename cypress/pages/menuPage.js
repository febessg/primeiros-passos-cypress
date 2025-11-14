class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: 'a[href="/web/index.php/pim/viewMyDetails"]',
    };
    return selectors;
  }

  accessMyInfoPage() {
    cy.get(this.selectorsList().myInfoButton).click();
  }
}

export default MenuPage;
