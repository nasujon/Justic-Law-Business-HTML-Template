
(function ($) {
  'use strict';



jQuery(document).ready(function($) {

      //menu active
      jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
      });


      var testimonials = $('.testimonials');
      testimonials.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        items:1,
        navText:['<i class=\"fal fa-angle-left\"></i>', '<i class=\"fal fa-angle-right\"></i>']
      });


      var teams = $('.teams');

      teams.owlCarousel({
        margin:30,
        loop:false,
        nav:true,
        dots:false,
        navText:["<i class=\'fal fa-angle-left\'></i>", "<i class=\'fal fa-angle-right\'></i>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
        }
      });

      $('#demoprogressbar14').LineProgressbar({
        percentage: 85,
        fillBackgroundColor: '#F5AA56',
        height: '10px',
        radius: '5px'
      });


      $('#demoprogressbar15').LineProgressbar({
        percentage: 99,
        fillBackgroundColor: '#F5AA56',
        height: '10px',
        radius: '5px'
      });


      $('#demoprogressbar16').LineProgressbar({
        percentage: 65,
        fillBackgroundColor: '#F5AA56',
        height: '10px',
        radius: '5px'
      });


      $('#demoprogressbar17').LineProgressbar({
        percentage: 34,
        fillBackgroundColor: '#F5AA56',
        height: '10px',
        radius: '5px'
      });


    //wow animations active here
    new WOW().init();

    //current class adding
    var navbarmneuclass = $('.navbarmneuclass'); 
    navbarmneuclass.onePageNav();
    var counter = $('.counter');
    counter.counterUp({
            delay: 10,
            time: 1000
        });


    });

    

     //jquery load function start
    jQuery(window).on("load", function() {
        
    });


}(jQuery));



//active plugins js main file end......