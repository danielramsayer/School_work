$(document).ready(function() {
  $('[data-toggle="weekend"]').popover();
  $('#mycarousel').carousel({
    interval: 5000
  });
  $("#carousel-button").click(function() {
    if ($("#carousel-button").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carousel-button").children("span").removeClass("fa-pause");
      $("#carousel-button").children("span").addClass("fa-play");
    } else if ($("#carousel-button").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });

})
