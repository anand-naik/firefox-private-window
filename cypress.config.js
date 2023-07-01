const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'firefox') {
          // https://wiki.mozilla.org/Firefox/CommandLineOptions#-private-window
          launchOptions.args.push('-private-window')
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
      })
    },
  },
}
