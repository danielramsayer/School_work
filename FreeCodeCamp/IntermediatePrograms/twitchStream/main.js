$(document).ready(function() {

  var twitchStreamers = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

  for (var i = 0; i < twitchStreamers.length; i++) {

    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams/' + twitchStreamers[i],
      logo: 'https://api.twitch.tv/kraken/channels/' + twitchStreamers[i],
      headers: {
        'client-ID': '59x9ex7f5zzongzntqx0zrwleoxy12'
      },
      success: function(OInfo) {
        var name = OInfo._links.self.slice(37);
        console.log(OInfo);

        if (OInfo.stream === null) {
          $('#user').append('<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>');
          $('#online').append(' is offline<br>');
          $('#game').append('N/A<br>');
        } else {
          $('#user').append('<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>');
          $('#online').append(' is now playing<br>');
          $('#game').append(OInfo.stream.game + '<br>');
        }
      },
      error: function(error2) {
        alert("This user is not active.");
      }
    });
  }
});
