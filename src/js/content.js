//<div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
const old = ["а", "ә", "б", "д", "е", "ф", "г", "ғ", "х", "Һ", "і", "и", "й", "ж", "к", "л", "м", "н", "ң", "о", "ө", "п", "қ", "р", "с", "ш", "ч", "т", "ұ", "ү", "в", "ы", "у", "з"];
const nea = ["a", "á", "b", "d", "e", "f", "g", "ǵ", "h", "Һ", "i", "ı", "ı", "j", "k", "l", "m", "n", "ń", "o", "ó", "p", "q", "r", "s", "sh", "ch", "t", "u", "ú", "v", "y", "ý", "z"];
const IGNORED_TAGS = ['STYLE', 'SCRIPT'];
let converted = false;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log('Alippe: received a message')
      if( request.message === "to_latin" ) {
       
        let nodes = document.querySelectorAll('*');

        for (const node of nodes) {
          if (IGNORED_TAGS.includes(node.nodeName)) continue;
          for (let child of node.childNodes) {
            if (!request.checked) {
              child.nodeValue = child.oldNodeValue;
            } else {
              if (child.nodeType === 3) {
                child.oldNodeValue = child.nodeValue;
                child.nodeValue = latynga(child.nodeValue);
              }
            }
            
          }
        }

        converted = !converted;

        function latynga(string) {
          let result = string;
          for(i=0; i < old.length; i++){
            result = result.replace(new RegExp(old[i], 'g'),nea[i]);
            result = result.replace(new RegExp(old[i].toUpperCase(), 'g'),nea[i].toUpperCase());
          }
          result = result.replace(/ц/g,"s");
          result = result.replace(/Ц/g,"S");
          result = result.replace(/щ/g,"ch");
          result = result.replace(/Щ/g,"Ch");
          result = result.replace(/я/g,"ıa");
          result = result.replace(/Я/g,"Ia");
          result = result.replace(/э/g,"e");
          result = result.replace(/Э/g,"E");
          result = result.replace(/ь/g,"");
          result = result.replace(/ъ/g,"");
          return result;
        }
    }
    }
  );

