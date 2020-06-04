

// Initiating Rellax

var rellax = new Rellax('.rellax');

// Effects for Menu

$(".header .menu-btn").click(function(){

       	$(".menu-container").show();
        $(".menu-container .navbar .nav-item").addClass("no-opacity");
        $(".menu-container").animate({width:'100vw'}, 250);
        $(".menu-container .close-menu").fadeIn(500);
        $("body").addClass("modal-open");


        setTimeout(function() { 

    		
		$(".header .site-title").css("color", "var(--main-bg-color");

    	$(".menu-container .navbar-nav .nav-item:nth-child(1)").removeClass("no-opacity");
		$(".menu-container .navbar-nav .nav-item:nth-child(1)").addClass("slide-in");

    	
    	}, 200);

    	setTimeout(function() { 

    	$(".menu-container .navbar-nav .nav-item:nth-child(2)").removeClass("no-opacity");
		$(".menu-container .navbar-nav .nav-item:nth-child(2)").addClass("slide-in");

    	
    	}, 250);

    	setTimeout(function() { 

    	
    	$(".menu-container .navbar-nav .nav-item:nth-child(3)").removeClass("no-opacity");
		$(".menu-container .navbar-nav .nav-item:nth-child(3)").addClass("slide-in");

    	
    	}, 350);

    	setTimeout(function() { 

    	
    	$(".menu-container .navbar-nav .nav-item:nth-child(4)").removeClass("no-opacity");
		$(".menu-container .navbar-nav .nav-item:nth-child(4)").addClass("slide-in");


    	
    	}, 450);


	});





$(".menu-container .close-menu").click(function(){

        
        $(".menu-container").animate({width:'0vw'}, 250);
        $(".header .site-title").css("color", "var(--main-txt-color");
        $(".menu-container .close-menu").fadeOut(500);
        $("body").removeClass("modal-open");
        $(".menu-container .navbar-nav .nav-item").removeClass("slide-in");
        $(".menu-container .navbar .nav-item").addClass("no-opacity");

        setTimeout(function() { 

    	$(".menu-container").hide();

    	
    	}, 300);


	});



// Effects for Home Page


$(".main .content .cards .card").mouseenter(function(){
        
        $(this).find(".card-image").css("transform","scale(1.05)");
        $(this).find("img").css("transform","scale(0.965)");
        $(this).find(".card-title").css("color","var(--link-color)");
        $(this).find(".card-tag").css("opacity","1");
        $(this).find(".card-overlay").css("opacity","60%");

		});

   $(".main .content .cards .card").mouseleave(function(){

        $(this).find(".card-image").css("transform","scale(1)");
        $(this).find("img").css("transform","scale(1)");
        $(this).find(".card-title").css("color","var(--main-txt-color)");
        $(this).find(".card-title").css("text-decoration","none");
        $(this).find(".card-tag").css("opacity","0");
        $(this).find(".card-overlay").css("opacity","30%");

		});



// Effects for the IB Page 


$(".company .project .project-image").mouseenter(function(){
        
    
        $(this).find(".project-image-overlay").css("opacity","0.7");
        $(this).find("h4").css("opacity","1");
       

    });


 $(".company .project .project-image").mouseleave(function(){


        $(this).find(".project-image-overlay").css("opacity","0");
        $(this).find("h4").css("opacity","0");

    });


   $(document).ready(function() {
    
    	
  //  	var circle = $('.main .title .image-circle');

		// var backgrounds = new Array(
		//     'url("./imgs/Profile_1.jpg")'
		//   , 'url("./imgs/Profile_2.jpg")'
		//   , 'url("./imgs/Profile_3.jpg")'
		//   , 'url("./imgs/Profile_4.jpg")'
		//   , 'url("./imgs/Profile_5.jpg")'
		//   , 'url("./imgs/Profile_6.jpg")'
		// );

		// var current = 0;

		// function nextBackground() {
		//     current++;
		//     current = current % backgrounds.length;
		//     circle.css('background', backgrounds[current]);
		//     circle.css('background-position', 'center');
		// 	circle.css('background-size', 'cover');

		// }
		// setInterval(nextBackground, 750);

		// circle.css('background', backgrounds[0]);


		

    	$(".main .content .cards .card").find(".card-overlay").css("width","100%");
    	$(".main .title").addClass("no-opacity"); 
    	
    	
		
    	
    	setTimeout(function() { 

    		$(".loading-screen").slideToggle("250", "swing"); 


    	}, 1600);


    	setTimeout(function() { 

    		$(".main .title").removeClass("no-opacity"); 
    		$(".main .title").addClass("fade-in"); 


    	}, 1700);


    
	});

   $('.list .list-item-1 .slide').each(function(i) {
  	
  		$(this).css('animation-delay', (i * 0.1) +'s');
  	
	});

   $('.list .list-item-2 .slide').each(function(i) {
  	
  		$(this).css('animation-delay', (i * 0.1) +'s');
  	
	});

   $('.list .list-item-3 .slide').each(function(i) {
  	
  		$(this).css('animation-delay', (i * 0.1) +'s');
  	
	});





   (function($) {

  /** 
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".hover-in").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });

  $(".slide").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".hover-in");
var allMods2 = $(".slide");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

allMods2.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

win.scroll(function(event) {
  
  allMods2.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide-in"); 
    } 
  });
  
});



