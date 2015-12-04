$(document).ready(function() {

  //Show/Hide Sidebar

  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
        $("body").addClass("no-scroll");
      }, 300);
    }
  });

  //Hide Sidebar when Page Wrapper is Clicked

  $(".page-wrapper").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } 
  });

  //Slide to left for Gallery Section

  $("#gallery-next").click(function() {
    var marginValue = parseInt($("#gallery").css("margin-left").replace("px", ""));
    if (marginValue == -3840) {
      $("#gallery-next").css("opacity", "0.4");
    } else if (marginValue == -4800) {
      return false;
    } else {  
      $("#gallery").css("margin-left", marginValue - 960);
      $("#gallery-prev").css("opacity", "1.0");
    }
  });

  //Slide to right for Gallery Section

  $("#gallery-prev").click(function() {
    var marginValue = parseInt($("#gallery").css("margin-left").replace("px", ""));
    if (marginValue == 0) {
      $("#gallery-prev").css("opacity", "0.4");
      return false;
    } else {
      $("#gallery-next").css("opacity", "1.0");
      $("#gallery").css("margin-left", marginValue + 960);
    }
  });

  // Smooth Scrolling when Sidebar Items are clicked

  $("a").click(function() {
    $("body").removeClass("no-scroll")
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    }, 300);
    return false;
  });

  $(".contact").click(function() {
    $("#contact-container").show();
  });

  // Hide Contact Box when Submit/Cancel

  $(".button").click(function() {
    $("#contact-container").hide();
  });
  
  // Hide Contact Box when Click on Contact Overlay

  $("#contact-overlay").click(function() {
    $("#contact-container").hide();
  });

});