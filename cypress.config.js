const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
};
