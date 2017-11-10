var kazanMap, myplacemark1, myplacemark2, myplacemark3;
$(document).ready(function() {
    if ($("body").width() > 991) {
        $("body").prepend($(".stycky-wrap").clone().addClass("fixed-header"));
        $(window).scroll(function () {
            if ($(window).scrollTop() > 500) {
                $(".fixed-header").addClass("sticky");
                $(".blog-right, .--sticky-col, .product-right, .cart-col").addClass("header-fix");
                $(".scroll-top").fadeIn();

            } else {
                $(".fixed-header").removeClass("sticky");
                $(".blog-right, .--sticky-col, .product-right, .cart-col").removeClass("header-fix");
                $(".scroll-top").fadeOut();

            }
        });
        $(".scroll-top").on('click', function() {
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 600);
            return false;
        });
    }
    /*
    //слайдер товаров на главно
    $('.filtering').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.adress-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    //фильтрация в слайдере товаров на главной
    $('.slider-nav__link').on('click', function(e){
        var val = $(this).attr("data-filter");
        $(this).closest(".filter-slider").find('.filtering').slick('slickUnfilter');
        $(this).closest(".filter-slider").find('.filtering').slick('slickFilter','[data-filter=' + val +']');
        $(this).closest(".filter-slider").find('.slider-nav__link').removeClass("active");
        $(this).addClass("active");

    });

    //подчеркивание вкладок при ховере
    $(".slider-nav__inner").append("<div class='border border--blue'></div>");
    $(".slider-nav__link").hover(function(e) {
            tabBorder($(this));
        },
        function(e) {
            if ($(".slider-nav__link.active").length) {
                tabBorder($(".slider-nav__link.active"));
            }
        });



    //ползунок цены в фильтре
    */
    $(".gamburger").on("click", function(e) {
        $(this).toggleClass("open");
        $($(this).attr("data-toggle")).slideToggle();
    });
//стилизация выпадающего списка
    $('.styler').styler();

    $(".catalog-list__icon").on("click", function (e) {
        $(this).toggleClass("active");
        return false;
    });
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        dots: true,
        //appendArrows: $("<div class='arr'>222</div>")

    });

    if ($("body").width() > 1400) {
        $(".main-slider .slick-prev").css("left", $(".container").eq(0).offset().left - 80);
        $(".main-slider .slick-next").css("right", $(".container").eq(0).offset().left - 80);

    }
    $(".cart-icon").on("click", function(e) {
        $(this).toggleClass("active");
        return false
    });
    $(".js-toggle-search").on("click", function(e) {
        if ($("body").width() > 715) {
            $("body").toggleClass("body--modal");
        }

        $(this).closest(".header-search").toggleClass("open");

        $(document).mouseup(function (e) {
            var container = $(".header-search");
            if (container.has(e.target).length === 0){
                $(".js-toggle-search").eq(0).trigger("click");
            }
        });
    });
    if ($('.filtered-cont').length) {
        var containerEl = document.querySelector('.filtered-cont');

        var mixer = mixitup(containerEl);
    }

    $(".slider-nav__link").on("click", function(e) {
        $(this).parent().find(".slider-nav__link").removeClass("active");
        $(this).addClass("active");
    });

    $("body").css("opacity", 1).addClass("body-ready");
    $(".line-card").each(function(i) {
        $(this).find('.xzoom').addClass("xzoom-" + i);
        $(this).find('.xzoom-gallery').addClass("xzoom-gallery-" + i);
        $(this).find('.xzoom-'+ i +', .xzoom-gallery-' + i).xzoom({Xoffset: 30});
        if ($(this).find(".flip-container").length) {
            $(this).find(".flip-container").find('.xzoom').addClass("xzoom-" + i + "-flip");
            $(this).find('.xzoom-gallery').addClass("xzoom-gallery-" + i + "-flip");
            $(this).find('.back .xzoom-'+ i +'-flip, .back .xzoom-gallery-' + i + "-flip").xzoom({Xoffset: 15});
        }
    })
    $('.flip-icon').on("click", function(e) {
      $(this).siblings(".flip-container").toggleClass("flip");
    });
    $(".filter-all").on("click", function(e) {
        if ($(this).siblings(".filter-hidden:visible").length) {
            $(this).text("Показать все");
        } else {
            $(this).text("Скрыть");
        }
        $(this).siblings(".filter-hidden").slideToggle();
        $(this).closest(".bx_filter_block").css("height", "");
    });
    $(".bx_filter_parameters_box_title").on("click", function(e) {
        //$(this).siblings(".bx_filter_block").slideToggle();
        //$(this).closest(".bx_filter_parameters_box").toggleClass("active");
    });
    $(".js-add-in-list").on("click", function(e) {
       var textNew = $(this).attr("data-text");
       var textOld = $(this).find("span").text();
       $(this).attr("data-text", textOld).toggleClass("active").find("span").text(textNew);
       return false
    });
    $('.product-slider_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slider__nav'
    });
    $('.product-slider_big').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        src = $('.product-slider_big').find("img").eq(nextSlide).attr("src");
        $('.product-slider_big .zoom').attr("src", src);
    });


    $('.product-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slider_big',
        dots: false,
        centerPadding: '10px',
        arrows: true,
        centerMode: false,
        focusOnSelect: true
    });

    setXZoom();
    $(".product-slider__nav").on("click", function(){
        setXZoom();
    });
    $(".product-slider_big a").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over'

    });
    $(".slick-next").html('<svg class="svg svg-arrow_big_right"><use xlink:href="#svg-icon-arrow_big_right"></use></svg>');
    $(".slick-prev").html('<svg class="svg svg-arrow_big_right"><use xlink:href="#svg-icon-arrow_big_left"></use></svg>');

    if ($(".shopping-cart").length) {
        //корзина


        /* Assign actions */
        $('.product-quantity input').change( function() {
            updateQuantity(this);
        });

        $('.product-removal button').click( function() {
            removeItem(this);
        });


        /* Recalculate cart */



        /* Update quantity */
        function updateQuantity(quantityInput)
        {
            /* Calculate line price */
            var productRow = $(quantityInput).parent().parent();
            var price = parseFloat(productRow.find('.js-price').text());
            var quantity = $(quantityInput).val();
            var linePrice = price * quantity;

            /* Update line price display and recalc cart totals */
            productRow.find('.js-cost').each(function () {
                $(this).fadeOut(fadeTime, function() {
                    $(this).text(linePrice.toFixed(2));
                    recalculateCart();
                    $(this).fadeIn(fadeTime);
                });
            });
        }

        var taxRate = 0;
        var shippingRate = 15.00;
        var fadeTime = 300;
        /* Remove item from cart */
        function removeItem(removeButton)
        {
            /* Remove row from DOM and recalc cart total */
            var productRow = $(removeButton).parent().parent();
            productRow.slideUp(fadeTime, function() {
                productRow.remove();
                recalculateCart();
            });
        }

        $(".qt-plus").click(function(){
            $(this).parent().children(".qt").val(parseInt($(this).parent().children(".qt").val()) + 1).trigger("change");

        });

        $(".qt-minus").click(function(){
            child = $(this).parent().children(".qt");
            if(parseInt(child.val()) > 1) {
                child.val(parseInt(child.val()) - 1).trigger("change");
            }

        });
        $(".qt").on("keyup", function (e) {
            $(this).val(parseInt($(this).val()) | 0);
            if ($(this).val() == 0) {
                $(this).val("1");
            }
        });

        $(".remove-product").click(function(){
            var el = $(this);
            el.closest(".product").addClass("removed");
            window.setTimeout(
                function(){
                    el.closest(".product").slideUp('fast', function() {
                        el.closest(".product").slideUp(function() {
                            el.closest(".product").remove();
                        });
                        setTimeout(function() {
                            if($(".product").length == 0) {
                                // сделать что то если теперь пусто в корзине
                                $(".empty-text").removeClass("hidden-xs-up").fadeIn();
                                $(".mini-cart__order").hide();
                            }
                            recalculateCart();
                        }, 200);

                    });
                }, 200);
        });


    };
    $(".opl-select-label").on("click", function(e) {
        $(".opl-select-label").removeClass("checked");
        $(this).addClass("checked");
        $(this).find("input").prop("checked", true);
    });
    $(".order-group__head").on("click", function(e) {
        $(this).closest(".order-group").toggleClass("open").find(".order-group__body").slideToggle();
    });
    $(".cat-group__title").on("click", function(e) {
        if ($(this).closest(".cat-group").find(".cat-group__hidden").children().length) {
            $(this).closest(".cat-group").find(".cat-group__hidden").slideToggle(function() {
                $(this).closest(".cat-group").toggleClass("open");
            });

            return false
        }

    });
    $(".cat-group__title2").on("click", function(e) {
        if ($(this).closest(".cat-group2").find(".cat-group__hidden2").children().length) {
            $(this).closest(".cat-group2").find(".cat-group__hidden2").slideToggle(function() {
                $(this).closest(".cat-group2").toggleClass("open");
            });
            return false
        }

    });
    $('.lightgallery a').fancybox();
    $('.foto-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        centerPadding: '10px',
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $('.m-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: false
    });
    $("input[type='tel']").mask("+7 (999) 999-99-99");
    $(".cat-nav__link").on("click", function(e) {
        $(document).mouseup(function (e) {
            var container = $(".cat-nav__item");
            if (container.has(e.target).length === 0){
               // $(".cat-nav__link").removeClass("open");
            }
        });
        $(".top-catalog__close").on("click", function(e) {
            $(".cat-nav__link").removeClass("open");
            return false
        });
        if ($(this).siblings(".sidebar__item").length) {
            $(this).closest(".cat-nav__item").siblings(".cat-nav__item").find(".cat-nav__link").removeClass("open");
            $(this).toggleClass("open");
            return false
        }


    });
    $(".usl-group__more").on("click", function(e) {
        $(this).text("Скрыть")
            .closest(".usl-group").addClass("open")
            .find(".usl-group__hidden").slideToggle(function() {
            $('.scroll-pane').jScrollPane({showArrows: true});
        });
        return false
    });
    $(".usl-group__hide").on("click", function(e) {
        $(this).closest(".usl-group").removeClass("open")
            .find(".usl-group__hidden").slideToggle(function() {
            $('.scroll-pane').jScrollPane({showArrows: true});
        })
            .end().find(".usl-group__more").text("Подробнее");
        return false
    });
    $('#karta-usl').on('shown.bs.modal', function (e) {
        // do something...
        $('.scroll-pane').jScrollPane({showArrows: true});
    })





});
$(window).load(function() {
    setHeight(".table_item");
});
function recalculateCart()
{
    var subtotal = 0;
    /* Set rates + misc */
    var taxRate = 0;
    var shippingRate = 15.00;
    var fadeTime = 300;

    /* Sum up row totals */
    $('.product').each(function () {
        subtotal += parseFloat($(this).find('.js-cost').text());
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('.cart-subtotal').html(subtotal.toFixed(2));
        $('.cart-tax').html(tax.toFixed(2));
        $('.cart-shipping').html(shipping.toFixed(2));
        $('.cart-total').html(total.toFixed(2));
        if(total == 0){
            $('.checkout').fadeOut(fadeTime);
        }else{
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });

}

var xzoom;
function setXZoom() {

    if (xzoom !== undefined) {
        //xzoom.destroy();

    }
    if ($("body").width() > 1300) {
        xzoom = $(".slick-current .xzoom").xzoom({tint: '#333', Xoffset: 15,
            zoomWidth: 863,
            zoomHeight: 520,
            defaultScale: -1,
            Yoffset: 0});
    } else {
        xzoom = $(".slick-current .xzoom").xzoom({tint: '#333', Xoffset: 15,
            zoomWidth: 740,
            zoomHeight: 520,
            defaultScale: -1,
            Yoffset: 0});
    }
}
if($(".ctrl").length) {
(function() {
    'use strict';

    function ctrls() {
        var _this = this;

        this.counter = 1;
        this.els = {
            decrement: document.querySelector('.ctrl-button-decrement'),
            counter: {
                container: document.querySelector('.ctrl-counter'),
                num: document.querySelector('.ctrl-counter-num'),
                input: document.querySelector('.ctrl-counter-input')
            },
            increment: document.querySelector('.ctrl-button-increment')
        };

        this.decrement = function() {
            var counter = _this.getCounter();
            var nextCounter = (_this.counter > 0) ? --counter: counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function() {
            var counter = _this.getCounter();
            var nextCounter = (counter < 9999999999) ? ++counter: counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function() {
            return _this.counter;
        };

        this.setCounter = function(nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function(callback) {
            setTimeout(callback, 100);
        };

        this.render = function(hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function() {
                    _this.els.counter.num.innerText = _this.getCounter();
                    _this.els.counter.input.value = _this.getCounter();
                    _this.els.counter.num.classList.add(visibleClassName);
                },
                100);

            setTimeout(function() {
                    _this.els.counter.num.classList.remove(hideClassName);
                    _this.els.counter.num.classList.remove(visibleClassName);
                },
                200);
        };

        this.ready = function() {
            _this.els.decrement.addEventListener('click',
                function() {
                    _this.debounce(function() {
                        _this.decrement();
                        _this.render('is-decrement-hide', 'is-decrement-visible');
                    });
                });

            _this.els.increment.addEventListener('click',
                function() {
                    _this.debounce(function() {
                        _this.increment();
                        _this.render('is-increment-hide', 'is-increment-visible');
                    });
                });

            _this.els.counter.input.addEventListener('input',
                function(e) {
                    var parseValue = parseInt(e.target.value);
                    if (!isNaN(parseValue) && parseValue >= 0) {
                        _this.setCounter(parseValue);
                        _this.render();
                    }
                });

            _this.els.counter.input.addEventListener('focus',
                function(e) {
                    _this.els.counter.container.classList.add('is-input');
                });

            _this.els.counter.input.addEventListener('blur',
                function(e) {
                    _this.els.counter.container.classList.remove('is-input');
                    _this.render();
                });
        };
    };

    // init
    var controls = new ctrls();
    document.addEventListener('DOMContentLoaded', controls.ready);
})();
}

//добавляет подчеркивание в топменю
function tabBorder(e) {
    var b = e.width(),
        c = (e.outerWidth(true) - b) / 2,
        d = e.position().left;
    $(".border").css("left", d + c).css("width", b)
}

//превращает кнопку в лоадер
function addLoaderInBtn(e) {
    $(e).css("color", "transparent").html($(e).html() + "<div class='loader'>" +
        "<span></span>" +
        "<span></span>" +
        "<span></span>" +
        "</div>");
}
function removeLoaderInBtn(e) {
    $(e).css("color", "").find(".loader").fadeOut(function() {
        $(e).find(".loader").remove();
    });
}
//делает высоту элементов одинаковой
function setHeight($e) {
    var h = 0;
    function a($e) {
        $($e).each(function(e) {
            if ($(this).outerHeight() > h) {
                h = $(this).outerHeight();
            }
        });
        $($e).outerHeight(h);
    }
    a($e);
    $(window).resize(function () {
        a($e);
    });
}