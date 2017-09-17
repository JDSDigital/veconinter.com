$(function () {
    /**
     * Top marquee with exchange rates
     */
    $('.marquee').marquee({
        duration: 20000,
        duplicated: true,
        pauseOnHover: true
    });

    /**
     * Image change in top header
     *
     * @type {string[]}
     */
    var headerImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'];
    var randomAll = Math.floor(Math.random() * headerImages.length);
    var randomMain = Math.floor(Math.random() * 2);
    var randomSelect = Math.floor((Math.random() * (headerImages.length - 2)) + 2);

    $('.main-slider').parallax({imageSrc: './img/header/full/' + headerImages[randomMain]});
    $('.secondary-slider').parallax({imageSrc: './img/header/full/' + headerImages[randomSelect]});
    $('.send-resume-block').parallax({imageSrc: './img/team2.jpg'});
    $('.values-row').parallax({imageSrc: './img/values.jpg'});
    $('.banner-vecoaccess').parallax({imageSrc: './img/type-away-vecoaccess.jpg'});
    $('.landing-slider').parallax({imageSrc: './img/slider-vecoaccess.jpg'});
    $('.landing-slider-2').parallax({imageSrc: './img/user-phone.jpg'});
    $('.landing-container').parallax({imageSrc: './img/header/full/01.jpg'});

    /**
     * Top nav bar opacity change on scroll
     */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#navigation_bar').css('opacity', 1);
        } else {
            $('#navigation_bar').css('opacity', 0.7);
        }
    });

    /**
     * Image changer on About Us accordion
     */
    $('#goal').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<img class="img-responsive m0a" src="./img/logo-spinner.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
    $('#mission').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Mission</h4>' +
            '<img class="img-responsive m0a" src="./images/toltip1.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
    $('#vision').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Vision</h4>' +
            '<img class="img-responsive m0a" src="./images/toltip1.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
    $('#policy').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Quality Policy</h4>' +
            '<img class="img-responsive m0a" src="./img/ISO_9001.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
    $('#technology').on('click', function() {
        $('#about-image').html('<div class="row text-center">' +
            '<h4>Technology</h4>' +
            '<img class="img-responsive m0a" src="./images/toltip1.png" alt="Veconinter ISO 9001" />' +
            '</div>'
        );
    });
});
