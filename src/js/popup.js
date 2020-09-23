
function main(){
    let switchBtn = document.getElementById('tolatin');

    switchBtn.onclick = function(element) {
        console.log('Alipped: toggled button');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { "message": "to_latin", "checked": switchBtn.checked });
        });
    }
    
    let anchorTag = document.getElementById('zerek_link');
    anchorTag.onclick = function () {
        let url = this.getAttribute('href');
        if (url) {
            chrome.tabs.create({url: url});  
        }
    }
};
  
if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll) ) {
    main();
} else {
    document.addEventListener("DOMContentLoaded", main);
}
