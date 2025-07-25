const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundle = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundle);
      await addCucumberPreprocessorPlugin(on, config);

      mochawesome(on);

      return config;
    },
    specPattern: [
      "cypress/e2e/web/features/*.feature",
      "cypress/e2e/api/features/*.feature"
    ],
    supportFile: "cypress/support/e2e.js",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    }
  },
});