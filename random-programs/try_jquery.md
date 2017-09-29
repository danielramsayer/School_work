# jQuery Notes
***

**Tools**<br>
<http://jqueryui.com/><br>
<http://www.jshint.com/>


## 1 What is jQuery?

**1.5 The Text Method**

Select the text value of the span. Give that a try.

```
<div class="homepage-wrapper">
<h2>Welcome to jQuery Travels - Traversing the DOM since 2006</h2>
<p>Fly to New York today for as little as <correct><span>$299.99</span></correct></p>
</div>

$("span").­text();
```

**1.6 Changing Text**

Change the price to $100.

```
<div class="homepage-wrapper">
  <h2>Welcome to jQuery Travels - Traversing the DOM since 2006</h2>
  <p>Fly to New York today for as little as <correct><span>$299.99</span></correct></p>
</div>

$("span").­text('$100')
```

**1.7 DOM Ready**

Make sure it runs after page loads.

```
$(document).ready(function() {
	$("span").text("$100");
});
```

**1.11 Modifying Multiple Elements**

```
$(".vacati­on h2").text("co­me");
```
***

## 2 Traversing the DOM

**2.3 Descendant Selector**

select all the list items within the #tours list using a descendant selector.


```
$("#tours li")
```

**2.4 Selecting Direct Children**

Let's use a direct child selector to only select the tour list items.

```
$("#tours > li")
```

**2.5 Selecting Multiple Elements**

Select all tours that are from asia and also select tours that are on sale. You'll need to use multiple selectors for this, with the classes for .asia and .sale.

```
$(".asia, .sale")
```

**2.6 The First Pseudo Selector**

Use the first pseudo selector to select the first tour destination in the list.

```
$("#tours li:fi­rst")
```

**2.7 The :even Selector**

Part of our design wishlist is to add row striping to our tour list, we could probably do this with just css, but doing it with javascript also sounds fun. First we need to select every other tour. Use the :even pseudo selector to select every other tour.

```
$("#tours > li:even")
```

**2.9 Using find()**

we learned how to select all vacations from America by using $("#vacations .america"). This works, but it could be faster, change the previous code to use traversal utilizing the find method instead.

```
$("#vacati­ons").find­(".america­")
```

**2.10 Using first()**

We've decided to add a 'feeling lucky' feature to our site where the first vacation is selected by default. Using traversal or filtering, select the first vacation li element from the list.

```
$("#vacati­ons li").first()
```

**2.11 Using last()**

you notice that someone else is selecting the last vacation with: $("#vacations li:last"). You look at this and you think, "Traversal would make this way faster!" You should act on those thoughts, refactor this code to find the last li within #vacations using traversal instead.

```
$("#vacati­ons li").­last()
```

**2.12 Using prev()**

the second to last vacation will always be on sale. Using traversal, find a way to select the second to last vacation. Remember, you can't use the continent class (europe, asia, america), since they could be anything.

```
$("#vacati­ons li").­last().pre­v();
```

**2.13 Traversing Up **

You need to add some effects to all featured vacations, but there is a problem, only titles have the featured class. You don't flinch, since you know how to traverse. Using traversal, select all tours who have a featured class on their title by getting the parent of featured titles.

```
$(".featur­ed").paren­t()
```

**2.14 Traversing Down**

You're looking back through some of your old code, from the time before you knew how to traverse and come across the selector that you used to select all the tours: $('#tours > li'). You immediately realize this can be done better, refactor this to use traversal.

```
$("#tours"­).children­('li')
```

***
## 3 Working with the DOM

### 3a Manipulating the DOM

```
1. .append(<element>)
2. .prepend(<element>)
3. .after(<element>)
4. .before(<element>)
5. remove()
```

```
1. .appendTo(<element>)
2. .prependTo(<element>)
3. .insertAfter(<element>)
4. .insertBefore(<element>)
```

**3.2 Creating a DOM Node**

