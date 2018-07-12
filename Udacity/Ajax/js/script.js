
function loadData() {

    const $body = $('body');
    const $wikiElem = $('#wikipedia-links');
    const $nytHeaderElem = $('#nytimes-header');
    const $nytElem = $('#nytimes-articles');
    const $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load google streetview
    let streetvar = $('#street').val();
    console.log(streetvar)
    let cityvar = $('#city').val();
    let address = streetvar + ", " + cityvar;

    $greeting.text("Is this the address that you were looking for? " + address);

    let streetImgUrl = "https://maps.googleapis.com/maps/api/streetview?size=650x450&location=" + address;
    $body.append('<img class="bgimg" src="' + streetImgUrl + '">')

    //NY times Ajax request section
    let nytimesurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q" + cityvar + "&sort=newest&api-key=013af341e43040f7b88afa06cbe1d12a";
    $.getJSON(nytimesurl, function(data){
      $nytHeaderElem.text('New York Times Articles Containing ' + cityvar);

      let articlesbreakout = data.response.docs;
      console.log(articlesbreakout);
      for (let i = 0; i < articlesbreakout.length; i++) {
        articleShown = articlesbreakout[i];
        $nytElem.append('<li class="article">'+
          '<a href="'+articleShown.web_url+'">'+articlesbreakout.headline + '</a>'+ '<p>'+articlesbreakout.snippet + '</p>' + 
        '</li>');
      };
    })
    return false;
};

$('#form-container').submit(loadData);
