var yt = require('../youtube.js');
var helpers = require('./helpers.js');

describe('youtube playlist page', function() {
  
  browser.ignoreSynchronization = true;

  browser.get('https://www.youtube.com/channel/UCi7GJNg51C3jgmYTUwqoUXA');

  it('should have main channel', function() {
    var q = yt.channel.channels[0];
    helpers.testAttrs(q.attrs);
  });

  browser.get('https://www.youtube.com/user/teamcoco');

  it('should have videos', helpers.testQueryList(yt.channel.videos[1]));

  browser.get('https://www.youtube.com/channel/UCi7GJNg51C3jgmYTUwqoUXA');

  it('should have other channels', helpers.testQueryList(yt.channel.channels[1]));

});