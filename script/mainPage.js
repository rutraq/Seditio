let page = 1;
let tmp = 100;
let scroll = true;

$(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // if (page === 2) {
        //     window.scrollTo({
        //         top: -window.innerHeight,
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        //     $("#rightBubble").animate({opacity: '1'}, 500);
        //     page--;
        // }
    } else {
        $(".header").addClass('fix');
        if (page === 1) {
            if (scroll) {
                scroll = false;
                start();
                page++;
            }
        } else if (page === 2) {
            if (scroll) {
                scroll = false;
                secondArticle();
                page++;
            }
        } else if (page === 3) {
            if (scroll) {
                scroll = false;
                fourthArticle();
                page++;
            }
        } else if (page === 4) {
            if (scroll) {
                scroll = false;
                fifthArticle();
                page++;
            }
        } else if (page === 5) {
            if (scroll) {
                scroll = false;
                sixthArticle();
                page++;
            }
        } else if (page === 6) {
            if (scroll) {
                scroll = false;
                seventhArticle();
                page++;
            }
        }
    }
});

function start() {
    $("#seditio").animate({left: '+=40%', opacity: 0}, 1200, 'swing');
    $("#bigFont div:first-child").animate({left: '-=40%', opacity: 0}, 1200, 'swing');
    $("#bigFont div:nth-child(2)").animate({left: '-=50%', opacity: 0}, 1200, 'swing');
    $("#bigFont div:last-child").animate({left: '-=35%', opacity: 0}, 1200, 'swing');

    $("#borderFont div:first-child").animate({left: '+=50%', opacity: 0}, 1200, 'swing');
    $("#borderFont div:nth-child(2)").animate({left: '+=60%', opacity: 0}, 1200, 'swing');
    $("#borderFont div:last-child").animate({left: '+=70%', opacity: 0}, 1200, 'swing');

    $(".footer .buttonHeader").animate({marginTop: '+=15%', opacity: 0}, 1200);

    let circleText = $("#circleText");
    circleText.animate({top: '-=25%', left: '-=2%', opacity: 0}, 1200, 'swing');
    $({degrees: 0}).animate({degrees: 100},
        {
            duration: 1200,
            step: function (now) {
                circleText.css({transform: 'rotate(' + now + 'deg)'});
            }
        });

    let leftBubble = $("#leftBubble");
    leftBubble.animate({left: '+=6%', top: '-=65%', width: '+=25%'}, 1600, 'swing')
        .animate({opacity: 1}, 300)
        .animate({top: '+=10%'}, 1000)
        .animate({top: '-130%'}, 1500,
            function () {
                firstArticle();
            });
    $({degrees: 0}).animate({degrees: -100},
        {
            duration: 1600,
            step: function (now) {
                leftBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: -100},
        {
            duration: 300,
            step: function (now) {
                leftBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: -80},
        {
            duration: 1000,
            step: function (now) {
                leftBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: -120},
        {
            duration: 1500,
            step: function (now) {
                leftBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        });

    let rightBubble = $("#rightBubble");
    rightBubble.animate({top: '-=35%', right: '-=10%'}, 1600, 'swing')
        .animate({opacity: 1}, 300)
        .animate({top: '+=10%'}, 1000)
        .animate({top: '-120%'}, 1500);
    $({degrees: 0}).animate({degrees: 50},
        {
            duration: 1600,
            step: function (now) {
                rightBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: 50},
        {
            duration: 300,
            step: function (now) {
                rightBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: 65},
        {
            duration: 1000,
            step: function (now) {
                rightBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: 30},
        {
            duration: 1500,
            step: function (now) {
                rightBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        });
}

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

function seventhArticle() {
    // previous article
    $("#tokenomics").animate({left: '+=15%', opacity: 0}, 2000);
    $("#tokenInfo").animate({top: '+=15%', opacity: 0}, 2000);
    let logo = $("#logoImg");
    $({degrees: -270}).animate({degrees: -450},
        {
            duration: 2000,
            step: function (now) {
                logo.css({transform: 'rotate(' + now + 'deg)'});
            }
        });
    logo.animate({width: '6%', height: '6%', top: '4.5%', left: '47%'}, 2000,
        function () {
            // new article
            $("#background").animate({top: '-10%'}, 1200, 'swing');
            $("#stayWith").animate({left: '15%', opacity: 1}, 1200, 'swing');
            $("#professional").animate({left: '15%', opacity: 1}, 1200, 'swing',
                function () {
                    scroll = true;
                });
        });
}

function fifthArticle() {
    // previous article
    $("#roadMap").animate({left: "+=6%"}, 1000).animate({left: "-=90%", opacity: 0}, 1500, 'swing');
    $("#phases").animate({left: "+=1%"}, 1000).animate({left: "-=60%", opacity: 0}, 1500, 'swing');
    $("#phase1").animate({left: "+=1%"}, 1000).animate({left: "-=60%", opacity: 0}, 1500, 'swing');

    let bigBubble = $("#bigBubble");
    bigBubble.animate({left: '-=3%', top: '-=2%'}, 1000)
        .animate({left: '+=55%', width: '+=60%', top: '-=45%'}, 2000, 'swing')
        .animate({left: '-=10%'}, 1200, 'swing');
    $({degrees: tmp}).animate({degrees: tmp - 10},
        {
            duration: 1000,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: tmp + 125},
        {
            duration: 2000,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: tmp + 105},
        {
            duration: 1200,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        });
    tmp += 105;

    //new article
    $("#things").animate({opacity: 0}, 1500)
        .animate({left: '17%', opacity: 1}, 1500, 'swing')
        .animate({left: '-=2%'}, 1200);
    $("#marketplace").animate({opacity: 0}, 1500)
        .animate({top: '35%', opacity: 1}, 1500, 'swing')
        .animate({top: '+=2%'}, 1200);
    $("#percentage1").animate({opacity: 0, top: '+=3%'}, 1500)
        .animate({top: '-=5%', opacity: 1}, 1500, 'swing')
        .animate({top: '+=2%'}, 1200);
    $("#percentage2").animate({opacity: 0, top: '+=3%'}, 1500)
        .animate({top: '-=5%', opacity: 1}, 1500, 'swing')
        .animate({top: '+=2%'}, 1200);
    $("#percentage3").animate({opacity: 0, top: '+=3%'}, 1500)
        .animate({top: '-=5%', opacity: 1}, 1500, 'swing')
        .animate({top: '+=2%'}, 1200);
    $("#percentage4").animate({opacity: 0, top: '+=3%'}, 1500)
        .animate({top: '-=5%', opacity: 1}, 1500, 'swing')
        .animate({top: '+=2%'}, 1200,
            function () {
                scroll = true;
            });
}

function sixthArticle() {
    //previous article
    $("#things").animate({left: '-=3%'}, 1200, 'swing')
        .animate({left: '60%', opacity: 0}, 1500, 'swing');
    $("#marketplace").animate({left: '+=3%'}, 1200, 'swing')
        .animate({left: '-60%', opacity: 0}, 1500, 'swing');
    $("#percentage1").animate({opacity: 1}, 1200)
        .animate({top: '90%', opacity: 0}, 1500, 'swing');
    $("#percentage2").animate({top: '-=1%'}, 1200, 'swing')
        .animate({top: '100%', opacity: 0}, 1500, 'swing');
    $("#percentage3").animate({top: '-=2%'}, 1200, 'swing')
        .animate({top: '120%', opacity: 0}, 1500, 'swing');
    $("#percentage4").animate({top: '-=2%'}, 1200, 'swing')
        .animate({top: '120%', opacity: 0}, 1500, 'swing');

    let bigBubble = $("#bigBubble");
    $({degrees: tmp}).animate({degrees: tmp + 30},
        {
            duration: 1200,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: tmp - 130},
        {
            duration: 1500,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        });
    bigBubble.animate({left: '+=5%', top: '-=15%'}, 1200, 'swing')
        .animate({left: '-130%', top: '100%'}, 1500, 'swing');
    $("#logoHeader").animate({opacity: 1}, 1200).animate({opacity: 0}, 1500,
        function () {
            let logo = $("#logoImg");
            logo.animate({width: '20%', height: '20%', opacity: 1, top: '19%', left: '40%'}, 1500);
            $({degrees: 0}).animate({degrees: -270},
                {
                    duration: 1500,
                    step: function (now) {
                        logo.css({transform: 'rotate(' + now + 'deg)'});
                    }
                });

            //new article
            $("#tokenomics").animate({top: '-=20%', opacity: 1}, 1500);
            $("#tokenInfo").animate({top: '-=12%', opacity: 1}, 1500,
                function () {
                    scroll = true;
                });
        });
}

function thirdArticle() {
    let bigBubble = $("#bigBubble");
    $({degrees: tmp}).animate({degrees: tmp + 180},
        {
            duration: 2000,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: tmp + 170},
        {
            duration: 1000,
            step: function (now) {
                bigBubble.css({transform: 'rotate(' + now + 'deg)'});
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
        }, 1500).animate({top: '55%'}, 700,
        function () {
            scroll = true;
        });
}

function fourthArticle() {
    $(".header").addClass("fix");
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
                $("#bigBubble").css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: tmp + 200},
        {
            duration: 2500,
            step: function (now) {
                $("#bigBubble").css({transform: 'rotate(' + now + 'deg)'});
            }
        }).animate({degrees: tmp + 180},
        {
            duration: 800,
            step: function (now) {
                $("#bigBubble").css({transform: 'rotate(' + now + 'deg)'});
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
    ,
        function () {
            scroll = true;
        });
}

function firstArticle() {
    $(".header").addClass("fix");
    $("#rightBubble").animate({opacity: '0'}, 500);
    $("#centerBubble").addClass('rotation');
    $("#nftImg").animate({
        opacity: 1,
        top: '15%'
    }, 1500,
        function () {
            scroll = true;
        });

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
