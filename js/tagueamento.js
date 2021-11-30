// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

$(document).ready(function() {

    <!-- Google Analytics -->
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'pageview');
    <!-- End Google Analytics -->


    document.getElementById("contato").onclick = function() {analyticsEvents(event, "menu", "entre_em_contato", "link_externo")}
    document.getElementById("download").onclick = function() {analyticsEvents(event, "menu", "download_pdf", "download_pdf")}

//    document.getElementsByClassName('card card-montadoras')[0].onclick = function() {analyticsEvents(event, "teste", "teste", "teste")}

//    $("card card-montadoras").click(function(){
//        analyticsEvents(event, "menu", "entre_em_contato", "link_externo")
//    });

//    document.getElementsByClassName('card card-montadoras')[0]
//        .addEventListener('click', analyticsEvents(event, "teste", "teste", "teste"));

    // Function to send events to google analitycs
    function analyticsEvents(e, eventCategory, eventAction, eventLabel) {
      console.log(e, eventCategory, eventAction, eventLabel);
      ga('send', 'event', eventCategory, eventAction, eventLabel);
    }


});


