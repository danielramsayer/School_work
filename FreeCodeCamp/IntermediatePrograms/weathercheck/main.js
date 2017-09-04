
var geolocation = prompt("Where are you?");

$(document).ready(function() {
  loadWeather(geolocation,''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      console.log(weather);
      htmlcode = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      htmlcode += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      htmlcode += '<li class="currently">'+weather.currently+'</li>';
      htmlcode += '<li>'+weather.alt.temp+'&deg;C</li></ul><br>';

      htmlcode += '<ul><li> '+weather.high+'/'+weather.low+'&deg;F</li>';
      htmlcode += '<li class="currently">Humidity '+weather.humidity+'%</li></ul>';

      $("#weather").html(htmlcode);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
