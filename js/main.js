$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $("[data-toggle=modal]");
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                rangelength: [2, 15]
            },
            userPhone: "required",
            // правило-объект
            userEmail: {
              required: true,
              email: true
            }
          }, // сообщения
          messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух символов",
                rangelength: "Имя должно быть не длиннее 15 символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите E-mail",
              email: "Введите в формате: name@domain.com"
            }
        }
    });

    // маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00' , {placeholder: "+7 (___) __-__-___"});
});