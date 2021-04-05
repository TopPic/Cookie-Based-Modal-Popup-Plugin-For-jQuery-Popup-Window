jQuery(document).ready(function ($) {

    if (Boolean(readCookie('hidefloating'))) {
        $('#floating--div').hide();
        $('#floating--div').fadeOut(1000);
    }

    $('#closefloating').click(function (e) {
        $('#floating--div').fadeOut(500);
        e.stopPropagation();
        createCookie('hidefloating', true, 1)
        return false;
    });

    function createCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();

        console.log(expires);
        document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
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
    //start banner light box
    var script = document.createElement("SCRIPT");
    script.src = 'file:///Z:/Top/WM-Project/Cookie-Based-Modal-Popup-Plugin-For-jQuery-Popup-Window/js/jquery.cookie.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("body")[0].appendChild(script);


    //start banner light box
    var script = document.createElement("SCRIPT");
    script.src = 'file:///Z:/Top/WM-Project/Cookie-Based-Modal-Popup-Plugin-For-jQuery-Popup-Window/js/custom.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("body")[0].appendChild(script);
});

