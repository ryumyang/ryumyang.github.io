// sub02.js

$(document).ready(function(){
    
    var li = $('.nav>ul>li');
   li.on('mouseenter',function(){
       $(this).children('ul').stop().slideDown();
   }).on('mouseleave', function(){
       $(this).children('ul').stop().slideUp();
   });
    
   var sbox = $('.slideBox');
       sbox.hide();
    $('.more').on('click', function(){
        sbox.slideDown(500);
    });
    
// video ------------------------------------
    $("#popupBox1").hide();
    
    $('.my_video').on('click',function(){
      var mv_video = $(this).attr('data-mv');
     $("#popupBox1").fadeIn();
     $(".contentPopup")
          .find('iframe')
          .attr('src', mv_video);
    });
  
    var popup = $("#popupBox1"),
        videoLink = $("#main").find("iframe"),
        video = $(".contentPopup");
  
    $(".close").on("click", function(){
        popup.fadeOut();
      });
    
//    video.css("overflow", "hidden")
//         .html("<iframe>")
//         .find("iframe")
//         .width(100 + "%");
    
//        .attr("src","https://www.youtube.com/embed/vcAKCDdNHqs");
    
////    
//    videoLink.on("click", function(e){
//        e.preventDefault();
//        var $this = $(this),
//            dataMv = $this.find("iframe").attr("data-mv");
//        popup.fadeIn();
//        video.find("iframe").attr("src", dataMv);
//        });
  

    });
















