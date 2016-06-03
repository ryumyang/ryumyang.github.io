// sub01.js

$(document).ready(function(){
    var li = $('.nav>ul>li');
   li.on('mouseenter',function(){
       $(this).children('ul').stop().slideDown();
   }).on('mouseleave', function(){
       $(this).children('ul').stop().slideUp();
   });
    var conEx = $("#content .ex"),
        imgBtn = $("#gd_img .btn"),
        div = $('#content>div');
    
   conEx.hide();
    imgBtn.on("click",function(){
        div.eq( $(this).index() )
            .toggle("clip");
    })
});