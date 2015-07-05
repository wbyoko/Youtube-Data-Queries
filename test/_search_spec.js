var yt = require('../youtube.js');
var helpers = require('./helpers.js');

describe('youtube search page', function() {

  describe('videos', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.youtube.com/results?search_query=nadal+banana+shot');
    it('should have videos', helpers.testQueryList(yt.search.videos[0]));    
  });

  describe('playlists', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.youtube.com/results?lclk=playlist&search_query=protractor&filters=playlist');
    it('should have playlists', helpers.testQueryList(yt.search.playlists[0]));
  });

  describe('channels', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://www.youtube.com/results?lclk=channel&filters=channel&search_query=angularjs');
    it('should have channels', helpers.testQueryList(yt.search.channels[0]));
  });
});