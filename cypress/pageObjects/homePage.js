class HomePage {
  elements = {
    versionSelect: () => cy.get('#switch-version-select'),
    addCustomerButton: () => cy.get('a').contains('Add Customer')
  };

  selectVersion(version) {
    this.elements.versionSelect().select(version);
  }

  clickAddCustomer() {
    this.elements.addCustomerButton().click();
  }
}

export default HomePage;
