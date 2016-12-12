// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Hello world');
  var viewTabUrl = chrome.extension.getURL('image.html');
  var imageUrl = 'http://news.xinhuanet.com/english/2016-12/05/XxjwsmE005004_20161205_BNMFN0A001_11n.jpg';
  chrome.tabs.create({ url: viewTabUrl , 'selected': 'true'});

  
});