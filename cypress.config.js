const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona o pré-processador de Cucumber
      on('file:preprocessor', cucumber());
      
      // Configura o plugin do Allure
      // allureWriter(on, config);
      
      // Certifique-se de retornar a configuração para o Cypress
      return config;
    },
    specPattern: 'cypress/integration/features/*.feature',
    baseUrl: 'https://www.grocerycrud.com',
    supportFile: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});
