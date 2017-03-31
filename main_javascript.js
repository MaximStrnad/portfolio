$(document).ready(function() {


$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html, body').animate({
scrollTop: target.offset().top
}, 1000);
return false;
}
}
});
});
var imagesKonc = ["media/images/hitech.png","media/images/hitech1.png","media/images/hitech2.png"];
var imagesArgentina = ["media/images/argentina.png","media/images/argentina1.png","media/images/argentina2.png","media/images/argentina3.png",]
var ki = 1;
var ai = 1;
var newimg = setInterval(function(){
    if(ki == imagesKonc.length ){
        ki = 0;
        $(".koncept").attr("src",imagesKonc[ki]);
        ki++;
    }else{
        $(".koncept").attr("src",imagesKonc[ki]);
        ki++;
    }


},10000)
var newimga = setInterval(function(){
    if(ai == imagesArgentina.length ){
        ai = 0;
        $(".argentina").attr("src",imagesArgentina[ai]);
        ai++;
    }else{
        $(".argentina").attr("src",imagesArgentina[ai]);
        ai++;
    }
},9000)
});
