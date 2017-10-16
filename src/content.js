//<div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
var old = ["а", "ә", "б", "д", "е", "ф", "г", "ғ", "х", "Һ", "і", "и", "й", "ж", "к", "л", "м", "н", "ң", "нг", "о", "ө", "п", "қ", "р", "с", "ш", "ч", "т", "ұ", "ү", "в", "ы", "у", "з"];
var nea = ["a", "a'", "b", "d", "e", "f", "g", "g'", "h", "Һ", "i", "i'", "i'", "j", "k", "l", "m", "n", "n'", "n'", "o", "o'", "p", "q", "r", "s", "s'", "c'", "t", "u", "u'", "v", "y", "y'", "z"];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        
        var i = 0;
        console.log("started replacing");
        for(i=0; i < old.length; i++){
            $("body").html($("body").html().replace(new RegExp(old[i], 'g'),nea[i]));
            $("body").html($("body").html().replace(new RegExp(old[i].toUpperCase(), 'g'),nea[i].toUpperCase()));
        }
        $("body").html($("body").html().replace(/ц/g,"s"));
        $("body").html($("body").html().replace(/Ц/g,"S"));
        $("body").html($("body").html().replace(/щ/g,"c'"));
        $("body").html($("body").html().replace(/Щ/g,"C'"));
        $("body").html($("body").html().replace(/я/g,"i'a"));
        $("body").html($("body").html().replace(/Я/g,"I'a"));
        $("body").html($("body").html().replace(/э/g,"e"));
        $("body").html($("body").html().replace(/Э/g,"E"));
        $("body").html($("body").html().replace(/ь/g,""));
        $("body").html($("body").html().replace(/ъ/g,""));
    
      }
    }
  );

