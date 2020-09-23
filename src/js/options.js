let urls = null;

function add_url() {
    if (urls) {
        let url = document.getElementById('url_input').value;
        // TODO: validate the url
        
        urls.push(url);
        chrome.storage.local.set({
            urls: urls
        }, update_ui);
    }
    console.log('add_url is executed', urls);
}

function update_ui() {
    
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.local.get({
        urls: []
    }, function (items){
        urls = items.urls;
        update_ui();
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click', save_options);
document.getElementById('add_button').addEventListener('click', add_url);
