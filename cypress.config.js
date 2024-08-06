const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona o pré-processador de Cucumber
      on('file:preprocessor', cucumber());
      
      // Adiciona o plugin do mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Certifique-se de retornar a configuração para o Cypress
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true,
      json: true,
      charts: true
    },
    specPattern: 'cypress/integration/features/*.feature',
    baseUrl: 'https://www.grocerycrud.com',
    supportFile: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
});
