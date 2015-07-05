var yt = require('../youtube.js');
var helpers = require('./helpers.js');

describe('youtube video page', function() {
  
  browser.ignoreSynchronization = true;
  browser.get('https://www.youtube.com/watch?v=WDcYJHgmI1k');

  it('should have main video', function() {
    var q = yt.video.videos[0];
    helpers.testAttrs(q.attrs);
  });

  it('should have related videos', helpers.testQueryList(yt.video.videos[1]));
});