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
    $('.services-parallax').parallax({imageSrc: './img/containers.jpg'});
    $('.counters_services').parallax({imageSrc: './img/containers.jpg'});
    $('.landing-slider-3').parallax({imageSrc: './img/user-app-1.jpg'});
    //$('.landing-slider-3-2').parallax({imageSrc: './img/user-app-2.jpg'});

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
            '<h4>About</h4>' +
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

    $('.country-link').on('click', function () {
        var country = $(this).attr('id');

        if (country == 'usa') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Miami Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td>' +
                                '<p>7205 N.W. 19th Street, Suite 303</p>' +
                                '<p>Miami, FL 33126 USA</p>' +
                            '</td>' +
                            '<td>' +
                                '<ul>' +
                                    '<li>Customer Service (Toll free):</li>' +
                                    '<li>+1 888-8414972</li>' +
                                    '<li>+1 305-5927857</li>' +
                                    '<li>+1 305-3359551</li>' +
                                    '<li>Fax: +1 305-6299847</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );
        } else if (country == 'barbados') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Bridgetown Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>First Floor, Office #2, Thomas Daniel Building, Hincks Street</p>' +
                                '<p>Bridgetown, Barbados, 11000</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+1 246-2283039</li>' +
                                    '<li>+1 246-4262193</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'brasil') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                            '<h6>Santos Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Praça Belmiro Ribeiro, n° 05 – Térreo. Vila Mathias</p>' +
                                '<p>Santos – São Paulo – CEP: 11075-210</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+55 13-21029292</li>' +
                                    '<li>+55 13-21029293</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'colombia') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Bogotá Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Calle 19 No. 6-68 Edificio Ángel Oficina 1306-07</p>' +
                                '<p>Bogotá D.C. Colombia, 110311</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+57 1-704-4626</li>' +
                                    '<li>+57 1-704-6319</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Barranquilla Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Carrera 52 # 75-27, local 20, piso 3</p>' +
                                '<p>Colombia, 080020</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+57 5-356-1980</li>' +
                                    '<li>+57 5-356-0953</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Buenaventura Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Calle 7 No. 3 – 11 Edificio Pacific Trade Center Of 904</p>' +
                                '<p>Colombia, 764501</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+57 2-242-2772</li>' +
                                    '<li>+57 2-242-2773</li>' +
                                    '<li>+57 2-242-6980</li>' +
                                    '<li>+57 2-242-6353</li>' +
                                    '<li>+57 2-241-4131</li>' +
                                '</ul>' +
                            '</td>' +
                            '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Cartagena Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Manga CR 25 #25A-40 Oficina 102 Edificio Globalog</p>' +
                                '<p>Colombia, 130001</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+57 5-660-1399</li>' +
                                    '<li>+57 5-660-1569</li>' +
                                    '<li>+57 5-664-8381</li>' +
                                    '<li>+57 5-668-5926</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'costarica') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>San Antonio of Belén Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>De la esquina Noroeste de la plaza, 50 mts Norte, C.C. Paseo Belén, Oficina #14</p>' +
                                '<p>Costa Rica, 40701</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+506 223-96889</li>' +
                                    '<li>+506 223-96891</li>' +
                                    '<li>+506 223-96895</li>' +
                                    '<li>Fax: +506 223-96895</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'fiji') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Suva Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Lot 1, Foster Road, Walu Bay</p>' +
                                '<p>Suva, Fiji</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+679 – 809 14 31</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'guyana') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Georgetown Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>W 1/2 85 Quamina St. Middle Level</p>' +
                                '<p>Cumminsburg</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+592 – 226 34 92</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'haiti') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Port – au – Prince Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Port Lafito – Dry Terminal Route Nationale No.1 Chancerelles</p>' +
                                '<p>Port – au – Prince, Haití</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+509 – 291 63 030</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'honduras') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Puerto Cortés Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>1ra Avenida, 14 ava Calle.</p>' +
                                '<p>Barrio la Curva, Plaza la curva, frente a la policía Nacional de Puerto Cortes.</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+504 – 2665 0860</li>' +
                                    '<li>+504 – 2665 0855</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'mexico') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Mexico City D.F Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Homero 203; Piso 9, Polanco V Secc</p>' +
                                '<p>CP 11560, CD de MX, DF.11560</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+52 55-33005308</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'panama') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Panamá Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Panamá Port Company, Avenida Arnulfo Arias, Muelle 18, Edificio 1501, Piso 1</p>' +
                                '<p>Balboa, Panamá, 0833-0207</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+507 800-0138</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'puertorico') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>San Juan Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>1225 Ave. Ponce de León; VIG Tower Suite GF-2A-2</p>' +
                                '<p>Santurce, PR 00907</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+1 787-7052658</li>' +
                                    '<li>Fax: +1 787-7052661</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'sintmaarten') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Pointe Blanche Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Goldfinch Road # 1</p>' +
                                '<p>Pointe Blanche. Sint Maarten. 97150</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+1 721-5439780</li>' +
                                    '<li>+1 721-5439786</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'trinidad') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Port of Spain Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Veconinter Trinidad & Tobago Limited,</p>' +
                                '<p>11 Stone Street, Port of Spain, Trinidad, 120110</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+1 868-2535832</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Point Lisas Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Industrial Estate, Old Call up Center, Atlantic Avenue</p>' +
                                '<p>Trinidad, 120110</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+1 868 6364545</li>' +
                                    '<li>+1 868 6795163</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );

        } else if (country == 'venezuela') {
            $('.modal-body').html('' +
                '<div class="table-responsive">' +
                    '<table class="table">' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Caracas Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Av. Rio Caura, Torre Humboldt, Piso 14 Oficina 14. Frente al Centro Comercial Concresa</p>' +
                                '<p>Prados del Este. Municipio Baruta. Caracas, 1080</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 212-976.42.69</li>' +
                                    '<li>Fax: +58 212-976.56.73</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>El Guamache Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Carretera vía al Puerto Internacional El Guamache, Locales Transmarca Oficina 2 y 3</p>' +
                                '<p>Municipio Autónomo Tubores, Edo Nueva Esparta, 6301</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 295-297.41.18</li>' +
                                    '<li>+58 295-8085008</li>' +
                                    '<li>+58 295-8085009</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Guanta Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Av. Arizaleta cruce con calle 12 de octubre casa N° 11, residencias Luisa Maria Piso 2 oficina 3H</p>' +
                                '<p>Guanta estado Anzoátegui. Guanta, 6014</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 281-268.38.20</li>' +
                                    '<li>+58 281-268.42.49</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Guaranao Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Av Girardot, sector Santa Irene, Centro Comercial Doral. Piso 2. Consultorio 2</p>' +
                                '<p>Municipio Carirubana, Punto Fijo, Estado Falcón, 4102</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 242-361.36.18</li>' +
                                    '<li>+58 242-361.24.62</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Maracaibo Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Avenida 4 Bella Vista, Centro Comercial Akrai Center, Local C-3</p>' +
                                '<p>Maracaibo, 4001</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 261-721.26.81</li>' +
                                    '<li>+58 261-723.19.62</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>La Guaira Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Av. Soublette, Centro Comercial Litoral, nivel 2, oficina 39 local 39-40</p>' +
                                '<p>Maiquetía. Frente a los bomberos de La Guaira, 1160</p>' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 212-5143290</li>' +
                                    '<li>+58 212-332.02.51</li>' +
                                    '<li>+58 212-976.42.69</li>' +
                                    '<li>+58 212-514.32.91</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td class="country-office" colspan="2">' +
                                '<h6>Puerto Cabello Office</h6>' +
                            '</td>' +
                        '</tr>' +
                        '<tr class="text-left">' +
                            '<td width="60%">' +
                                '<p>Calle Municipio, con Calle Templo Zona Colonial, frente a la Catedral San José, Edificio Centro Empresarial Marítimo</p>' +
                                '<p>Puerto Cabello, 2050' +
                            '</td>' +
                            '<td width="40%">' +
                                '<ul>' +
                                    '<li>+58 269-246.66.43</li>' +
                                    '<li>+58 242-361.36.18</li>' +
                                    '<li>+58 242-361.24.62</li>' +
                                '</ul>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                    '<button class="mato_button medium_btn bottom_space" data-dismiss="modal">Close</button>' +
                '</div>'
            );
        }
        /* <button type="button" class="close" data-dismiss="modal">&times;</button> */
        $('#country-modal').modal('toggle');
    })
});

(function ($) {

    $.fn.SameHeight = function () {

        diffBoxAndContent = 0;

        this.run = function () {
            // Boxes
            var bhs = this.map(function () {
                return $(this).height();
            }).get();
            var mbh = Math.max.apply(null, bhs);

            // Contents
            var chs = this.children().map(function () {
                return $(this).height();
            }).get();
            var mch = Math.max.apply(null, chs);

            diffBoxAndContent = mbh - mch;
            this.height(mbh);
        };

        this.update = function () {
            var chs = this.children().map(function () {
                return $(this).height();
            }).get();
            var mch = Math.max.apply(null, chs);
            var newHeight = mch + diffBoxAndContent;
            this.height(newHeight);
        }

        this.run()
        my = this;
        var resize = function () {
            my.update();
        }
        $(window).resize(resize);

        return this;
    };
})(jQuery);