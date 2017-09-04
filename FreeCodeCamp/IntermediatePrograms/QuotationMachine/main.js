var returnedQuote = "";

var quotes = [
	"Frankly, my dear, I don\'t give a damn.--GONE WITH THE WIND",
	"I\'m gonna make him an offer he can\'t refuse. --THE GODFATHER",
	"You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am. --ON THE WATERFRONT",
	"May the Force be with you. -- STAR WARS",
	"Toto, I\'ve a feeling we\'re not in Kansas anymore. --THE WIZARD OF OZ",
	"Go ahead, make my day. --SUDDEN IMPACT",
	"All right, Mr. DeMille, I'm ready for my close-up.  --SUNSET BLVD.",
	"Fasten your seatbelts. It\'s going to be a bumpy night. --ALL ABOUT EVE",
	"I love the smell of napalm in the morning. --APOCALYPSE NOW",
	"The stuff that dreams are made of. --THE MALTESE FALCON"

];

function nQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	returnedQuote = document.getElementById("quotation").innerHTML = quotes[randomQuote];
}

function tweetIt () {
  var tweetUrl = 'https://twitter.com/share?text=' +
    returnedQuote;
  window.open(tweetUrl);
}
