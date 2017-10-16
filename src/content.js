//<div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
var old = ["а", "ә", "б", "д", "е", "ф", "г", "ғ", "х", "Һ", "і", "и", "й", "ж", "к", "л", "м", "н", "ң", "нг", "о", "ө", "п", "қ", "р", "с", "ш", "ч", "т", "ұ", "ү", "в", "ы", "у", "з"];
var nea = ["a", "a'", "b", "d", "e", "f", "g", "g'", "h", "Һ", "i", "i'", "i'", "j", "k", "l", "m", "n", "n'", "n'", "o", "o'", "p", "q", "r", "s", "s'", "c'", "t", "u", "u'", "v", "y", "y'", "z"];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        let bodyHtml = $("body").html();
        
        var i = 0;
        console.log("started replacing");
        for(i=0; i < old.length; i++){
            bodyHtml = bodyHtml.replace(new RegExp(old[i], 'g'),nea[i]);
            bodyHtml = bodyHtml.replace(new RegExp(old[i].toUpperCase(), 'g'),nea[i].toUpperCase());
        }
        bodyHtml = bodyHtml.replace(/ц/g,"s");
        bodyHtml = bodyHtml.replace(/Ц/g,"S");
        bodyHtml = bodyHtml.replace(/щ/g,"c'");
        bodyHtml = bodyHtml.replace(/Щ/g,"C'");
        bodyHtml = bodyHtml.replace(/я/g,"i'a");
        bodyHtml = bodyHtml.replace(/Я/g,"I'a");
        bodyHtml = bodyHtml.replace(/э/g,"e");
        bodyHtml = bodyHtml.replace(/Э/g,"E");
        bodyHtml = bodyHtml.replace(/ь/g,"");
        bodyHtml = bodyHtml.replace(/ъ/g,"");

        $("body").html(bodyHtml);
      }
    }
  );

