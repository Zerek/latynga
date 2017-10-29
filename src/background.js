// Called when the user installs the extension.
chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({url: "https://igibek.github.io/latynga"}, function (tab) {
      console.log("New tab launched with https://igibek.github.io/latynga");
  });
});
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});