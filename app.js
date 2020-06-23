
$( document ).ready(function() {


  setTimeout(function() { 

    $(".loading-container p").css("opacity", "1");


  }, 3500);

  setTimeout(function() { 

    $(".loading-container p").css("opacity", "0");


  }, 5500);

});



$(window).on("load", function () {


  setTimeout(function() { 

    $(".loading-container").slideToggle("250", "swing"); 


  }, 1600);



}); 
