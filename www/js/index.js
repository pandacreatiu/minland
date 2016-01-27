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
    var swiper = new Swiper('.swiper_home', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: true
    });

    var swiper = new Swiper('.swiper_emybaby', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        grabCursor: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });

});


function def_lang(iam){

    switch(iam) {
        case 1: currentlang = 'esp';
        break;
        case 2: currentlang = 'eng';
        break;
    }

    if(iam) { localStorage.setItem("lang", currentlang); }

    if(!localStorage.getItem("lang")) {  
        localStorage.setItem("lang", "esp");
    }

    switch(localStorage.getItem("lang")) {
        case 'esp':
            //menu emybaby
            $(".txt_mibebe").text("MI BEBÉ");
            $(".cont_mibebe").text("Recuerda todos los datos del nacimiento del bebé guardándolos para siempre en su ficha y sigue su evolución en la ficha médica, el termómetro o la báscula.");
            $(".mibebe_img01 img").attr("src", "images/emybaby/_0002_MI-BEBE-01ES.png");
            $(".mibebe_img02 img").attr("src", "images/emybaby/_0003_MI-BEBE-02ES.png");

            $(".txt_lafamilia").text("LA FAMILIA");
            $(".cont_lafamilia").text("Añade los datos de todos los miembros de la familia y crea el árbol genealógico de tu pequeño desde la web.");
            $(".lafamilia_img01 img").attr("src", "images/emybaby/_0005_LAFAMILIA-ES01.png");

            $(".txt_vigilabebes").text("VIGILABEBES");
            $(".cont_vigilabebes").text("¿Deseas ver a tu bebé estés donde estés? Selecciona tu modelo de vigilabebés, configúralo y conecta con tu bebé desde tu PC, Tablet o Smartphone.");
            $(".vigilabebes_img01 img").attr("src", "images/emybaby/_0009_VIGILABEBES-ES01.png");
            $(".vigilabebes_img02 img").attr("src", "images/emybaby/_0010_VIGILABEBES-ES02.png");
            $(".vigilabebes_img03 img").attr("src", "images/emybaby/_0011_VIGILABEBES-ES03.png");

            $(".txt_termometro").text("TERMÓMETRO");
            $(".cont_termometro").text("Registra la temperatura de tu bebé manual o automáticamente y sigue su evolución. Comparte los datos con el pediatra o los seres queridos.");
            $(".termometro_img01 img").attr("src", "images/emybaby/_0013_TERMOMETRO_ES01.png");
            $(".termometro_img02 img").attr("src", "images/emybaby/_0015_TERMOMETRO_ES02.png");

            $(".txt_buddy").text("BEMYBUDDY");
            $(".cont_buddy").text("¡Una gran fuente de emociones y sensaciones para el bebé! Infinitas posibilidades, con múltiples canciones y sonidos especialmente diseñados para los más pequeños y totalmente personalizable.");
            $(".buddy_img01 img").attr("src", "images/emybaby/_0019_BEMYBUDDY-ES01.png");
            $(".buddy_img02 img").attr("src", "images/emybaby/_0020_BEMYBUDDY-ES02.png");
            $(".buddy_img03 img").attr("src", "images/emybaby/_0021_BEMYBUDDY-ES03.png");

            $(".txt_calendario").text("CALENDARIO");
            $(".cont_calendario").text("Porque sabemos que estás muy ocupado, te ayudamos a organizar las citas médicas, eventos familiares o fechas importantes en un calendario único.");
            $(".calendario_img01 img").attr("src", "images/emybaby/_0024_CALENDARIO-ES01.png");
            $(".calendario_img02 img").attr("src", "images/emybaby/_0025_CALENDARIO-ES02.png");

            $(".txt_fichamedica").text("FICHA MÉDICA");
            $(".cont_fichamedica").text("Registra toda la información médica de tu bebé: datos de peso, altura, y perímetro craneal y sigue su evolución comparándolos con los estándares de la OMS o enviándolos por email desde la web.");
            $(".fichamedica_img01 img").attr("src", "images/emybaby/_0029_FICHA-MEDICA-ES01.png");
            $(".fichamedica_img02 img").attr("src", "images/emybaby/_0030_FICHA-MEDICA-ES02.png");
            $(".fichamedica_img03 img").attr("src", "images/emybaby/_0031_FICHA-MEDICA-ES03.png");

            $(".txt_albumfotos").text("ÁLBUM DE FOTOS");
            $(".cont_albumfotos").text("Guarda las imágenes de cada momento especial que vivas con tu bebé para poder disfrutarlos con los tuyos.");
            $(".albumfotos_img01 img").attr("src", "images/emybaby/_0033_ALBUM-FOTOS-ES01.png");

            $(".txt_emyscale").text("EMYSCALE");
            $(".cont_emyscale").text("De bebé a niño, ¡mantén su peso siempre controlado! Guarda automáticamente el peso de tu hijo y sigue su evolución");
            $(".emyscale_img01 img").attr("src", "images/emybaby/_0037_EMYSCALE-ES01.png");
            $(".emyscale_img02 img").attr("src", "images/emybaby/_0038_EMYSCALE-ES02.png");
            $(".emyscale_img03 img").attr("src", "images/emybaby/_0039_EMYSCALE-ES03.png");

            $(".txt_ajustes").text("AJUSTES");
            $(".cont_ajustes").text("Tu configuración personal. Y si necesitas ayuda contacta con Miniland, estaremos siempre a tu lado.");

            //home
            $(".home_title").text("FACILITA LA TAREA DE SER PADRES");
            $(".home_subtitle").text("escoge un producto compatible y te contamos como");
            $(".descarga_en").text("DESCARGA EN:");

            //productes
            $(".digimonitor35touch").text('digimonitor 3.5"touch');
            $(".digimonitor35plus").text('digimonitor 3.5"plus');
            $(".digimonitor24plus").text('digimonitor 2.4"plus');
            $(".spinipcam").text('spin IPCam');
            $(".everywhereipcam").text('everywhere IPCam');
            $(".thermoadvancedplus").text('thermoadvanced plus');
            $(".emyscale").text('eMyScale');
            $(".bemybuddy").text('beMyBuddy');
            
            //productos - textos videos
            $(".conectate_con_tu_bebe").text("Conéctate con tu bebé a distancia");
            $(".con_la_aplicacion_podras_ver").text("Con la aplicación gratuita eMyBaby puedes ver a tu bebé desde cualquier parte");
            $(".desde_cualquier_plataforma").text("Desde cualquier plataforma, a través de smartphones, tablets y ordenador");
            $(".a_cualquier_hora").text("A cualquier hora y en cualquier lugar");
            $(".va_siempre_contigo").text("Va siempre contigo");
            $(".sigue_los_movimientos").text("Sigue los movimientos del bebé por toda la habitación girando la cámara desde tu móvil o tablet");
            $(".multitud_de_funciones").text("Multitud de funciones como hablar y escuchar a tu bebé");
            $(".con_detencion_y_grabacion").text("Con detección y grabación de movimiento y captura de imágenes");
            $(".permite_visualizar_hasta").text("Permite visualizar hasta 4 cámaras en un mismo dispositivo");
            $(".con_bemybuddy_puedes").text("Con beMyBuddy, puedes grabar con tu propia voz las canciones o cuentos favoritos del bebé");
            $(".podras_reprodocirlos_cuando").text("Podrás reproducirlos cuando quieras, ¡estés donde estés!");
            $(".con_la_aplicacion_podras_relajar").text("Con la aplicación gratuita eMyBaby podrás relajar al bebé con una amplia gama de sonidos o elegir entre los archivos que tengas en tu dispositivo");
            $(".tu_bebe_te_sentira").text("Tu bebé te sentirá siempre cerca, incluso cuando no estés a su lado");
            $(".emyscale_conecta").text("eMyScale conecta con el smartphone o tablet para registrar las mediciones de peso en la aplicación eMyBaby");
            $(".con_la_aplicacion_podras_seguimiento").text("Con la aplicación gratuita eMyBaby podrás llevar un seguimiento de la evolución del peso del bebé");
            $(".en_emybaby_encontraras").text("En eMyBaby encontrarás todos los registros de peso y gráficos evolutivos de tu bebé");
            $(".thermoadvanced_plus_conecta").text("thermoadvanced plus conecta con el smartphone o tablet para el registro y control de las temperaturas del bebé");
            $(".con_la_aplicacion_podras_medicion").text("Con la aplicación gratuita eMyBaby además de la medición precisa y sin contacto, dispondrás del registro de las temperaturas siempre a mano");
            
            //footer
            $(".footer_txt").html("<div style='font-family: myriadwebpro;'>Descubre sus infinitas posibilidades en <a href='http://www.emybaby.com' rel='external' style='color: #fff; font-weight:100; text-decoration:none;font-family: myriadwebpro;'>eMyBaby.com</a></div>"); 
            break;
       
        case 'eng':
            //menu emybaby
            $(".txt_mibebe").text("MY BABY");
            $(".cont_mibebe").text("Remember all the information of the baby’s birth saving it forever on his record and follow his evolution on the medical record, the thermometer or the scale.");
            $(".mibebe_img01 img").attr("src", "images/emybaby/_0000_MI-BEBE-01EN.png");
            $(".mibebe_img02 img").attr("src", "images/emybaby/_0001_MI-BEBE-02EN.png");

            $(".txt_lafamilia").text("THE FAMILY");
            $(".cont_lafamilia").text("Add the information of all the family members and create your baby’s family tree from the website.");
            $(".lafamilia_img01 img").attr("src", "images/emybaby/_0004_FAMILY-EN01.png");

            $(".txt_vigilabebes").text("BABY MONITORS");
            $(".cont_vigilabebes").text("Do you want to see your baby wherever you are? Choose your baby monitor model, set it and connect with your baby from your PC, Tablet or Smartphone.");
            $(".vigilabebes_img01 img").attr("src", "images/emybaby/_0006_BABY-MONITOR-EN01.png");
            $(".vigilabebes_img02 img").attr("src", "images/emybaby/_0007_BABY-MONITOR-EN02.png");
            $(".vigilabebes_img03 img").attr("src", "images/emybaby/_0008_BABY-MONITOR-EN03.png");

            $(".txt_termometro").text("THERMOMETER");
            $(".cont_termometro").text("Register your baby’s temperature manually or automatically and follow his evolution. Share the information with the pediatrician or with your loved ones.");
            $(".termometro_img01 img").attr("src", "images/emybaby/_0012_THERMOMETER_EN01.png");
            $(".termometro_img02 img").attr("src", "images/emybaby/_0014_THERMOMETER_EN02.png");

            $(".txt_buddy").text("BEMYBUDDY");
            $(".cont_buddy").text("A great source of emotions and feelings for the baby! Endless possibilities, with multiple songs and sounds specially designed for the little ones and completely customizable.");
            $(".buddy_img01 img").attr("src", "images/emybaby/_0016_BEMYBUDDY-EN01.png");
            $(".buddy_img02 img").attr("src", "images/emybaby/_0017_BEMYBUDDY-EN02.png");
            $(".buddy_img03 img").attr("src", "images/emybaby/_0018_BEMYBUDDY-EN03.png");

            $(".txt_calendario").text("CALENDAR");
            $(".cont_calendario").text("Because we know you are busy, we help you organize the medical appointments, family events or important dates in a unique calendar.");
            $(".calendario_img01 img").attr("src", "images/emybaby/_0022_CALENDAR-EN01.png");
            $(".calendario_img02 img").attr("src", "images/emybaby/_0023_CALENDAR-EN02.png");

            $(".txt_fichamedica").text("MEDICAL RECORD");
            $(".cont_fichamedica").text("Register all your baby’s medical information: weight, height and cranial perimeter and follow his evolution comparing the data with the WHO standards or sending it by email from our website.");
            $(".fichamedica_img01 img").attr("src", "images/emybaby/_0026_MEDICAL-RECORDS-EN01.png");
            $(".fichamedica_img02 img").attr("src", "images/emybaby/_0027_MEDICAL-RECORDS-EN02.png");
            $(".fichamedica_img03 img").attr("src", "images/emybaby/_0028_MEDICAL-RECORDS-EN01.png");

            $(".txt_albumfotos").text("PHOTO ALBUM");
            $(".cont_albumfotos").text("Save the pictures of every special moment lived with your baby to enjoy them with your loved ones.");
            $(".albumfotos_img01 img").attr("src", "images/emybaby/_0032_PHOTO-ALBUM-EN01.png");

            $(".txt_emyscale").text("EMYSCALE");
            $(".cont_emyscale").text("From baby to child, keep his weight always under control! Save automatically your child’s weight and follow his evolution.");
            $(".emyscale_img01 img").attr("src", "images/emybaby/_0034_EMYSCALE-EN01.png");
            $(".emyscale_img02 img").attr("src", "images/emybaby/_0035_EMYSCALE-EN02.png");
            $(".emyscale_img03 img").attr("src", "images/emybaby/_0036_EMYSCALE-EN03.png");

            $(".txt_ajustes").text("SETTINGS");
            $(".cont_ajustes").text("Your personal settings. And if you need any help, get in touch with Miniland, we will always be by your side.");
 
            //home
            $(".home_title").text("MAKING PARENTS' LIFE A LOT EASIER");
            $(".home_subtitle").text("Choose and discover our Emybaby products");
            $(".descarga_en").text("DOWNLOAD:");

            //productes
            $(".digimonitor35touch").text('digimonitor 3.5"touch');
            $(".digimonitor35plus").text('digimonitor 3.5"plus');
            $(".digimonitor24plus").text('digimonitor 2.4"plus');
            $(".spinipcam").text('spin IPCam');
            $(".everywhereipcam").text('everywhere IPCam');
            $(".thermoadvancedplus").text('thermoadvanced plus');
            $(".emyscale").text('eMyScale');
            $(".bemybuddy").text('beMyBuddy');
            
            //productos - textos videos
            $(".conectate_con_tu_bebe").text("Get in touch with your baby from the distance");
            $(".con_la_aplicacion_podras_ver").text("With the free app eMyBaby stay in contact with your baby from anywhere");
            $(".desde_cualquier_plataforma").text("And from any platform, either through smartphones, tablets or computers");
            $(".a_cualquier_hora").text("Anytime and anywhere");
            $(".va_siempre_contigo").text("Always with you");
            $(".sigue_los_movimientos").text("Watch your baby moving all over the room from your cell phone or tablet");
            $(".multitud_de_funciones").text("It includes a wide range of features such as talking and listening to your baby");
            $(".con_detencion_y_grabacion").text("With movement detection/recording and image capturing");
            $(".permite_visualizar_hasta").text("It allows you to monitor up to 4 cameras from a single device");
            $(".con_bemybuddy_puedes").text("beMyBudddy enables you to record your own voice to play your baby’s favourite songs and tales");
            $(".podras_reprodocirlos_cuando").text("Play them whenever and wherever you are.");
            $(".con_la_aplicacion_podras_relajar").text("Relax your baby with a wide range of standard and personalised sounds on eMyBaby");
            $(".tu_bebe_te_sentira").text("Your baby will always feel you nearby, even if you are away");
            $(".emyscale_conecta").text("Connect eMyScale with your smartphone or tablet and register your baby’s weighings through eMybaby");
            $(".con_la_aplicacion_podras_seguimiento").text("Free app eMybaby gives you the chance to track the evolution of your baby’s weighings");
            $(".en_emybaby_encontraras").text("eMyBaby tracks all your baby’s information related to weighing records and evolutive graphs");
            $(".thermoadvanced_plus_conecta").text("Connect thermoadvanced plus with your smartphone or tablet and register the evolution of your baby’s temperatures");
            $(".con_la_aplicacion_podras_medicion").text("Thermoadvanced plus guarantees accurate and contactless temperature measurements. Track all these results on eMybaby");
            
            //footer
            $(".footer_txt").html("Know more about endless features at <a href='http://www.emybaby.com' rel='external' style='color: #fff; font-weight:100; text-decoration:none;'>eMyBaby.com</a>"); 
            break;
    } 
}


