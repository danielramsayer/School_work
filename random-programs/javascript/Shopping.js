$(function() {
  var itemCount = 0;

// Step 1
// This code is executed when someone clicks the "Add Item" button
// at the top right of the shopping-item
// -------------------
	$(".add-item").on('click', function(event) {
		  event.preventDefault();
      var listItem = $('.item-input').val();
      if (listItem !== "") {
        itemCount++;
        document.getElementById("js-item-count").innerHTML = itemCount;
		    var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
        $('.shopping-list').prepend(itemHtml);
        $('.item-input').val("");
      } else {
        alert("Hi! Please input a thing");
      }
	});
// -------------------


// Step 2
// This code is executed when someone clicks the X box and removes an item.
// -------------------

	$(".shopping-list").on('click', '.item-remove', function(event) {
    itemCount--;
    document.getElementById("js-item-count").innerHTML = itemCount;
    $(event.currentTarget).parent().remove();
	});
// -------------------

// Step 3
// This code is executed when someone clicks the checkbox in the shopping-item section
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
    $(event.currentTarget).toggleClass('complete');
	});
// -------------------
  //Show initial itemCount
  document.getElementById("js-item-count").innerHTML = itemCount;

});