When the page loads, we'll show a message to the traveler letting them know how to book this trip. To start out, let's create a span node with our phone number, 1-555-jquery-air and set it to the message variable.

```
var message = $('<span>1-555-jquery-air</span>');
```

**3.3 Adding to the DOM I**

Let's add the phone number immediately before the "Book Now" button. You can check out the HTML of the rendered page by clicking on the HTML tab below.

```
var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
$('.details').append(message);
```

**3.5 Removing From the DOM**

We should probably remove that "Book Now" button until we can implement it. Go ahead and remove it from the page.

```
var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
$(".usa").append(message);
$('.book').remove();
```

***

### 3b Acting on Interaction

#### Passing in a function

The ready method takes an event handler function as argument

```
$(document).ready(<event handler function>);
```
```
function() {
// executing the function runs the code
// between the braces
}
```
```
$(document).ready(function() {
// this function runs when the DOM is ready
});
```
#### Example

**Click Interation**

We will be moving the code we have been working on into a click handler. Let's start by wrapping our previous code in a click handler for the Book Now buttons using the on() method.

```
$('.book').on('click', function() {
	var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
	$(".usa").append(message);
	$('button').remove();
});
```

***

**3.10 Refactor Using Traversing**

**this** Refers to the <element> of the action. **$(this)** will activate the jQuery.

```
$(document).ready(function() {
	$('button').on('click', function() {
		var price = $('<p>From $399.99</p>');
		$(this).closest('.vacation').append(price);
		$(this).remove();
	});
});

```

**3.12 Relative Traversing I **

With multiple tours on the page, we're no longer appending the message in the right place. We really only want this message to be added after the button we click on. Instead of appending the message to the .usa list, add it after the button that was clicked.

```
$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).parent().after(message);
    $(this).remove();
  });
});
```


**3.13 Relative Traversing II **

The **button** is inside a **div** tag. We don't want the message to go inside the **div** tag though, we want it to go at the bottom of the **li** element. Let's change our code to use closest to find the parent li element and append the message to the bottom of it.


```
$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
     $(this).closest('.tour').append(message);
    $(this).remove();
  });
});
```


**3.15 Relative Traversing III **

Rather than clicking on the button to show the price, we've decided to allow travelers to click on the entire **li** element. Change the call to on to only target .tour elements. After that change, $(this) in the event handler will reference the clicked **li**. Let's update our code to still append the message at the bottom and use find to locate the button and remove it.

```
$(document).ready(function(){
  $('.tour').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    $(this).append(message);
    $(this).find('button').remove();
  });
});
```
***

### 3d Traversing and Filtering

#### Filter for the classes you want.

```
$('#filters').on('click', '.onsale-filter', function() {
	$('.highlighted').removeClass('highlighted');
	$('.vacation').filter('.onsale').addClass('highlighted');
});
```

**3.16 Fetching Data From the DOM I**

Let's add a bit more incentive to get people to book these tours by offering a discount if they book today. The discount we want to offer is stored in a data attribute on the .tour element. Traverse from the clicked button, $(this), to the closest .tour element, and save its discount in a variable called discount within the button click event handler.

```
$(document).ready(function(){
  $('button').on('click', function(){
    var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
    var discount = $(this).closest('.tour').data('discount');
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});
```

**3.17 Fetching Data From the DOM II**

We want to show this discount to the user in the message we show after the 'Book Now' button is clicked. Go ahead and change the content of message to Call 1-555-jquery-air for a $<discount>, and swap out <discount> for the discount price.

```
$(document).ready(function(){
  $('button').on('click', function(){
    var discount = $(this).closest('.tour').data('discount');
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + "</span>");
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});
```
**3.18 Refactoring**

We're using this code twice: $(this).closest('.tour') to find the tour element. Refactor your code so that the closest tour element is set to a variable named tour, and then use that variable instead. This way, we only query the DOM once for the tours, instead of twice.

