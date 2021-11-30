// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

$(document).ready(function() {

//    console.log('teste');

    // Function to send events to google analitycs
    function analyticsEvents(e, eventCategory, eventAction, eventLabel) {
      console.log(e, eventCategory, eventAction, eventLabel);
      ga('send', 'event', eventCategory, eventAction, eventLabel);
    }

    $("#contato").click(function(){
        analyticsEvents(event, "menu", "entre_em_contato", "link_externo");
    });

    $("#download").click(function(){
        analyticsEvents(event, "menu", "download_pdf", "download_pdf");
    });

    $("#lorem").click(function(){
        analyticsEvents(event, "analise", "ver_mais", "Lorem")
    });

    $("#ipsum").click(function(){
        analyticsEvents(event, "analise", "ver_mais", "Ipsum")
    });

    $("#dolor").click(function(){
        analyticsEvents(event, "analise", "ver_mais", "Dolor")
    });

});


