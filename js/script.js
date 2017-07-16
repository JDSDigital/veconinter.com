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
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#navigation_bar').css('opacity', 1);
        } else {
            $('#navigation_bar').css('opacity', 0.7);
        }
    });

    $('#menu1').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-alarm services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Demurrage Detention & Deposit Management</h4>' +
            '</div>'
        );
    });
    $('#menu2').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-search services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Inspections</h4>' +
            '</div>'
        );
    });
    $('#menu3').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-wrench services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Damage Recovery</h4>' +
            '</div>'
        );
    });
    $('#menu4').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-briefcase3 services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Insurance Programs</h4>' +
            '</div>'
        );
    });
    $('#menu5').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-shipping services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Equipment Control</h4>' +
            '</div>'
        );
    });
    $('#menu6').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="fa fa-ship services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Ocean Freight & Administrative</h4>' +
            '</div>'
        );
    });
    $('#menu7').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-cog services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Specialized Workshops</h4>' +
            '</div>'
        );
    });
    $('#menu8').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="ico-university services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Consulting Practice</h4>' +
            '</div>'
        );
    });
    $('#menu9').on('click', function() {
        $('#menu-icon').html('<div class="row">' +
            '<i class="fa fa-laptop services-icon"></i>' +
            '</div>' +
            '<div class="row">' +
            '<h4>Customer On-line Tool</h4>' +
            '</div>'
        );
    });
});
