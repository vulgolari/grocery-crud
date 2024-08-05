# Grocery CRUD

Front-End Test Automation with Cypress and BDD. The project includes test scenarios for adding, editing, deleting and searching for customers in a web application, using Page Object Model.

## Project Description

Grocery CRUD is a simple, customizable and extensible CRUD (Create, Read, Update, Delete) generator. This project focuses on automating the testing of key functionalities of the Grocery CRUD application, ensuring its reliability and correctness through comprehensive test scenarios.

## Features

- **Automated Testing:** Uses Cypress for end-to-end testing.
- **BDD:** Utilizes Cucumber syntax for defining test scenarios.
- **Page Object Model:** Organized test structure with Page Object Model (POM) pattern.
- **Reporting:** Integrates Allure for generating detailed test reports with screenshots.

## Test Scenarios

The following test scenarios are implemented:

1. **Add Customer and Verify Success Message**
2. **Delete Customer and Verify Deletion Message**
3. **Edit Customer and Verify Success Message**
4. **Cancel Customer Deletion**

## Installation

To set up and run the tests, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vulgolari/grocery-crud.git
   cd grocery-crud
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the tests:**

   To open Cypress Test Runner:

   ```bash
   npm run test
   ```

   To run tests in headless mode:

   ```bash
   npm run run
   ```

## Reporting

To generate test reports using Allure:

1. **Run the tests:**

   ```bash
   npm run run
   ```

2. **Generate the Allure report:**

   ```bash
   allure generate allure-results --clean -o allure-report
   allure open allure-report
   ```

## Project Structure

- **cypress/integration/features:** Contains the feature files written in Gherkin syntax.
- **cypress/step_definitions:** Contains the step definitions for the feature files.
- **cypress/pageObjects:** Contains the Page Object Model (POM) classes.

## Configuration

The Cypress configuration is located in `cypress.config.js`. Update the configuration as needed to match your environment and requirements.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.