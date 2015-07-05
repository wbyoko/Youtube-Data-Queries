var yt = require('../youtube.js');
var helpers = require('./helpers.js');

describe('youtube playlist page', function() {
  
  browser.ignoreSynchronization = true;
  browser.get('https://www.youtube.com/playlist?list=PLC2AFF34387CAF459');

  it('should have main playlist', function() {
    var q = yt.playlist.playlists[0];
    helpers.testAttrs(q.attrs);
  });

  browser.get('https://www.youtube.com/playlist?list=PLB59BDF89A4C7A6BE');

  it('should have playlist videos', helpers.testQueryList(yt.playlist.videos[0]));
});