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

$( "#rightBubble" ).animate({
    right: '5%',
    top: '-110%'
}, 0, function() {
}).animate({
    top: '+=121%',
    right: '-=21%'
}, 2000, function() {
});