var old = ["а", "ә", "б", "д", "е", "ф", "г", "ғ", "х", "Һ", "і", "и", "й", "ж", "к", "л", "м", "н", "ң", "нг", "о", "ө", "п", "қ", "р", "с", "ш", "ч", "т", "ұ", "ү", "в", "ы", "у", "з"];
var nea = ["a", "a'", "b", "d", "e", "f", "g", "g'", "h", "Һ", "i", "i'", "i'", "j", "k", "l", "m", "n", "n'", "n'", "o", "o'", "p", "q", "r", "s", "s'", "c'", "t", "u", "u'", "v", "y", "y'", "z"];

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        //var firstHref = $("a[href^='http']").eq(0).attr("href");
        $("body").children().each(function() {
            
            var i = 0;
            console.log("started replacing");
            for(i=0; i < old.length; i++){
                $(this).html($(this).html().replace(new RegExp(old[i], 'g'),nea[i]));
                $(this).html($(this).html().replace(new RegExp(old[i].toUpperCase(), 'g'),nea[i].toUpperCase()));
            }
            $(this).html($(this).html().replace(/ц/g,'s'));
            $(this).html($(this).html().replace(/Ц/g,'S'));
        });  
        //console.log(firstHref);
      }
    }
  );

