let page = 2;
secondArticle();

$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        if (page === 2) {
            window.scrollTo({
                top: -window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
            $("#rightBubble").animate({opacity: '1'}, 500);
            page--;
        }
    }
    else {
        if (page === 1) {
            secondArticle();
            page++;
        } else if (page === 2) {
            thirdArticle();
            page++;
        }
    }
});

function thirdArticle() {
    $("#nftImg").animate({top: '+=5%'}, 700).animate({top: '-100%'}, 1400, 'swing');
    $("#smart").animate({right: '-=3%'}, 700).animate({left: '-100%'}, 1400, 'swing');
    $("#new").animate({right: '-=4%'}, 700).animate({left: '-100%'}, 1400, 'swing');
    $("#future").animate({right: '-=2%'}, 700).animate({left: '-100%'}, 1400, 'swing');
    $("#trends").animate({right: '-=2%'}, 700).animate({left: '-100%'}, 1400, 'swing');
    $("#seditioText").animate({left: '+=1%'}, 700).animate({left: '-100%'}, 1400, 'swing');
    $("#text").animate({left: '+=3%'}, 700).animate({left: '-100%'}, 1200, 'swing');
    $("#line").animate({left: '+=3%'}, 700).animate({left: '-100%'}, 1200, 'swing');
    $("#readMore").animate({left: '+=3%'}, 700).animate({left: '-100%'}, 1200, 'swing', function () {
        $("#centerBubble").addClass("rotationLeft");
        fourthArticle();
    });
}

function fourthArticle() {
    $("#bigBubble").addClass('rotation');
    $("#mainDirections").animate({
       right: '15%',
       opacity: 1
    }, 1500);
}

function secondArticle() {
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

    $("#seditioText").animate({
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