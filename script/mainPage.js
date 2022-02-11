let page = 3;
let tmp = 100;
thirdArticle();

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
            firstArticle();
            page++;
        } else if (page === 2) {
            secondArticle();
            page++;
        } else if (page === 3) {
            fourthArticle();
            page++;
        }
    }
});

function secondArticle() {
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
        thirdArticle();
    });
}

function thirdArticle() {
    let bigBubble = $("#bigBubble");
    $({degrees: tmp}).animate({degrees: tmp + 180},
        {
            duration: 2000,
            step: function (now) {
                bigBubble.css({transform: 'rotate('+ now +'deg)'});
            }
        }).animate({degrees: tmp + 170},
        {
            duration: 1000,
            step: function (now) {
                bigBubble.css({transform: 'rotate('+ now +'deg)'});
            }
        });
    tmp += 170;
    bigBubble.animate({
        left: '35%'
    }, 2000);
    bigBubble.animate({
        left: '38%'
    }, 1000);
    $("#mainDirections").animate({opacity: 0}, 3000)
        .animate({
        right: '15%',
        opacity: 1
    }, 1500).animate({right: '14%'}, 700);
    $(".photoBlock").animate({opacity: 0}, 3000)
        .animate({
            opacity: 1,
            top: '54%'
        }, 1500).animate({top: '55%'}, 700);
}

function fourthArticle() {
    $("#mainDirections").animate(
        {
            right: '+=1%'
        },
        800
    )
        .animate(
            {
                opacity: 0,
                right: '-=35%'
            }, 1200);
    $(".photoBlock").animate(
        {
            top: '-=1%'
        },
        800
    );
    $("#photoBlock1").animate(
        {
            opacity: 0,
            top: '+=45%'
        }, 1200, 'swing'
    );
    $("#photoBlock2").animate(
        {
            opacity: 0,
            top: '+=35%'
        }, 1200, 'swing'
    );
    $("#photoBlock3").animate(
        {
            opacity: 0,
            top: '+=30%'
        }, 1200, 'swing'
    );

    $({degrees: tmp}).animate({degrees: tmp - 10},
        {
            duration: 800,
            step: function (now) {
                $("#bigBubble").css({transform: 'rotate('+ now +'deg)'});
            }
        }).animate({degrees: tmp + 200},
        {
            duration: 2500,
            step: function (now) {
                $("#bigBubble").css({transform: 'rotate('+ now +'deg)'});
            }
        }).animate({degrees: tmp + 180},
        {
            duration: 800,
            step: function (now) {
                $("#bigBubble").css({transform: 'rotate('+ now +'deg)'});
            }
        });
    tmp += 180;
    let bigBubble = $("#bigBubble");
    bigBubble.animate(
        {
            left: '+=2%'
        }, 800, function () {
            $("#roadMap").animate({opacity: 0}, 700).animate({opacity: 1}, 2000);
            $("#phases").animate({opacity: 0}, 700).animate({opacity: 1}, 2000);
            $("#phase1").animate({opacity: 0}, 700).animate({opacity: 1}, 2000);
        }
    ).animate(
        {
            left: '-95%'
        }, 2500, 'swing'
    ).animate(
        {
            left: '-80%'
        }, 800, 'swing'
    );
}

function firstArticle() {
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