```
We're using this code twice: $(this).closest('.tour') to find the tour element. Refactor your code so that the closest tour element is set to a variable named tour, and then use that variable instead. This way, we only query the DOM once for the tours, instead of twice.
```
**3.19 Better On Handlers**

There is a small problem with the way our on handler is being used. Currently, the handler is targeting all **button** elements on the screen. Refactor the on handler to only target **button** elements within a **.tour** by using the selector argument of the on method.

```
$(document).ready(function(){
  $('.tour').on('click', 'button', function(){
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $("<span>Call 1-555-jquery-air for a $" + discount + "</span>");
    tour.append(message);
    $(this).remove();
  });
});
```
**3.20 New Filter I**

Lets add some result filtering options to our page. We want to be able to click on a filter and highlight the corresponding tours with a .highlight class. Go ahead and get started by creating the click handler for the On Sale filter. Don't worry about the contents of the click handler function, we'll get it working in the next few challenges.

```
$(document).ready(function(){
  //Create the click handler here
    $('#filters').on('click', '.on-sale', function(){

    });
});
```

**3.21 New Filter II **

Lets make these filters work! In our event handler, find all .tour elements and filter for only those that have a class of .on-sale. Add a class of highlight to only these filtered tours on click.

```
$(document).ready(function(){
  $('#filters').on('click', '.on-sale', function(){
		$('.tour').filter('.on-sale').addClass('highlight');
  });
});
```

**3.22 New Filter III **

There is one thing left to do, we need to remove the highlight class immediately after clicking a filter so we are only highlighting the correct elements. Another filter has been added to make things interesting. In both of these filters, remove the highlighted class from anything that has it.

```
$(document).ready(function(){
  $('#filters').on('click', '.on-sale', function(){
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function(){
    $('.highlight').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  });
});
```
***
## 4 Listening to DOM Events


### 4a On DOM Load

**4.2 On Load I**

Once the DOM has loaded, alert the number of photos we have available by using the length property.

```
$(document).ready(function(){
    alert($('li').length);
});
```

**4.3 On Load II**

Once the DOM has loaded, let's add an event handler to watch for a click on button elements. Just to make sure this doesn't impact anything else on the page, only watch for clicks on buttons within the #tour element.

```
$(document).ready(function(){
   $('#tour').on('click', 'button' function(){
    alert($('li').length);
   });
});
```

**4.4 Slide Effect I**

In this new click event handler, show the .photos element by querying the DOM for it then calling slideDown. This will draw the eye to the photos by adding a little movement.

```
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideDown();
  });
});
```

**4.5 Slide Effect II**

The photos will now be shown, but we have no way of hiding them. Let's change this to use slideToggle so that the photos will be hidden if they click again.

```
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
});
```

### 4b Expanding on on()

#### Mouse Events

```
1. click
2. dblclick
3. focusin
4. focusout
5. mousedown
6. mouseup
7. mousemove
8. mouseout
9. mouseover
10. mouseleave
11. mouseenter - when mouse is over the element
```

#### Example HTML

<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
    <li>
      <img src="/assets/photos/paris1.jpg">
      <span>Arc de Triomphe</span>
    </li>
    <li>
      <img src="/assets/photos/paris2.jpg">
      <span>The Eiffel Tower</span>
    </li>
    <li>
      <img src="/assets/photos/paris3.jpg">
      <span>Notre Dame de Paris</span>
    </li>
  </ul>
</div>

**4.7 Mouseover I**

Our tour page is going great! Let's add a bit more behavior to the page though. Write an event handler that watches for mouseenter on any li elements within our .photos elements and runs an empty function. We'll implement the function later on.

```
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle().on('mouseenter', 'li', function() {
  });
});
```

**4.8 Mouseover II**

In our new mouseenter event handler, call slideToggle on the span tag within the picture description. You'll need to traverse down from the current element, the li, and find the span tag.

```
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  });
});
```

**4.9 Mouseleave**

