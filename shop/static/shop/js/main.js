(function($) {
    "use strict";

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('nav.active-mobile-menu').meanmenu();

    /*----------------------------
     owl active product slider
    ------------------------------ */
    $(".active-owl-product").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    /* Featured Product*/
    $(".active-featured-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    /* Homeone blog*/
    $(".active-blog-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 2,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsCustom: [
            [0, 1],
            [450, 1],
            [480, 1],
            [600, 1],
            [700, 1],
            [768, 1],
            [992, 2],
            [1199, 2]
        ],
    });

    /*Main blog post slider*/
    $(".active-blog-postslider").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1]
    });


    /*Brand area */
    $(".active-brand-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 5,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 5],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
    });

    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
     price-slider active
    ------------------------------ */
    $("#slider-range").slider({
        range: true,
        min: 40,
        max: 600,
        values: [60, 570],
        slide: function(event, ui) {
            $("#amount").val("�" + ui.values[0] + " - �" + ui.values[1]);
        }
    });
    $("#amount").val("�" + $("#slider-range").slider("values", 0) +
        " - �" + $("#slider-range").slider("values", 1));

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /* For sticky menu*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#sticky-header').addClass('sticky');
        } else {
            $('#sticky-header').removeClass('sticky');

        }

    })


    /*footer 320 skin start*/
    /*For about*/
    $("#f-about").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.footer-text').slideToggle();
        }
    });

    /*For about*/
    $("#f-info").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.jscroll-info').slideToggle();
        }
    });
    /*For about*/
    $("#f-myac").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.jscroll-myac').slideToggle();
        }
    });
    /*For about*/
    $("#f-cussve").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.jscroll-cussrve').slideToggle();
        }
    });

    /*For -+ on footer start*/


    /* about*/

    $(".ftitle-about h5").on("click", function() {
        $(this).toggleClass('text-close-about active-about');
    });

    /* Information*/

    $(".ftitle-info h5").on("click", function() {
        $(this).toggleClass('text-close active');
    });

    /* My Account*/

    $(".ftitle-myA h5").on("click", function() {
        $(this).toggleClass('text-close active');
    });

    /* Customer*/

    $(".ftitle-cus h5").on("click", function() {
        $(this).toggleClass('text-close active');
    });

    /*For -+ on footer end*/



    /*Scroll to top button start*/

    $(".to-top").on("click", function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn(1000);
        } else {
            $('.to-top').fadeOut(1000);
        }
    })


    /*Scroll to top button end*/
    $("#hbtn").on("click", function() {
        $('.mobile-search').slideDown(500);

    });




    /*===================Home2=================*/

    $('.cur-title1').on('click', function() {
        $('.inner-btn').slideToggle(1000);
    });

    $('.cur-title2').on('click', function() {
        $('.inner-btn2').slideToggle(1000);
    });




    /* Blog2*/
    $(".active-blog2-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });


    /*====================Home4==================*/


    $(".active-owl-product-hp4").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    /* Countdown*/


    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="ftime-counter">%D :</span><span class="time-counter">%H :</span><span class="time-counter">%M :</span><span class="time-counter">%S</span>'));
        });
    });

    /*Home4 blog*/
    $(".active-blogemail-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1],
    });

    /* Price slider jquery ui*/
    var sliderrange = $('#slider-range');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /* In 768px hair page sidebar will be closed start*/

    $(".jstest").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 992) {
            $('.sfcr-close').slideToggle();
        }
    });


    $(".plus").on("click", function() {
        $(this).toggleClass('minus plus');

    })

    /*Tab2 jquery click function*/

    $("#tab2-jq-click2").on("click", function() {
        $('.jquery-effect2').slideToggle();
    })


    $("#tab2-jq-click").on("click", function() {
        $('.jquery-effect').slideToggle();
    })

    /* In 768px hair page sidebar will be closed end*/

    /*----------------------------
        cart-plus-minus-button
       ------------------------------ */
    $(".cart-plus-minus")
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*Active class jquery code*/

    var skillulli = $('.skill-ulli li');

    skillulli.on("click", function() {
        skillulli.removeClass("active-skill");
        $(this).addClass("active-skill");
    });

    /* Fancybox*/
    $('.fancybox').fancybox();



    /*For js counter up*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*For treeview*/
    $("#cat-treeview ul").treeview({
        animated: "normal",
        persist: "location",
        collapsed: true,
        unique: true,
    });

    /* mixItUp
       ------------------------------ */
    $('#mix-fil').mixItUp();
    $(document).ready(function() {

        var sync1 = $(".sync1");

        var sync2 = $(".sync2");




        if ($(".sync1").length > 0) {
            sync1.owlCarousel({

                singleItem: true,

                slideSpeed: 1000,

                navigation: true,

                pagination: false,

                afterAction: syncPosition,

                responsiveRefreshRate: 200,

                navigationText: [

                    "<i class='fa fa-chevron-left'></i>",

                    "<i class='fa fa-chevron-right'></i>"

                ]

            });

        }

        if ($(".sync2").length > 0) {

            sync2.owlCarousel({

                items: 4,

                itemsDesktop: [1199, 4],

                itemsDesktopSmall: [979, 3],

                itemsTablet: [768, 3],

                itemsMobile: [479, 2],

                pagination: false,

                responsiveRefreshRate: 100,

                afterInit: function(el) {

                    el.find(".owl-item").eq(0).addClass("synced");

                }

            });

        }

        function syncPosition(el) {

            var current = this.currentItem;

            $(".sync2")

            .find(".owl-item")

            .removeClass("synced")

            .eq(current)

            .addClass("synced")

            if ($(".sync2").data("owlCarousel") !== undefined) {

                center(current)

            }

        }



        $(".sync2").on("click", ".owl-item", function(e) {

            e.preventDefault();

            var number = $(this).data("owlItem");

            sync1.trigger("owl.goTo", number);

        });



        function center(number) {

            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;

            var num = number;

            var found = false;

            for (var i in sync2visible) {

                if (num === sync2visible[i]) {

                    var found = true;

                }

            }

            if (found === false) {

                if (num > sync2visible[sync2visible.length - 1]) {

                    sync2.trigger("owl.goTo", num - sync2visible.length + 2)

                } else {

                    if (num - 1 === -1) {

                        num = 0;

                    }

                    sync2.trigger("owl.goTo", num);

                }

            } else if (num === sync2visible[sync2visible.length - 1]) {

                sync2.trigger("owl.goTo", sync2visible[1])

            } else if (num === sync2visible[0]) {

                sync2.trigger("owl.goTo", num - 1)

            }



        }


        // prettyPhoto

        // ---------------------------------------------------------------------------------------
        if ($("a[rel^='prettyPhoto']").length > 0) {
            $("a[rel^='prettyPhoto']").prettyPhoto({

                theme: 'facebook',

                slideshow: 5000,

                autoplay_slideshow: true

            });
        }


    });

})(jQuery);