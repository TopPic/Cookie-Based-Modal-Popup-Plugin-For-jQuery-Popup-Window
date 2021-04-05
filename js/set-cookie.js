jQuery(document).ready(function ($) {

    if (Boolean(readCookie('hidefloating'))) {
        $('#floating--div').hide();
        $('#floating--div').fadeOut(1000);
    }
    $('#closefloating').click(function (e) {
        // // function myFunction(e) {
        // var checkBox = document.getElementById("myCheck");
        // var text = document.getElementById("text");
        // if (this.checked) {
        //     // text.style.display = "block";
        // } else {
        //     text.style.display = "none";
        // }
        $('#floating--div').fadeOut(500);
        e.stopPropagation();

        createCookie('hidefloating', true, 1)
        return false;
    });

    function createCookie(name, value, days) {
        if (days == 1) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "expires=" + date.toGMTString();

            console.log(expires);
            document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
        }
        // else var expires2 = "";


        //  $.cookie(name, value, {expires: days });
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // function eraseCookie(name) {
    //     createCookie(name, "", -1);
    // }

});

jQuery(document).ready(function () {
    jQuery('#popup--container a.close-pp').click(function () {
        jQuery('#popup--container').fadeOut();
        jQuery('#active--popup').fadeOut();
    });
    var pageHeight = jQuery(document).height();
    jQuery('#active--popup').css("height", pageHeight);
    jQuery('#popup--container').show();
});
jQuery(document).mouseup(function (e) {
    var container = jQuery('#popup--container');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.fadeOut();
        jQuery('#active--popup').fadeOut();
    }

});



    //    //start banner light box
    //    var script = document.createElement("SCRIPT");
    //    script.src = 'file:///Z:/Top/WM-Project/Cookie-Based-Modal-Popup-Plugin-For-jQuery-Popup-Window/js/jquery.cookie.js';
    //    script.type = 'text/javascript';
    //    document.getElementsByTagName("body")[0].appendChild(script);


    //    //start banner light box
    //    var script = document.createElement("SCRIPT");
    //    script.src = 'file:///Z:/Top/WM-Project/Cookie-Based-Modal-Popup-Plugin-For-jQuery-Popup-Window/js/custom.js';
    //    script.type = 'text/javascript';
    //    document.getElementsByTagName("body")[0].appendChild(script);