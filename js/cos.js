$(document).ready(function(){
    
    /* logo position */
    $(window).on("scroll",function(){
        var s = $("html").scrollTop();
        if(s >= 40){
            $(".top-menu").css({
                "position":"fixed",
                "top":"0px"
            });
        }else{
            $(".top-menu").css({
                "position":"relative"
            });      
        }
    });
    
    $(".scroll-up").on("click",function(){
        $("html").animate({
            scrollTop:"0px"
        });
    });    
    
    /* mobile menu open-close */
    $(".mo-open").on("click",function(){
        $(".mo-menu-bg").addClass("on");
        $("#mo-menu").addClass("on"); 
    });
        
    $(".mo-close").on("click",function(){
        $("#mo-menu").removeClass("on"); 
        $(".mo-menu-bg").removeClass("on");
        $("#mo-sub-wrap").removeClass("on");
    });
    
    /* mo-sub-menu tap */
    $("#mo-gnb > li").on("click",function(){
        var subidx = $(this).index();
        $("#mo-sub-wrap").addClass("on");
        $("#mo-sub-wrap > .mo-sub").hide();
        $("#mo-sub-wrap > .mo-sub").eq(subidx).show();
    });
    $(".mo-sub > .sub-title > span").on("click",function(){
        $("#mo-sub-wrap").removeClass("on");
    });
    
    /* pc-sub-menu open*/
    $("nav").on("mouseover",function(){
        $(".top-menu").stop().addClass("on");
    });
    $(".top-menu").on("mouseout",function(){
        $(".top-menu").stop().removeClass("on");
    });
    
    /* pc-sub-menu tap*/
    $("#gnb > li").on("mouseover",function(){
        var pcsubidx = $(this).index();
        $(".gnb-sub-wrap > .sub-inner").hide();
        $(".gnb-sub-wrap > .sub-inner").eq(pcsubidx).show();
    });
    
    /* main-slide */
    var $slides = $(".slide");
    var current = 0;
    $slides.css("display","none");
    $slides.eq(0).css("display","block");

    function fnShow(idx){ 
        $slides.hide();
        $slides.eq(idx).show();
        current = idx;
    }

    function setSlide(){
        if(current == 1){
            fnShow(0);
        }else{ 
            fnShow(1);
        }
    }

    setInterval(setSlide, 1500);
    
    
    /* notice-popup close */
    $(".popup-close").on("click",function(){
        $(".notice-popup").css("display","none");
    });
});

