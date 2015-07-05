var yt = require('../youtube.js');
var helpers = require('./helpers.js');

describe('youtube homepage', function() {
  browser.ignoreSynchronization = true;
  browser.get('https://www.youtube.com/');
  it('should have videos', helpers.testQueryList(yt.homepage.videos[0]));
});