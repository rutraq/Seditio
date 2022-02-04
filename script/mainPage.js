$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        window.scrollTo({
            top: -window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
        $("#rightBubble").animate({opacity: '1'}, 500);
    }
    else {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
        $(".header").addClass("fix");
        $("#rightBubble").animate({opacity: '0'}, 500);
        $("#centerBubble").addClass('rotation');
        $("#nftImg").animate({
            opacity: 1,
            top: '15%'
        }, 1500);

        $("#smart").animate({
            right: '20%',
            opacity: 1
        }, 1500);
        $("#future").animate({
            right: '27%',
            opacity: 1
        }, 1500);
        $("#new").animate({
            right: '15%',
            opacity: 1
        }, 1500);
        $("#trends").animate({
            right: '29%',
            opacity: 1
        }, 1500);

        $("#seditio").animate({
            top: '30%',
            opacity: 1
        }, 1200);
        $("#text").animate({
            top: '47%',
            opacity: 1
        }, 1200);
        $("#line").animate({
            top: '47%',
            opacity: 1
        }, 1200);
        $("#readMore").animate({
            top: '55%',
            opacity: 1
        }, 1200);
    }
});