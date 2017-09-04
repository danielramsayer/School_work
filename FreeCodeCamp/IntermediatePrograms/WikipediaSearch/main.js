$(document).ready(function(){

  $('#search').click(function() {

    var searchTerm = $('#searchTerm').val();

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?";
    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        for (var i = 0; i < data[1].length; i++){
          $("#output").append("<a href=" + data[3][i] + " target='blank'><br>" + data[1][i] + "</a><br>" + data[2][i] + "<br>");
        }
      },
      error: function(err) {
        alert("Sorry, there was an error in your search.");
      },
    });
  });
  $('#searchTerm').bind('keypress', function(e) {
    if (e.keyCode == 13) {
      $("#search").click();
    }
  });
});
