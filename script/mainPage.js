$(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        window.scrollTo({
            top: -window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
    else {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
});