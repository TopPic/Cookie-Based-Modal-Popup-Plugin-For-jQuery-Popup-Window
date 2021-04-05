jQuery(document).ready(function ($) {

    //start banner light box
    var script = document.createElement("SCRIPT");
    // script.src = 'https://media-web.playpark.com/cookie/js/set-cookie.js';
    script.src = 'file:///Z:/Top/WM-Project/Cookie-Based-Modal-Popup-Plugin-For-jQuery-Popup-Window/js/set-cookie.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("body")[0].appendChild(script);

    var style = document.createElement('style');
    style.innerHTML = `
    /* body {
        background: lightyellow;
    } */
    
    .no--show {
        background-color: #222;
        padding: 3px;
        color: #fff !important;
        border: 2px solid #222;
        width: 20%;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        float: right;
        margin-top: 10px;
        font-size: 11px;
        margin-bottom: 0;
    }
    
    .no--show:hover {
        background-color: #fff;
        padding: 3px;
        color: #222 !important;
        border: 2px solid #222;
        width: 20%;
        border-radius: 10px;
        cursor: pointer;
        margin: auto;
        transition: 0.3s;
        margin-top: 10px;
    }
    
    #active--popup {
        background-color: rgba(10, 10, 10, 0.35);
        position: absolute;
        width: 100%;
        heighT: 100% !important;
        top: 0;
        left: 0;
        z-index: 999;
    }
    
    #popup--container {
        padding: 10px;
        position: fixed;
        left: 31%;
        z-index: 999;
        top: 200px;
        display: none;
        border-radius: 20px;
        background: #ffffff;
        /* width: 100%; */
        margin: auto;
        margin: 10px;
    }
    
    .modal--content {
        position: relative;
        text-align: center;
    }
    
    #popup--window {
        position: relative;
    }
    
    .modal--content h1,
    .modal--content p {
        color: #fff;
    }
    
    /* .modal-content p {
        padding: 20% 5% 0 5%;
    } */
    
    #popup--container a.close-pp {
        position: relative;
        float: right;
        top: -4px;
        right: -4px;
        z-index: 99;
        font-weight: bold;
        font-size: 16px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        padding: 2px 5px 2px 6px;
        line-height: 1em;
        text-align: center;
        background: #222222;
        border: 4px solid #fff;
        cursor: pointer;
        color: #fff;
    }
    
    @media screen and (max-width: 1366px) {
        #popup--container {
            left: 30%;
        }
    }
    
    @media screen and (max-width: 1024px) {
        #popup--container {
            left: 20%;
        }
    }
    
    @media screen and (max-width: 768px) {
        #popup--container {
            left: 10%;
        }
    }

    @media screen and (max-width: 414px) {
        #popup--container {
            left: 0%;
        }
    
        .no--show {
            width: 38%;
        }
    }

    @media screen and (max-width: 414px) {
        #popup--container {
            left: 0%;
        }
    
        .no--show {
            width: 45%;
        }
    }
    
    @media screen and (max-width: 375px) {
        .no--show {
            width: 50%;
        }
    
        .no--show {
            width: 40%;
            font-size: 12px;
        }
    }
    
    @media screen and (max-width: 360px) {
        #popup--container {
            left: 0%;
            top: 120px;
        }
    
        .no--show {
            width: 45%;
            font-size: 12px;
        }
    }
    
    @media screen and (max-width: 320px) {
        #popup--container {
            left: 0%;
            top: 120px;
        }
    
        .no--show {
            width: 48%;
            font-size: 12px;
        }
    }
    `;
    document.head.appendChild(style);
    // Show Domain
    var air = window.location.href == "https://air.playpark.com/th-th/";
    var au = window.location.href == "https://audition.playpark.com/th-th/";
    var dn = window.location.href == "https://dragonnest.playpark.com/th-th/";
    var es = window.location.href == "https://elsword.playpark.com/th-th/";
    var flyff = window.location.href == "https://flyff.playpark.com/th-th/";
    var ge = window.location.href == "https://granadoespada.playpark.com/th-th/";
    var lc = window.location.href == "https://lastchaos.playpark.com/th-th/";
    var ran = window.location.href == "https://ranonline.playpark.com/th-th/";
    var tr = window.location.href == "https://talesrunner.playpark.com/th-th/";
    var yg = window.location.href == "https://yulgang.playpark.com/th-th/";
    var swm = window.location.href == "https://swordsman.playpark.com/th-th/";
    var sa = window.location.href == "https://soulark.playpark.com/th-th/";
    var hw = window.location.href == "https://heartswar.playpark.com/th-th/";
    var tsm = window.location.href == "https://tsonline.playpark.com/th-th/";
    var asiasoft = window.location.href == "https://www.asiasoft.net/th-th/";
    var pp = window.location.href == "https://www.playpark.com/th-th/";

    var cc = window.location.href == "file:///Z:/Top/WM-Project/Cookie-Based-Modal-Popup-Plugin-For-jQuery-Popup-Window/index.html";

    if (cc) {
        $("#playpark").append('<div id="floating--div">' +
            '<div id="popup--container">' + '<a class="close-pp">X</a>' + '<div id="popup--window">' + '<div class="modal--content">' +
            '<a href="https://tsonline.playpark.com/th-th/news/patch-update-09072019/" target="_blank" class="your--class">' +
            '<img src="https://tsonline.playpark.com/th-th/wp-content/uploads/2019/07/Lightbox-TSM-3.jpg" style="width: 100%;">' +
            '</a>' +
            '<div id="closefloating" class="close--btn">' +
            '<p class="no--show">อย่าแสดงข้อความนี้อีก</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
        console.log("Show");
    } else if (lc) {
        $("#playpark").append('<div id="floating--div">' +
            '<div id="popup--container">' + '<a class="close-pp">X</a>' + '<div id="popup--window">' + '<div class="modal--content">' +
            '<a href="https://tsonline.playpark.com/th-th/news/patch-update-09072019/" target="_blank" class="your--class">' +
            '<img src="https://tsonline.playpark.com/th-th/wp-content/uploads/2019/07/Lightbox-TSM-3.jpg" style="width: 100%;">' +
            '</a>' +
            '<div id="closefloating" class="close--btn">' +
            '<p class="no--show">อย่าแสดงข้อความนี้อีก</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
        console.log("ShowLC");

    } else {
        $("#playpark").hide();
        console.log("hide");
    }



});// close jQuery Top


function show() {
    $("#playpark").append('<div id="floating--div">' +
        '<div id="popup--container">' + '<a class="close-pp">X</a>' + '<div id="popup--window">' + '<div class="modal--content">' +
        '<a href="https://tsonline.playpark.com/th-th/news/patch-update-09072019/" target="_blank" class="your--class">' +
        '<img src="https://tsonline.playpark.com/th-th/wp-content/uploads/2019/07/Lightbox-TSM-3.jpg" style="width: 100%;">' +
        '</a>' +
        '<div id="closefloating" class="close--btn">' +
        '<p class="no--show">อย่าแสดงข้อความนี้อีก</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    );
}