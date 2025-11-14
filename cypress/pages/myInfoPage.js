class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      selectInputArrow: ".oxd-select-text--arrow",
      selectDropdownOptions: ".oxd-select-dropdown",
      submitButton: "[type='submit']",
      radioGenderOption: ".oxd-radio-input",
    };
    return selectors;
  }

  completeProfile(userInfo) {
    cy.get(this.selectorsList().firstNameField)
      .clear()
      .type(userInfo.firstName);
    cy.get(this.selectorsList().lastNameField).clear().type(userInfo.lastName);
    cy.get(this.selectorsList().genericField)
      .eq(3)
      .clear()
      .type(userInfo.empId);
    cy.get(this.selectorsList().genericField)
      .eq(4)
      .clear()
      .type(userInfo.otherId);
    cy.get(this.selectorsList().genericField)
      .eq(5)
      .clear()
      .type(userInfo.licenseNumber);
    cy.get(this.selectorsList().dateField)
      .eq(0)
      .clear()
      .type(userInfo.licenseExpiryDate);
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().selectInputArrow).eq(0).click();
    cy.get(this.selectorsList().selectDropdownOptions).contains(
      userInfo.nationality
    );
    cy.get(this.selectorsList().selectInputArrow).eq(1).click();
    cy.get(this.selectorsList().selectDropdownOptions).contains(
      userInfo.maritalStatus
    );
    cy.get(this.selectorsList().dateField).eq(1).clear().type(userInfo.dob);
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  }
}

export default MyInfoPage;
