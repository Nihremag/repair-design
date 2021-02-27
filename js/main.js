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

    // Валидация формы
    $('.footer__form').validate({
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

        // Валидация формы
        $('.control__form').validate({
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

    // ютуб плеер
    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '465',
          width: '100%',
          videoId: 'RHzzLqJWqHs',
          events: {
            'onReady': videoPlay,
          }
        });
      })

      function videoPlay(event) {
          event.target.playVideo();
      }

    // создание yandex карты
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.24475235, 39.72312148],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш офис',
                balloonContent: 'Вход со двора'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/marker.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects
            .add(myPlacemark)
        myMap.behaviors
            .disable('scrollZoom');
    });
});

function ScrollDown(){
    let t, s;
    s = document.body.scrollDown||window.pageYOffset;
    t = setInterval(function()
    {
      if(s > 0)window.scroll(0, s+=5);
      else clearInterval(t)}, 0.1);
    }