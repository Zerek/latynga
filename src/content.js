chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        //var firstHref = $("a[href^='http']").eq(0).attr("href");
        $("body").children().each(function() {
            var old = ["Ә", "ә", "Ұ", "ұ", "Ү", "ү"];
            var newAlphabet = ["A'", "a'", "U", "u", "U'", "u'"];
            var i = 0;
            console.log("started replacing");
            for(i=0; i < old.length; i++){
                $(this).html($(this).html().replace(new RegExp(old[i], 'g'),newAlphabet[i]));
                
            }
        });  
        //console.log(firstHref);
      }
    }
  );

