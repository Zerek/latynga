//<div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
const abcUrl = chrome.runtime.getURL('config/letters.json');

const IGNORED_TAGS = ['STYLE', 'SCRIPT'];
const hostname = document.location.hostname;

chrome.storage.local.get(hostname, (item) => {
  if (item[hostname]) {
    latynga(true);
  }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log('Alippe: received a message', request);
      if( request.message === "to_latin" ) {     
        latynga(request.checked);
      }
    }
  );

function latynga(changeToLatin = true) {
  fetch(abcUrl).then(response => response.json()).then(abc => {
    let nodes = document.querySelectorAll('*');
    for (const node of nodes) {
      if (IGNORED_TAGS.includes(node.nodeName)) continue;
      for (let child of node.childNodes) {
        if (changeToLatin === false) {
          child.nodeValue = child.oldNodeValue;
        } else {
          if (child.nodeType === 3) {
            child.oldNodeValue = child.nodeValue;
            child.nodeValue = toLatynString(child.nodeValue, abc);
          }
        }
        
      }
    }
  });
  

  function toLatynString(string, abc) {
    let result = string;
    for(const key in abc){
      result = result.replace(new RegExp(key, 'g'), abc[key]);
      result = result.replace(new RegExp(key.toUpperCase(), 'g'), abc[key].toUpperCase());
    }
    return result;
  }
}