When the mouse leaves the li element, we'll want to hide the description of the photo as well. Write another event handler that targets the same elements, but calls calls slideToggle only on the mouseleave event.

```
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  }).on('mouseleave', 'li', function() {
    $(this).find('span').slideToggle();
  });
});

```
**4.10 Named Functions**

It looks like both our event handler on .photos li elements are exactly the same! Let's go ahead and refactor these into a new function named showPhotos and change our event handlers to reference that instead.

```
function showPhotos() {
  $(this).find('span').slideToggle();
}

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li', showPhotos)
});
```

### 4c Keyboard Events

#### Keyboard Events

```
1. keypress
2. keydown
3. keyup
```
#### Form Events

```
1. blur
2. select
3. change
4. focus
5. submit
```

#### Convert String to Ingeter

```
var quantity = +$(this).val();
```

#### Example HTML
<div id="tour" class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
    <label for="nights">Number of Nights</label>
  </p>
  <p>
    <input type="number" id="nights" value="7">
  </p>
</div>


**4.12 Keyup Event**

```
$(document).ready(function() {
 	$('#nights').on('keyup', function(){
  });
});
```

**4.13 Keyup Event Handler I**

Within our event handler, update the number of nights in the #nights-count element to whatever the traveler entered in the #nights form field.

```
$(document).ready(function() {
  $('#nights').on('keyup', function() {
     $('#nights-count').text($(this).val());
  });
});
```
**4.15 Keyup Event Handler II**

Set the content of the #total element to the number the traveler has entered into the form field multiplied by the daily price.

```
$(document).ready(function() {
  $('#nights').on("keyup", function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest('.tour').data('daily-price');
    $('#total').text(nights * dailyPrice);
    $('#nights-count').text($(this).val());
  });
});
```

**4.16 Another Event Handler**

Let's write another event handler for the form field that will get run when the focus event is triggered. When this occurs, set the number of nights to 7.

```
$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest('.tour').data('daily-price');
    $('#total').text(nights * dailyPrice);
    $('#nights-count').text($(this).val());
  }).on('focus', function(){
    $(this).val('7');
  });
});
```

### 4d Link Layover

#### Fade Events

```
1. fadeIn()
2. fadeOut()
3. fadeToggle()
```

#### Event Handler

```
1. event.stopPropagation()
2. event.preventDefault()
```

#### Example HTML

<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
    <li class="tour usa" data-discount="199">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
        <li>
          <img src="/assets/photos/paris2.jpg">
          <span>The Eiffel Tower</span>
        </li>
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour france" data-discount="99">
      <h2>Paris, France</h2>
      <span class="details">$1,499 for 5 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
        <li>
          <img src="/assets/photos/paris2.jpg">
          <span>The Eiffel Tower</span>
        </li>
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour uk" data-discount="149">
      <h2>London, UK</h2>
      <span class="details">$2,199 for 5 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
        <li>
          <img src="/assets/photos/paris2.jpg">
          <span>The Eiffel Tower</span>
        </li>
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
  </ul>
</div>

**4.18 Link Events I**

Write an event handler that will target all links with a class of .see-photos on click.

```
$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
  	event.preventDefault();
  });
});
```

**4.19 Link Events II **

```
$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.tour').find('.photos').slideToggle();
  });
});
```

**4.20 Event Parameter I**

```
$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.stopPropagation();
    $(this).closest('.tour').find('.photos').slideToggle();
  });
  $('.tour').on('click', function() {
    alert('This should not be called');
  });
});
```

**4.21 Event Parameter II **

```
$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.tour').find('.photos').slideToggle();
  });
  $('.tour').on('click', function() {
    alert('This should not be called');
  });
});
```

***
## 5 Styling

#### CSS Objects

```
1. .css(<attr>, <value>)
2. .css(<attr>)
3. .css(<object>)
```
#### CSS Display

```
1. show()
2. hide()
```

#### jQuery Methods

