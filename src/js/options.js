let urls = null;

function add_url() {
    if (urls) {
        let url = document.getElementById('url_input').value;
        // TODO: validate the url
        
        urls.add(url);
        chrome.storage.local.set({
            urls: [...urls]
        }, update_ui);
    }
    console.log('add_url is executed', urls);
}


function update_ui() {
    let table = document.getElementById('urls_table');
    table.innerHTML = '';
    for (const url of urls) {
        let row = `<tr>
                        <td>${url}</td>
                        <td>
                            <button data-url="${url}" class="button is-small remove-url-btn">Remove</button>
                        </td>
                    </tr>`;
        table.innerHTML = row + table.innerHTML;
    }
} 


function restore_options() {
    chrome.storage.local.get({
        urls: []
    }, function (items){
        urls = new Set(items.urls);
        update_ui();
    });
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('add_button').addEventListener('click', add_url);

document.addEventListener('click', function (event) {
    if (event.target.matches('.remove-url-btn')) {
        let url = event.target.attributes['data-url'].value;
        urls.delete(url);
        chrome.storage.local.set({
            urls: [...urls]
        }, update_ui);
    }
});

