/*global $, jQuery, alert*/
$(document).ready(function () {

  "use strict";

  //nice scroll
  //$("html").niceScroll();

  $('.carousel').carousel({
      interval:6000
  });

  // show color option
  $(".gearCheck").click(function () {
    $(".colorOption").fadeToggle();
  });

  //caching the scroll button
  let colorLi = $(".colorOption ul li"),
      scrollButton = $("#scrollButton");
  
  colorLi
    .eq(0).css("backgroundColor", "#e41B17").end()
    .eq(1).css("backgroundColor", "purple").end()
    .eq(2).css("backgroundColor", "orange").end()
    .eq(3).css("backgroundColor", "green");

  colorLi.click(function () {
    //console.log($(this).attr("data-value"));
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
  });


  $(window).scroll(function () {
    //console.log($(this).scrollTop());
    if($(this).scrollTop() > 700){
      scrollButton.show()
    }
    else{
      scrollButton.hide();
    }
  });

  scrollButton.click(function () {
    $("html, body").animate({scrollTop:0}, 300);
  })
});
   
$(window).on('load',function () {
  "use strict";
  //alert("window loaded");
  $(".loading .spinner").fadeOut(2000, function () {
    $(this).parent().fadeOut(1000, function () {
      //show body scroll
      $("body").css("overflow","auto");        
      $(this).remove();
    });
  });
});
  //start spinner code for loading
  /*$(window).on('load',function () {
    $(".loading, .loadnig .spinner").fadeOut(2000);
  });

  $(window).load(function () {
    //loading elements
    $(".loading .spinner").fadeOut(2000, function () {
      $(this).parent().fadeOut(2000, function () {
        //show body scroll
        $("body").css("overflow","auto");
        $(this).remove();
      });
    });
  });*/
