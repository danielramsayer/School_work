
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

    let URL = "https://www.nytimes.com/search?query=" + cityvar; console.log(URL);
    $.getJSON(URL, function( data ) {
      
    });

    return false;
};

$('#form-container').submit(loadData);
