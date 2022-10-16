// $(document).ready(function(){
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
//   });

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
