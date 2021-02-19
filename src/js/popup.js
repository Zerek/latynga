
function saveHostname(hostname) {
    chrome.storage.local.set({ [hostname]: true}, () => {
        console.log(`${hostname} is saved`);
    });
}

function removeHostname(hostname) {
    chrome.storage.local.remove(hostname, () => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log(`${hostname} is removed`);
        }
        
    })
}

// restores the popup.html UI based on active tabs hostname
function updateUI(btn) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        let hostname = new URL(activeTab.url).hostname;
        document.getElementById('hostname').innerText = hostname;
        chrome.storage.local.get(hostname, (item) => {
            if (item[hostname]) {
                console.log(`${hostname} value is `, item[hostname]);
                btn.checked = true;
            }
        })
    })
        
}

function main(){
    let switchBtn = document.getElementById('tolatin');

    updateUI(switchBtn);

    switchBtn.onclick = function(element) {
        console.log('Alipped: toggled button');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let activeTab = tabs[0];
            let hostname = new URL(activeTab.url).hostname;
            chrome.tabs.sendMessage(activeTab.id, { "message": "to_latin", "checked": switchBtn.checked, "active": activeTab });
            
            if (switchBtn.checked) {
                saveHostname(hostname);
            } else {
                removeHostname(hostname);
            }
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

