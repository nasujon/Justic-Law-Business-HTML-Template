
(function ($) {
  'use strict';


jQuery(document).ready(function($) {

	    function stickyNav() {
        //fixed nav bar active
        window.onscroll = function () {
            myFunction()
        };
        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    stickyNav();

    function handlePreloader() {
        var loader = $('.preloader');

        if (loader.length) {
            loader.delay(200).fadeOut(500);
        }
    }
    handlePreloader();

    
    var chat__btn   = $('#chat');
    var form__popup = $('.form__popup');
    var close__btn  = $('.close__btn');
    var sidemenu    = $('.side__menu');
    var sidebar     = $('#sidebar');
    var play__btn   = $('.play__btn');
    
	chat__btn.on('click', function(){
		form__popup.addClass('active');
	});
	close__btn.on('click', function(){
		form__popup.removeClass('active');
	})

    sidemenu.on('click', function () {
        sidebar.toggleClass('active');
    });


    play__btn.modalVideo();
    $('select').niceSelect();

 });




     //jquery load function start
    jQuery(window).on("load", function() {
        
    });


}(jQuery));


