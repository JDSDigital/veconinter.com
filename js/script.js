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
    $('.main-slider').parallax({imageSrc: '../img/02.jpg'});
});
