// index.js(process)

var onePage = function(){
    var pro_a = $("#gnb").find("a");
    pro_a.on("click", function(e){
        e.preventDefault();
        var a_hash = $(this.hash),
            offset_top = a_hash.offset().top,
            bodyBox = $("html,body");
        bodyBox.animate({scrollTop:offset_top - 200},1000);
    });
}