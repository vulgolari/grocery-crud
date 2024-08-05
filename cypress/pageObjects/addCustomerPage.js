class AddCustomerPage {
  elements = {
    customerNameInput: () => cy.get('#field-customerName'),
    contactLastNameInput: () => cy.get('#field-contactLastName'),
    contactFirstNameInput: () => cy.get('#field-contactFirstName'),
    phoneInput: () => cy.get('#field-phone'),
    addressInput: () => cy.get('#field-addressLine1'),
    cityInput: () => cy.get('#field-city'),
    stateInput: () => cy.get('#field-state'),
    postalCodeInput: () => cy.get('#field-postalCode'),
    countryInput: () => cy.get('#field-country'),
    creditLimitInput: () => cy.get('#field-creditLimit'),
    saveButton: () => cy.get('button').contains('Save')
  };

  fillCustomerForm(customer) {
    this.elements.customerNameInput().clear().type(customer.name);
    this.elements.contactLastNameInput().clear().type(customer.lastName);
    this.elements.contactFirstNameInput().clear().type(customer.firstName);
    this.elements.phoneInput().clear().type(customer.phone);
    this.elements.addressInput().clear().type(customer.address);
    this.elements.cityInput().clear().type(customer.city);
    this.elements.stateInput().clear().type(customer.state);
    this.elements.postalCodeInput().clear().type(customer.postalCode);
    this.elements.countryInput().clear().type(customer.country);
    this.elements.creditLimitInput().clear().type(customer.creditLimit);
  }

  clickSave() {
    this.elements.saveButton().click();
  }
}

export default AddCustomerPage;
