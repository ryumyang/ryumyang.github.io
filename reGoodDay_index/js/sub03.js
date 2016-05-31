// sub03.js

$(document).ready(function(){
    var li = $('.nav>ul>li');
    
    li.on('mouseenter',function(){
       $(this).children('ul').stop().slideDown();
   }).on('mouseleave', function(){
       $(this).children('ul').stop().slideUp();
   });
    var btnFin = $('.btn_fin'),
        btnIng = $('.btn_ing'),
        conFin = $('#content_fin'),
        conIng = $('#content_ing');
    
    btnFin.on('click', function(){
        conIng.hide();
        conFin.show();
    })
    btnIng.on('click', function(){
        conFin.hide();
        conIng.show();
    })
});