const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // return require ('./cypress/plugins/index.js')(on, config);
    },
    execTimeout: 10000,
    baseUrl: 'https://buger-eats.vercel.app'
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
