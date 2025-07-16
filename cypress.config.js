const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundle = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundle);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: [
      "cypress/e2e/web/features/*.feature",
      "cypress/e2e/api/**/*.cy.js"
    ],
    supportFile: "cypress/support/e2e.js",
  },
});