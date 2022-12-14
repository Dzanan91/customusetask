/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on('task', {
    async lighthouse(allOptions) {
      let txt

      const lighthouseTask = lighthouse((lighthouseReport) => {
        let lighthouseScoreText = ''
        let lighthouseResult = lighthouseReport?.lhr?.categories
        let lighthousePerformance =
          'Performance: ' + lighthouseResult?.performance?.score + '\n'
        let lighthouseAccessibility =
          'Accessibility: ' + lighthouseResult?.accessibility?.score + '\n'
        let lighthouseBestPractices =
          'Best Practices: ' +
          lighthouseResult?.['best-practices']?.score +
          '\n'
        let lighthouseSEO = 'SEO: ' + lighthouseResult?.seo?.score + '\n'
        lighthouseScoreText =
          lighthousePerformance +
          lighthouseAccessibility +
          lighthouseBestPractices +
          lighthouseSEO

        console.log(lighthouseScoreText)
        txt = lighthouseScoreText
      })
      const report = await lighthouseTask(allOptions)
      // insert the text into the report returned the test
      report.txt = txt
      return report
    } 
  })
}
