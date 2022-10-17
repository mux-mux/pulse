$(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 500,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/left-arrow.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/right-arrow.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }
//             }
//         ]
//       });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

        // Modal
        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn();
        });
        $('.button_submit').on('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.overlay, #order, #consultation').fadeOut();
            $('.overlay, #thanks').fadeIn();
        });

        $('.button_mini').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn();
            })
        });
    
        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        });

        //Validate
        function validateForms(form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                      },             
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {required:"Пожалуйста, введите свое имя", 
                        minlength: jQuery.validator.format("Пожалуйста, введите мин. {0} символа!")},
                    phone: "Пожалуйста, введите свой номер телефона",
                    email: {required: "Пожалуйста, введите свою почту",
                        email: "Формат почты name@domain.com"
                    }
                }
            });
        }
        validateForms('#consultation-form');
        validateForms('#consultation form');
        validateForms('#order form');

        
});//jQuery ends

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    speed: 500,
    center: true
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
