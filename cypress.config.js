const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "env": {
      "grepOmitFiltered": true,
      "grepFilterSpecs": true
    },
    setupNodeEvents(on, config) {
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false
    },
    execTimeout: 10000,
    baseUrl: 'https://buger-eats.vercel.app'
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
