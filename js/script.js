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

    var headerImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'];
    var randomAll = Math.floor(Math.random() * headerImages.length);
    var randomMain = Math.floor(Math.random() * 2);

    $('.main-slider').parallax({imageSrc: './img/header/full/' + headerImages[randomMain]});
    $('.services-slider').parallax({imageSrc: './img/header/full/' + headerImages[randomAll]});
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

    $('#goal').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<img class="img-responsive m0a" src="./img/logo-spinner.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
    $('#mission').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Mission</h4>' +
            '</div>'
        );
    });
    $('#vision').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Vision</h4>' +
            '</div>'
        );
    });
    $('#policy').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<img class="img-responsive m0a" src="./img/ISO_9001.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
    $('#technology').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Technology</h4>' +
            '</div>'
        );
    });
});
