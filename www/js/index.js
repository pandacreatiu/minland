var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(function() {

    def_lang(); 

    /* slider home */
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: true
    });

});




function def_lang(iam){
    if(iam) { localStorage.setItem("lang", iam); }

    if(!localStorage.getItem("lang")) {  
        localStorage.setItem("lang", "esp");
    }

    switch(localStorage.getItem("lang")) {
        case 'esp':
            //menu emybaby
            $(".txt_mibebe").text("MI BEBÉ");
            $(".txt_lafamilia").text("LA FAMILIA");
            $(".txt_vigilabebes").text("VIGILABEBES");
            $(".txt_termometro").text("TERMÓMETRO");
            $(".txt_buddy").text("BEMYBUDDY");
            $(".txt_calendario").text("CALENDARIO");
            $(".txt_fichamedica").text("FICHA MÉDICA");
            $(".txt_albumfotos").text("ÁLBUM DE FOTOS");
            $(".txt_emyscale").text("EMYSCALE");
            //home
            $(".home_title").text("FACILITA LA TAREA DE SER PADRES");
            $(".home_subtitle").text("escoge un producto compatible y te contamos como");
            //footer
            $(".footer_txt").text("Descubre sus infinitas posibilidades en eMyBaby.com"); 
            break;
       
       case 'eng':
            //menu emybaby
            $(".txt_mibebe").text("MI BEBÉ");
            $(".txt_lafamilia").text("LA FAMILIA");
            $(".txt_vigilabebes").text("VIGILABEBES");
            $(".txt_termometro").text("TERMÓMETRO");
            $(".txt_buddy").text("BEMYBUDDY");
            $(".txt_calendario").text("CALENDARIO");
            $(".txt_fichamedica").text("FICHA MÉDICA");
            $(".txt_albumfotos").text("ÁLBUM DE FOTOS");
            $(".txt_emyscale").text("EMYSCALE");
            //home
            $("#txt1").text("text en eng");
            break;
    } 
}



$(document).one('pagebeforecreate', function () {

    //alert('one pagebeforecreate');
   /* $.mobile.pageContainer.find("[data-role=page]").each(function () {
        var panel = '<div data-role="panel" id="leftpanel2" data-position="left" data-display="push" data-theme="a"> <div class="menu_logo"> <img src="images/emybaby_letter.png" height="27" width="152"> </div><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_mibebe.png" height="52" width="66"> </div><div class="menu_baby_txt txt_mibebe"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_lafamilia.png" height="52" width="66"> </div><div class="menu_baby_txt txt_lafamilia"> </div> <div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_vigilabebes.png" height="52" width="66"> </div><div class="menu_baby_txt txt_vigilabebes"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_termometro.png" height="52" width="66"> </div><div class="menu_baby_txt txt_termometro"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_buddy.png" height="52" width="66"> </div><div class="menu_baby_txt txt_buddy"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_calendario.png" height="52" width="66"> </div><div class="menu_baby_txt txt_calendario"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_fichamedica.png" height="52" width="66"> </div><div class="menu_baby_txt txt_fichamedica"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_albumfotos.png" height="52" width="66"> </div><div class="menu_baby_txt txt_albumfotos"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href=""><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_emyscale.png" height="52" width="66"> </div><div class="menu_baby_txt txt_emyscale"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a></div>';
        $(this).prepend(panel);
        var panel_dre = '<div data-role="panel" id="rightpanel2" data-position="right" data-display="overlay" data-theme="b" style="background-color: #2D3854;"><div class="menu_idiomas"><a href="#rightpanel2"><div class="item_idioma" onclick="def_lang("esp");"><div class="item_idioma_flag"> <img src="images/esp.png" height="19" width="18"> </div><div class="item_idioma_txt"> ESPAÑOL </div></div></a><a href="#rightpanel2"> <div class="item_idioma" onclick="def_lang("eng");"><div class="item_idioma_flag"> <img src="images/eng.png" height="19" width="18"> </div><div class="item_idioma_txt"> ENGLISH </div></div></a></div></div>';
        $(this).prepend(panel_dre);
    });*/
    
    def_lang(); 
});



/*$(document).bind("pagehide", function(event, ui) {
    $(ui.nextPage).animationComplete(function() {
        alert('Animation completed');
    });
});*/

$(document).bind("pageinit", function(event, ui) {
    def_lang(); 
});