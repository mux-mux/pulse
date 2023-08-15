$(document).ready(function () {
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active')
      .siblings()
      .removeClass('catalog__tab_active')
      .closest('div.container')
      .find('div.catalog__content')
      .removeClass('catalog__content_active')
      .eq($(this).index())
      .addClass('catalog__content_active');
  });

  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__benefits').eq(i).toggleClass('catalog-item__benefits_active');
    });
  });

  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__benefits').eq(i).toggleClass('catalog-item__benefits_active');
    });
  });

  // Modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });
  $('.button_submit').on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.overlay, #order, #consultation').fadeOut();
    $('.overlay, #thanks').fadeIn();
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  //Validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Будь ласка, введіть своє ім'я",
          minlength: jQuery.validator.format('Будь ласка, введіть мін {2} символа!'),
        },
        phone: 'Будь ласка, введіть свій номер телефону',
        email: {
          required: 'Будь ласка, введіть свою пошту',
          email: 'Формат почти name@domain.com',
        },
      },
    });
  }
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask('+38(999)999-99-99');

  $('form').on('submit', function (e) {
    e.preventDefault();
    if ($(this).children('input.error').length === 0) {
      $.ajax({
        type: 'POST',
        url: e.target.action,
        data: $(this).serialize(),
      }).done(function () {
        $(this).find('input').val('');
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();
        $('form').trigger('reset');
      });
    }
    return false;
  });

  //Scrolling
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  new WOW().init();
}); //jQuery ends

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  speed: 500,
  center: true,
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