```
1. addClass(<class>)
2. removeClass(<class>)
3. toggleClass(<class>)
```


#### Java Object

```
$(this).css({'background-color': '#252b30',
			  'border-color': '1px solid #967'});
```

### 5a Taming CSS

#### Example HTML
<div id="all-tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="tour usa" style="background-color: rgb(37, 43, 48);">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <span class="per-night"><span class="price">$275</span>/day</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris3.jpg">
          <span>Notre Dame de Paris</span>
        </li>
      </ul>
    </li>
    <li class="tour france" data-discount="99" style="background-color: rgb(37, 43, 48);">
      <h2>Paris, France</h2>
      <span class="details">$1,499 for 5 nights</span>
      <span class="per-night"><span class="price">$300</span>/day</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/newyork1.jpg">
          <span>Brooklyn Bridge</span>
        </li>
      </ul>
    </li>
    <li class="tour uk" data-discount="149" style="background-color: rgb(37, 43, 48); font-weight: bold;">
      <h2>London, UK</h2>
      <span class="details">$2,199 for 5 nights</span>
      <span class="per-night"><span class="price">$440</span>/day</span>
      <button class="book">Book Now</button>
      <ul class="photos">
        <li>
          <img src="/assets/photos/london.jpg">
          <span>Tower of London</span>
        </li>
      </ul>
    </li>
  </ul>
</div>

**5.3 CSS I**
Let's try to make this page stand out a bit more. For starters, let's add an event handler that will set the background-color to #252b30 using the css method whenever the mouseenter event is triggered.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).css('background-color', '#252b30')
  });
});
```

**5.4 CSS II**

Let's set the font-weight to bold as well by passing in a JavaScript object to the css method.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).css({'background-color': '#252b30',
                 'font-weight': 'bold'});
  });
});
```

**5.5 Show Photo**

Let's see what the tour page would look like if we showed the photos on mouseenter as well. Try using the show method here to make it visible.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).css({'background-color': '#252b30', 'font-weight': 'bold'});
    $('.photos').show();
  });
});
```

**5.6 Refactoring CSS**

We've extracted out our styles into a new CSS class of highlighted. Go ahead and add this class when the tour is moused over. Also, add another event handler for when the mouse leaves the .tour element to remove this class by watching for mouseleave.


```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlighted');
  }).on('mouseleave', function(){
      $(this).removeClass('highlighted');
  });
});
```

### 5B Animation

#### jQuery Methods
```
1. .animate(<object>, 400)
2. .hasClass(<class>)
```

**5.8 Animate I**

Let's continue seeing what we can do to add more flavor to our tours page. When the mouse first goes over the tour element, we show the price per night, .per-night, but it doesn't stand out too much. Let's animate the opacity to be 1 in our same event handler. This allows us to fade the element in.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlighted');
    $('.per-night').animate({'opacity': '1'});
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlighted');
  });
});
```
**5.9 Animate II**

The price per night will now fade, but let's make it move a little as well. We can't use slideDown for this with our animate call, though. When the mouseenter event is triggered, animate the top property to -14px in order to move it up a bit.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlighted');
    $(this).find('.per-night').animate({'opacity': '1', 'top': '-14px'});
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlighted');
  });
});
```

**5.10 Animation Speed**

This animation lacks the pop we're looking for. Let's speed it up to run in 200ms using the fast shorthand.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlighted');
    $(this).find('.per-night').animate({'top': '-14px','opacity': '1'}, 'fast');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlighted');
  });
});
```

**5.11 Animate III**

Update our mouseleave handler to remove the price per night with a little style. Animate the price to a top of 0 and an opacity of 0 when the mouse leaves the .tour element, and make it happen with a fast duration.

```
$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlighted');
    $(this).find('.per-night').animate({'top': '-14px','opacity': '1'}, 'fast');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlighted');
    $('.per-night').animate({'top': '0','opacity': '0'}, 'fast');
  });
});
```
