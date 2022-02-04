$( "#seditio" ).animate({
    left: '-=100%',
    opacity: 0
}, 0, function() {
}).animate({
    left: '+=105%',
    opacity: 1
}, 2000, function() {
}).animate({
    left: '-=5%',
}, 1000, function() {
});


$( "#bigFont" ).animate({
    opacity: 0
}, 0, function() {
});

$( "#circleText" ).animate({
    opacity: 0
}, 0, function() {
});

$( "#borderFont" ).animate({
    right: '70%',
    opacity: 0
}, 0, function() {
}).animate({
    right: '-=17%',
    opacity: 1
}, 2000, function() {
}).animate({
    right: '+=2%',
}, 1000, function() {
});




// $( "#leftBubble" ).animate({
//     top: '100%',
//     left: '20%'
// }, 0, function() {
// }).animate({
//     top: '-=114%',
//     left: '-=38%'
// }, 2000, function() {
// });






    // .animate(
    //     { deg: 180 },
    //     {
    //         left: '+=20%',
    //         duration: 5000,
    //         step: function(now) {
    //             $(this).css({ transform: 'rotate(' + now + 'deg)' });
    //         }
    //     }
    // );