$(document).one('pagebeforecreate', function () {

    $.mobile.pageContainer.find("[data-role=page]").each(function () {
        var panel = '<div data-role="panel" id="leftpanel2" data-position="left" data-display="push" data-theme="a"> <div class="menu_logo"> <img src="images/emybaby_letter.png" height="27" width="152"> </div><a href="emybaby_mibebe.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_mibebe.png" height="52" width="66"> </div><div class="menu_baby_txt txt_mibebe"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_lafamilia.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_lafamilia.png" height="52" width="66"> </div><div class="menu_baby_txt txt_lafamilia"> </div> <div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_vigilabebes.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_vigilabebes.png" height="52" width="66"> </div><div class="menu_baby_txt txt_vigilabebes"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_termometro.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_termometro.png" height="52" width="66"> </div><div class="menu_baby_txt txt_termometro"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_bemybuddy.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_buddy.png" height="52" width="66"> </div><div class="menu_baby_txt txt_buddy"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_calendario.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_calendario.png" height="52" width="66"> </div><div class="menu_baby_txt txt_calendario"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_fichamedica.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_fichamedica.png" height="52" width="66"> </div><div class="menu_baby_txt txt_fichamedica"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_albumdefotos.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_albumfotos.png" height="52" width="66"> </div><div class="menu_baby_txt txt_albumfotos"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a><a href="emybaby_emyscale.html" rel="external"><div class="menu_baby_item"><div class="menu_baby_img"> <img src="images/icon_emyscale.png" height="52" width="66"> </div><div class="menu_baby_txt txt_emyscale"> </div><div class="menu_baby_marca"> <img src="images/marca.png" height="21" width="13"> </div></div></a></div>';
        $(this).prepend(panel);
        var panel_dre = '<div data-role="panel" id="rightpanel2" data-position="right" data-display="overlay" data-theme="b" style="background-color: #2D3854;"><div class="menu_idiomas"><a href="#rightpanel2"><div class="item_idioma" onclick="def_lang(1);"><div class="item_idioma_flag"> <img src="images/esp.png" height="19" width="18"> </div><div class="item_idioma_txt"> español </div></div></a><a href="#rightpanel2"> <div class="item_idioma" onclick="def_lang(2);"><div class="item_idioma_flag"> <img src="images/eng.png" height="19" width="18"> </div><div class="item_idioma_txt"> english </div></div></a></div></div>';
        $(this).prepend(panel_dre);
    });
    
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