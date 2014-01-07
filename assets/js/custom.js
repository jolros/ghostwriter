(function ($) {

    $(document).ready(function(){

        styleCode();

    });

}(jQuery));

function styleCode() {
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


