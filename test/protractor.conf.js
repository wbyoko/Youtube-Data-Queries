exports.config = {
  chromeDriver: '../node_modules/chromedriver/bin/chromedriver',
  seleniumServerJar: '../node_modules/selenium-standalone-jar/bin/selenium-server-standalone-2.45.0.jar',

  capabilities: {
    'browserName': 'firefox'
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
