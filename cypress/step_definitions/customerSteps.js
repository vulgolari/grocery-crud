import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pageObjects/homePage';
import AddCustomerPage from '../pageObjects/addCustomerPage';

const homePage = new HomePage();
const addCustomerPage = new AddCustomerPage();

// Dados de teste do cliente
const customer = {
  name: 'Fake Name',
  lastName: 'Fake Last Name',
  firstName: 'Fake First Name',
  phone: '1234567890',
  address: '123 Fake Street',
  city: 'Faketown',
  state: 'FA',
  postalCode: '12345',
  country: 'Fake Country',
  creditLimit: '1000'
};

// Passos comuns a todos os cenários
Given('the user opens the application', () => {
  cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme'); // Acessa a URL da aplicação
  cy.screenshot('application-opened'); // Captura a tela após abrir a aplicação
});

Given('the user selects {string} from the version dropdown', (version) => {
  homePage.selectVersion(version); // Seleciona a versão da aplicação
  cy.screenshot('version-selected'); // Captura a tela após selecionar a versão
});

// Cenário: Adicionar Cliente
When('the user clicks on "Add Customer"', () => {
  homePage.clickAddCustomer(); // Clica no botão "Add Customer"
  cy.screenshot('add-customer-clicked'); // Captura a tela após clicar em "Add Customer"
});

When('the user fills the customer form', () => {
  addCustomerPage.fillCustomerForm(customer); // Preenche o formulário com dados do cliente
  cy.screenshot('customer-form-filled'); // Captura a tela após preencher o formulário
});

When('the user clicks on "Save"', () => {
  addCustomerPage.clickSave(); // Clica no botão "Save"
  cy.screenshot('customer-saved'); // Captura a tela após clicar em "Save"
});

Then('the user should see the success message for add operation {string}', (message) => {
  verifySuccessMessage('#report-success', message); // Verifica a mensagem de sucesso para operação de adição
  cy.screenshot('add-operation-success'); // Captura a tela após verificar a mensagem de sucesso
});

// Cenário: Deletar Cliente
When('the user searches for the customer by name', () => {
  searchCustomerByName(customer.name); // Procura o cliente pelo nome
});

When('the user selects the customer and clicks "Delete"', () => {
  deleteCustomer(); // Seleciona o cliente e clica em "Delete"
});

When('the user confirms the deletion', () => {
  cy.get('.delete-multiple-confirmation .btn-danger').contains('Delete').click(); // Confirma a exclusão
});

Then('the user should see the success message for delete operation {string}', (message) => {
  verifySuccessMessage('.alert', message); // Verifica a mensagem de sucesso para operação de exclusão
  cy.screenshot('delete-operation-success'); // Captura a tela após verificar a mensagem de sucesso
});

// Cenário: Editar Cliente
When('the user selects the customer and clicks "Edit"', () => {
  cy.get('table tbody tr').first().find('.only-desktops > a.btn').click(); // Seleciona o cliente e clica em "Edit"
});

When('the user updates the customer information', () => {
  const updatedCustomer = {
    name: 'Updated Fake Name',
    lastName: 'Updated Fake Last Name',
    firstName: 'Updated Fake First Name',
    phone: '0987654321',
    address: '321 Real Street',
    city: 'Realcity',
    state: 'RA',
    postalCode: '54321',
    country: 'Real Country',
    creditLimit: '2000'
  };
  addCustomerPage.fillCustomerForm(updatedCustomer); // Atualiza o formulário com os novos dados do cliente
});

// Implementação do passo para clicar em "Update Changes"
When('the user clicks on "Update Changes"', () => {
  cy.get('#form-button-save')
    .should('exist') // Verifica se o botão existe no DOM
    .should('be.visible') // Verifica se o botão está visível
    .click(); // Clica no botão
});

Then('the user should see the success message for edit operation {string}', (message) => {
  verifySuccessMessage('#report-success', message); // Verifica a mensagem de sucesso para operação de edição
  cy.screenshot('edit-operation-success'); // Captura a tela após verificar a mensagem de sucesso
});

// Cenário: Cancelar Exclusão de Cliente
When('the user cancels the deletion', () => {
  cy.get('.delete-multiple-confirmation .btn-secondary').contains('Cancel').click(); // Cancela a exclusão
});

Then('the user should see that the customer is still present in the list', () => {
  searchCustomerByName(customer.name); // Procura o cliente pelo nome para verificar se ainda está na lista
  cy.get('table tbody tr').should('contain.text', customer.name); // Verifica se o cliente ainda está presente na lista
});

// Funções auxiliares
const navigateToApplication = () => {
  cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme'); // Função para navegar até a aplicação
};

const selectVersion = (version) => {
  homePage.selectVersion(version); // Função para selecionar a versão da aplicação
};

const addCustomer = (customerData) => {
  homePage.clickAddCustomer(); // Função para clicar em "Add Customer"
  addCustomerPage.fillCustomerForm(customerData); // Função para preencher o formulário com os dados do cliente
  addCustomerPage.clickSave(); // Função para clicar em "Save"
};

const searchCustomerByName = (name) => {
  cy.get('input[placeholder="Search Name"]').type(name); // Função para procurar o cliente pelo nome
};

const deleteCustomer = () => {
  cy.get('input[type="checkbox"]').check(); // Função para selecionar o cliente
  cy.get('.delete-selected-button').click(); // Função para clicar em "Delete"
};

const verifySuccessMessage = (selector, message) => {
  cy.get(selector, { timeout: 10000 }) // Função para verificar a mensagem de sucesso
    .should('exist') // Verifica se o elemento existe
    .should('be.visible') // Verifica se o elemento está visível
    .and('contain.text', message); // Verifica se o elemento contém o texto esperado
};
