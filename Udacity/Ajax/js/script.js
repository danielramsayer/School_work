
function loadData() {

    const $body = $('body');
    const $wikiElem = $('#wikipedia-links');
    const $nytHeaderElem = $('#nytimes-header');
    const $nytElem = $('#nytimes-articles');
    const $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    let streetvar = $('#street').val();
    console.log(streetvar)
    let cityvar = $('#city').val();
    let address = streetvar + ", " + cityvar;

    $greeting.text("Is this the address that you were looking for? " + address);

    let streetImgUrl = "https://maps.googleapis.com/maps/api/streetview?size=650x450&location=" + address;
    $body.append('<img class="bgimg" src="' + streetImgUrl + '">')
    // YOUR CODE GOES HERE!
    //NY times Ajax request section
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
        'api-key': "013af341e43040f7b88afa06cbe1d12a"
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        console.log(result);
      }).fail(function(err) {
        throw err;
    });

    return false;
};

$('#form-container').submit(loadData);
