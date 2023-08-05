/*
  [JS Index]
  
  ---
  
  Template Name: Wox - Photography Portfolio Template
  Author:  ex-nihilo
  Version: 1.5
*/


/*
  1. preloader
  2. fadeIn.element
  3. slick slider
    3.1. slick about slider
    3.2. slick services slider
	3.3. slick fullscreen slideshow
	3.4. slick fullscreen slideshow ZOOM/FADE
  4. owl carousel
    4.1. owl works carousel
    4.2. owl news carousel
	4.3. owl home IMG carousel slider
  5. magnificPopup
  6. skills bar
  7. facts counter
  8. navigation
    8.1. navigation open/close
    8.2. navigation active state
    8.3. navigation hover state
  9. fullPage
  10. YouTube player
    10.1. highlight YouTube player navigation
  11. toggle news content
  12. forms
    12.1. contact form
  13. contact modal
    13.1. contact modal additional CLOSER
  14. swiper slider
    14.1. swiper parallax slider
  15. section position reset
    15.1. news position reset
	15.2. contact position reset
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(600).css({
                display: "none"
            }).fadeIn(800);
        }, 0);
    });
	
    // 3. slick slider
    // 3.1. slick about slider
    $(".slick-about").slick({
        arrows: true,
        initialSlide: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });
    // 3.2. slick services slider
    $(".slick-services").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: false,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 500
    });
    // 3.3. slick fullscreen slideshow
    $(".slick-fullscreen-slideshow").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    // 3.4. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev icon ion-chevron-left'></i>",
        nextArrow: "<i class='slick-next icon ion-chevron-right'></i>",
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 4. owl carousel
    // 4.1. owl works carousel
    $("#works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    // 4.2. owl news carousel
    $("#news-page-img-carousel").owlCarousel({
        loop: true,
        center: false,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
    // 4.3. owl home IMG carousel slider
    $("#home-page-img-carousel").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
	
    // 5. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 300,
        mainClass: "mfp-fade"
    });
	
    // 6. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 7. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 8. navigation
    // 8.1. navigation open/close
    $(".navigation-icon").on("click", function() {
        $(this).toggleClass("active");
    });
    $(".navigation-fire").on("click", function(e) {
        $(this).toggleClass("open");
        $("nav.navigation-menu").toggleClass("show");
    });
    $("nav.navigation-menu a").on("click", function(e) {
        var hash = $(this.hash);
        $("nav").removeClass("show");
        $(".navigation-fire").removeClass("open");
        $(".navigation-icon").removeClass("active");
    });
    // 8.2. navigation active state
    $("a.menu-state").on("click", function() {
        $("a.menu-state").removeClass("active");
        $(this).addClass("active");
    });
    // 8.3. navigation hover state
    hoverMenu();
    imgMenu();
    function hoverMenu() {
        $(".menu li a").on("mouseenter", function() {
            var ref = $(this).data("ref"),
                menuImg = $('.menu-img[data-ref="' + ref + '"]');
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
            $(".menu-img").removeClass("active");
            menuImg.addClass("active");
        });
    }
    function imgMenu() {
        $("[data-bg]").each(function() {
            var bg = $(this).data("bg");
            $(this).css({
                "background-image": 'url(' + bg + ')',
                "background-position": "center center",
                "background-size": "cover"
            });
        });
    }
	
    // 9. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "services", "works", "news", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Services", "Works", "News", "Contact"],
        responsiveWidth: 900,
        autoScrolling: true,
        scrollBar: false,
        afterResponsive: function(isResponsive) {}
    });
	
    // 10. YouTube player
    $("#bgndVideo").YTPlayer();
    // 10.1. highlight YouTube player navigation
    $(".video-state").on("click", function() {
        $(".video-state").removeClass("active");
        $(this).addClass("active");
    });
	
    // 11. toggle news content
    $(".c-btn-news").on("click", function() {
        var divClass = $(this).attr("data-id");
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("." + divClass).addClass("open");
        } else {
            $(this).addClass("open");
            $("." + divClass).addClass("open");
        }
    });
    $(".inverse-dark").on("click", function() {
        $(".panel-left, .panel-right").removeClass("open");
    });
	
    // 12. forms
    // 12.1. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 13. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open").addClass("close");
        } else {
            $(".contact-modal").removeClass("close").addClass("open");
        }
    });
    // 13.1. contact modal additional CLOSER
    $(".navigation-icon, .logo").on("click", function() {
        $(".contact-modal").removeClass("open").addClass("close");
    });
	
    // 14. swiper slider
    // 14.1. swiper parallax slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
    // 15. section position reset
    // 15.1. news position reset
    $(".c-btn-news").on("click", function(e) {
        e = $(".news-page-img-wrapper");
        $("html, body").animate({
            scrollTop: e.offset().top
        }, 500);
    });
    // 15.2. contact position reset
    $(".contact-modal-launcher").on("click", function(e) {
        e = $(".contact-reset");
        $("html, body").animate({
            scrollTop: e.offset().top
        }, 500);
    });
	
	
});