const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  videosFolder: 'cypress/reports/videos',
  video: true,
  videoUploadOnPasses: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  reporter: "cypress-testrail-accumulative-reporter",
  reporterOptions: {
    domain: "customusetr.testrail.io",
    username: "hidromehanika6@gmail.com",
    password: "vLaYdW66O7mLeqjqRMRG",
    projectId: 1,
    suiteId: 1,
    includeAllInTestRun: true,
    createTestRun: "yes"
  },

  env: {
    apiUrl: '',
  },

  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: false,
    supportFile:'cypress/support/index.js',
    specPattern: 'cypress/integration/**/*.cy.js'
  }
})
