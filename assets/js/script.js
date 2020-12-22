AOS.init({
	duration: 1000,
	easing: 'ease',
 	once: true,
	offset: 200
});





jQuery(function($) {
	
    'use strict';
    Active_Scroll();
    Window_Scroll();
    Navbar_Dropdown();
    Smooth_Scroll();
    Owl_Carousel();
});

// Window Scroll 
    var Window_Scroll = function() {
        $(window).scroll(function() {
            if ( $(window).scrollTop() > 20 ) {
                $('nav').addClass('scrolled');
            } else {
                $('nav').removeClass('scrolled');
            }
        });
    };

  /** Smooth Scroll */
var Smooth_Scroll = function() {
	var scroll = new SmoothScroll('a[href="#header"]', {
		speed: 1000,
		speedAsDuration: true
	  });
};

var Navbar_Dropdown = function() {
    // Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
    
    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
        $('.dropdown-menu .sub-menu').click(function(e){
        e.preventDefault();
            if($(this).next('.submenu').length){
            $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.submenu').hide();
        })
        });
    }
}

var Owl_Carousel = function() {
    $('#courses .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                centre: true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                centre: true
            }
        }
    });

    $('#students .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dot: true,
        // nav: true,
        // navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });

    $('#achivements .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dot: true,
        // nav: true,
        // navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });
};


var Active_Scroll = function() {
    
}