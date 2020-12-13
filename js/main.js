const txtSlide = $("#txtSlide .txtWrap");

setInterval(function(){
    txtSlide.animate({left:"-100%"},
    function(){
        $(".slides:first-child").appendTo(txtSlide);
        txtSlide.css("left","")
    })
},4000);

// #txtSlide

$("#gnb .gnbList > li .depth01").on("click",function(){
    $(this).next(".depth02").toggleClass("on");
    $(this).parents().siblings().find(".depth02").removeClass("on");
    return false;
});


$(".search > a").on("click",function(){
    $(".searchBox").toggleClass("on");
    return false;
});

$(".btnClose").on("click",function(){
    $(".depth02").removeClass("on");
    $(".searchBox").removeClass("on");
});

$(".gnbBtn").on("click",function(){
    $("#gnb").toggleClass("on");
});

$("#gnb > .btnClose").on("click",function(){
    $("#gnb").removeClass("on");
});

// #header

$(".btnWish").on("click",function(){
    $(this).next("#login").fadeIn(250);
    $("#login .loginWrap").slideDown(350);
});

$("#login .loginWrap > .btnClose").on("click",function(){
    $(this).parents("#login").fadeOut(250);
    $("#login .loginWrap").slideUp(350);
});
// .btnWish



$("#section02  .btnMore").on("click",function(){
    $("#section02 .communityList li:nth-child(n+10)").fadeIn(250);
    $(this).hide();
    return false;
});

// #section02

$(".footerList > li:nth-child(5) .depthBtn").on("click",function(){
    $(this).toggleClass("on");
    $(this).next(".footerDepth").stop().slideToggle();
})

$(window).on("resize",function(){
    let w = $(window).width()+17;
    if(w <= 870){
        if(!$("body").hasClass("resize")){
            $("body").addClass("resize");
        }
    } else  {
        if($("body").hasClass("resize")){
            $("body").removeClass("resize");
        }
    }
});

$(window).on("scroll",function(){
    let st = $(window).scrollTop();
    if(st > 0){
        $("#header").css({
            top:0,
        });
    } else if(st <= 0){
        $("#header").css({
            top:"70px",
        });
    }
    
});

let ratio = window.devicePixelRatio;
console.log(ratio);
if(ratio >= 2 && $(window).width()+17 <= 1500) {
    $("#sideBar").hide();
} else {
    $("#sideBar").show();
};