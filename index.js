const list= "0123456789ABCDEF";
$(".button").click(function(){
    var color="#";
    for(var i=0;i<6;i++)
    {
        color+=list[Math.floor(Math.random()*list.length)];
    }
    $("body").css("background-color",color);
    $(".color").text(color);
    
});
