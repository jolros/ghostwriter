(function ($) {

    $(document).ready(function(){
        styleCodeHighlightJs();
        //styleCodeGooglePrettify();
    });

}(jQuery));

function styleCodeHighlightJs() {
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
}

function styleCodeGooglePrettify() {
    if (typeof disableStyleCode != "undefined") { return; }
    var makePretty = false;
    
    $("pre").children("code").each(function() {
        if (!$(this).hasClass("shell")){
            // Add prettyprint to all pre blocks with "code" tag children
            if (!$(this).hasClass("prettyprint")) {
                $(this).addClass("prettyprint");
                makePretty = true;
                         
                // Add linenums
                //if (!$(this).hasClass("linenums")) {
                //    $(this).addClass("linenums");
                //}
            }
        }
    });
                
    if (makePretty) { prettyPrint(); } //prettyPrint() is externally defined
}


