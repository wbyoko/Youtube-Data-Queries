exports.config = {
  chromeDriver: '../node_modules/chromedriver/bin/chromedriver',
  seleniumServerJar: '../node_modules/selenium-standalone-jar/bin/selenium-server-standalone-2.45.0.jar',

  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
