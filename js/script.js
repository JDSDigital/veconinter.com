/*
jQuery('#rev_slider_1').show().revolution({
 
    sliderType: 'carousel',
 
    carousel: {
 
        maxVisibleItems: 5,
        space: 10,
        infinity: 'on',
        stretch: 'off',
 
        border_radius: '10px',
        horizontal_align: 'center',
 
        fadeout: 'off',
        vary_fade: 'off',
 
        vary_rotation: 'off',
        maxRotation: 0,
 
        vary_scale: 'off',
        minScale: 50
 
    },
});*/
$(function () {
    $('.marquee').marquee({
        duration: 20000,
        duplicated: true,
        pauseOnHover: true
    });
    $('.main-slider').parallax({imageSrc: './img/03.jpg'});
    $('.services-slider').parallax({imageSrc: './img/01.jpg'});
    //$('.values-row').parallax({imageSrc: './img/03.jpg'});
    $('.send-resume-block').parallax({imageSrc: './img/team2.jpg'});
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#navigation_bar').css('opacity', 1);
        } else {
            $('#navigation_bar').css('opacity', 0.7);
        }
    });

});
