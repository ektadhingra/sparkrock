/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  autodelay: 'true',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://sparkrock.com/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'todayTest'
}