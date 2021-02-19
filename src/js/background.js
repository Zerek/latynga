// Called when the user installs the extension.
chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({url: "https://zerek.kz"}, function (tab) {
      console.log("Open new tab https://zerek.kz");
  });
});

