"use strict";

// catch any exceptions when calling the tested functions
function runTest(f, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
  try {
    return f(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
  } catch (e) {
    return e;
  }
}


QUnit.module("ID");
QUnit.test("Change the id method in index.js to return your student ID.",
  function (assert) {
    assert.notEqual(
      id(),
      "UP000000",
      "The ID function should return your student ID."
    );
  }
);

QUnit.module("Multiples");
QUnit.test(

  "The list of whole numbers that are less than 10 which are also multiples of 3 or 5 is 3, 5, 6, 9.  Their sum is 23.  Create a function `multiples` that can calculate this sum when passed a single parameter, e.g. '10'.  The function should also work for other limits, e.g. if passed 1000 it should calculate that the sum of all multiples of 3 and 5 is 233168.",

  function (assert) {

    assert.equal(
      typeof multiples,
      "function",
      "Create a `multiples` function."
    );

    assert.equal(
      multiples.length,
      1,
      "Multiples should accept 1 parameter."
    );

    assert.equal(
      runTest(multiples, 10),
      23,
      "Adding all multiples of 3 and 5 that are less than or equal to 10 should return 23."
    );

    assert.equal(
      runTest(multiples, 100),
      2318,
      "Adding all multiples of 3 and 5 that are less than or equal to 100 should return 2318."
    );


    assert.equal(
      runTest(multiples, 1000),
      233168,
      "Adding all multiples of 3 and 5 that are less than or equal to 1000 should return 233168."
    );

    assert.equal(
      runTest(multiples, 0),
      0,
      "Adding all multiples of 3 and 5 that are less than or equal to 0 should return 0."
    );


  }
);


QUnit.module("Better Multiples");
QUnit.test(

  "Create a `betterMultiples` function that works along the same principles as the multiples function.  It should accept two parameters, the first being the limit and the second being an array of multiples that will be included in the sum.  e.g. multiples of 3 and 5 that are less than 10 would be checked using betterMultiples(10,[3,5]). If no multiples are defined, a default of three and five should be used.",

  function (assert) {

    assert.equal(
      typeof betterMultiples,
      "function",
      "Create a `betterMultiples` function."
    );

    assert.equal(
      runTest(betterMultiples, 10, [3, 5]),
      23,
      "Adding all multiples of 3 and 5 that are less than or equal to 10 should return 23."
    );

    assert.equal(
      runTest(betterMultiples, 100, [3, 5]),
      2318,
      "Adding all multiples of 3 and 5 that are less than or equal to 100 should return 2318."
    );

    assert.equal(
      runTest(betterMultiples, 1000, [17, 49]),
      38544,
      "Adding all multiples of 17 and 49 that are less than or equal to 1000 should return 233168."
    );

    assert.equal(
      runTest(betterMultiples, 0, [3, 5]),
      0,
      "Adding all multiples of 3 and 5 that are less than or equal to 0 should return 0."
    );

    assert.equal(
      runTest(betterMultiples, 10, [3, 5, 7]),
      30,
      "Adding all multiples of 3, 5 and 7 that are less than or equal to 10 should return 30."
    );

    assert.equal(
      runTest(betterMultiples, 100),
      2318,
      "If no multiples are defined, a default of three and five should be used."
    );
  }
);


QUnit.module("Summing Characters");
QUnit.test(

  "Create a word scoring function `sumOfCharacters` that accepts a string and returns the sum of the values of its UTF-16 character codes.  e.g. 'A'=65, 'AB'=131 (i.e. 65+66), etc.",
  function (assert) {
    assert.equal(
      typeof sumOfCharacters,
      "function",
      "Create a `sumOfCharacters` function."
    );

    assert.equal(runTest(sumOfCharacters, ""), 0, "The sum of an empty string is 0.");
    assert.equal(runTest(sumOfCharacters, "A"), 65, "A=65");
    assert.equal(runTest(sumOfCharacters, "AA"), 130, "AA=65+65=130");
    assert.equal(runTest(sumOfCharacters, "AB"), 131, "AA=65+66=131");
    assert.equal(runTest(sumOfCharacters, "ABC"), 198, "AA=65+66+67=193");
    assert.equal(runTest(sumOfCharacters, "PORT.AC.UK"), 709, "The sum for PORT.AC.UK is 709");
    assert.equal(runTest(sumOfCharacters, "port.ac.uk"), 965, "The sum for port.ac.uk is 965, a different score because they are different characters:-)");

  });

QUnit.module("Summing Sentence Words");

QUnit.test(

  "Create a function `sentenceWordSums` that takes one parameter which is a sentence (i.e. words separated by spaces),  The function must return an array containing the sum of the characters for each word.",

  function (assert) {

    assert.equal(
      typeof sentenceWordSums,
      "function",
      "Create a `sentenceWordSums` function."
    );

    assert.deepEqual(
      runTest(sentenceWordSums, ""), [],
      "No words will result in an empty array of results."
    );

    assert.deepEqual(
      runTest(sentenceWordSums, "AAA"), [195],
      "A single word of AAA results in a single score of 195."
    );

    assert.deepEqual(
      runTest(sentenceWordSums, "AAA AAA AAA"), [195, 195, 195],
      "A three word sentence of AAA AAA AAA results in an array of three scores, all of which are 195."
    );

    assert.deepEqual(
      runTest(sentenceWordSums, "The cat sat on the mat."), [289, 312, 328, 221, 321, 368],
      "A simple six word sentence."
    );

    assert.deepEqual(
      runTest(sentenceWordSums, "What  about  multiple     spaces?"), [404, 539, 876, 702],
      "Extra white space should not result in extra scores being added to the results."
    );

  }
);


QUnit.module("Summing Sentences");

QUnit.test(

  "Create a function `sumOfSentence` that takes two parameters, the first is a sentence (i.e. space separated words), the second is a number that represents a minimum length. The function must return a single number that is the  sum of the values of the sentences' UTF-16 character codes.  When summing the characters, words whose length is less than the second parameter should be ignored.",

  function (assert) {

    assert.equal(
      typeof sumOfSentence,
      "function",
      "Create a `sumOfSentence` function."
    );

    assert.equal(
      runTest(sumOfSentence, "", 0),
      0,
      "No words and no length will result in a zero sum."
    );

    assert.equal(
      runTest(sumOfSentence, "AAA", 3),
      195,
      "This single word of AAA is 3 characters, which matches the  minimum length, so the result should be 195."
    );

    assert.equal(
      runTest(sumOfSentence, "AAA", 4),
      0,
      "This single word of AAA is shorter than the provided minimum length of 4, so AAA should be ignored, thus the result is 0."
    );


    assert.equal(
      runTest(sumOfSentence, "A AA AAA AAAA", 3),
      455,
      "A four word sentence containing two words that should be ignored and two that should be counted.  This there are 7A characters to include and the result should be 455."
    );

    assert.equal(
      runTest(sumOfSentence, "The cat sat on the mat.", 5),
      0,
      "A simple six word sentence with minimum length 5, so no words should be counted."
    );

    assert.equal(
      runTest(sumOfSentence, "The cat sat on the mat.", 4),
      368,
      "A simple six word sentence with minimum length 4, so only `mat.` should be counted."
    );

    assert.equal(
      runTest(sumOfSentence, "The cat sat on the mat.", 3),
      1618,
      "A simple six word sentence with minimum length 3, so everything but `on` should be counted."
    );

    assert.equal(
      runTest(sumOfSentence, "The cat sat on the mat.", 2),
      1839,
      "A simple six word sentence with minimum length 2, so everything should be counted."
    );

    assert.equal(
      runTest(sumOfSentence, "Hold the newsreader's nose squarely, waiter, or friendly milk will countermand my trousers.", 10),
      2410,
      "A longer sentence with a higher minimum - only the words `newsreader's` and `countermand` are over 10 characters.  They are worth 1226 + 1184 = 2410."
    );


    assert.equal(
      runTest(sumOfSentence, "What  about  multiple     spaces?"),
      2521,
      "Extra white space should not result in extra scores being added to the results."
    );

  }
);


QUnit.module("Palindrome");

QUnit.test(

  "Create a function `palindrome` that accepts two parameters: a string parameter, and a boolean. The function returns true if the string provided is a palindrome. If the second parameter is true, whitespace must be ignored by the test, so e.g. both 'a ha' and 'abb a' are evaluated as palindromes.",

  function (assert) {

    assert.equal(
      typeof palindrome,
      "function",
      "Create a `palindrome` function."
    );

    assert.equal(
      runTest(palindrome, ""),
      false,
      "An empty string cannot be a palindrome for there is no forwards nor backwards."
    );

    assert.equal(
      runTest(palindrome, "A"),
      true,
      "Single characters are palindromes"
    );

    assert.equal(
      runTest(palindrome, "ABBA"),
      true,
      "Palindromes may have an even number of characters (e.g. 4)."
    );

    assert.equal(
      runTest(palindrome, "ABB A", true),
      true,
      "Palindromes may have an even number of characters (e.g. 4) and spaces if the second parameter is true."
    );

    assert.equal(
      runTest(palindrome, "EYE"),
      true,
      "Palindromes may have an odd number of characters (e.g. 3)."
    );

    assert.equal(
      runTest(palindrome, "egad a base tone denotes a bad age"),
      false,
      "If a sentence has the letters mirrored but has different spaces, then it's not a pure palindrome."
    );

    assert.equal(
      runTest(palindrome, "egadabasetonedenotesabadage"),
      true,
      "... and now we test the same characters without the white space present."
    );

    assert.equal(
      runTest(palindrome, "egad a base tone denotes a bad age", true),
      true,
      "Now let's test the same sentence as before, but this time we ignore the whitespace... its characters *are* indeed palindromic."
    );

    assert.equal(
      runTest(palindrome, "this is not a palindrome"),
      false,
      "Not all sentences are palindromes, obviously."
    );


    assert.equal(
      runTest(palindrome, "✔️🐖🤢 🚗🚗🎣 🎣🚗🚗 🤢🐖✔️"),
      false,
      "The force is strong with this palindrome.  Yes, emoji can be palindromes too."
    );
  }
);


QUnit.module("Emojify");

QUnit.test(

  "Create a function called `emojify` that accepts one parameter, a string, and converts special character sequences to emoji before returning the improved string. The special sequences are '(TM)', '<3', and ':-)', and they get converted into ™️, ❤️, 😀, respectively.",

  function (assert) {
    assert.equal(typeof emojify, "function", "Create a `emojify` function.");
    assert.equal(runTest(emojify, "no change"), "no change", "A string that does not change.");
    assert.equal(runTest(emojify, "(TM)"), "™️", "Replace (TM) with ™️.");
    assert.equal(runTest(emojify, "<3"), "❤️", "Replace <3 with ❤️.");
    assert.equal(runTest(emojify, ":-)"), "😀", "Replace :-) with 😀.");
    assert.equal(runTest(emojify, "WebScript(TM)"), "WebScript™️", "™️ at the end of a word.");
    assert.equal(runTest(emojify, "I <3 WebScript"), "I ❤️ WebScript", "❤️ in a sentence.");
    assert.equal(runTest(emojify, ":-):-):-)<3<3<3"), "😀😀😀❤️❤️❤️", "Yay! 😀😀😀❤️❤️❤️ Even repeat emoji are replaced!");
  }

);


QUnit.module("Page Emojify");

QUnit.test(

  "Create a function called `pageEmojify` that accepts one parameter which is a selector, and having selected that element, uses the emojify function in order to replace any shortcuts with their respective emoji.",

  function (assert) {
    assert.equal(typeof pageEmojify, "function", "Create a `pageEmojify` function.");

    pageEmojify("#e1");
    assert.equal(window.e1.textContent, "😀", "Smiley works.");

    pageEmojify("#e2");
    assert.equal(window.e2.textContent, "™️", "™️ works.");

    pageEmojify("#e3");
    assert.equal(window.e3.textContent, "WebScript™️ 😀", "Combinations work.");

    pageEmojify("#e4");
    assert.equal(window.e4.textContent, "Do you ❤️ me now?", "Heart works!");

    pageEmojify("#e5");
    assert.equal(window.e5.textContent, "😀😀😀❤️❤️❤️", "All working!");

    window.emoji.classList.add("done");

  }
);


QUnit.module("TreeEmojify");
QUnit.test(

  "Create a function called `treeEmojify` that accepts one parameter which is a selector.  All child elements and all text within the selected element should be modified such that all text is transformed using the emojify function.  The function must only change text inside the element, and inside child elements.  The element structure of the document must not change.",

  function (assert) {
    assert.equal(typeof treeEmojify, "function", "Create a `treeEmojify` function.");

    treeEmojify("#emojiAdvanced");

    assert.equal(window.ea1 && window.ea1.textContent, "😀", "Smiley works.");
    assert.equal(window.ea2 && window.ea2.textContent, "™️", "™️ works.");
    assert.equal(window.ea3 && window.ea3.textContent, "WebScript™️ :-)", "Spans are honoured.");
    assert.equal(window.ea4 && window.ea4.textContent, "Do you ❤️ me now?", "Heart works!");
    assert.equal(window.ea5 && window.ea5.textContent, "😀😀😀❤️❤️❤️", "All working!");

    window.emojiAdvanced.classList.add("done");
  }

);


QUnit.module("Spanner");
let spannerDescription = `
  Create a function \`spanner\` that accepts two parameters,
  a selector and a prefix (string).

  The function should put each individual word within the text
  content of the selected element inside a new 'span' element.

  Each new 'span' element must be given a unique ID, formed by
  combining the prefix and a sequential integer:
    (e.g. para0, para1...)
`;

QUnit.test(spannerDescription,

  function (assert) {
    assert.equal(typeof spanner, "function", "Create a `spanner` function.");

    assert.equal(
      window.spanner1.innerHTML,
      "Each word should be wrapped in a span element when this test passes.",
      "Before we begin there are no span elements in the HTML."
    );

    spanner("#spanner1", "para");
    assert.equal(
      window.para0.textContent,
      "Each",
      "After: each word has a unique ID (0=each)."
    );
    assert.equal(
      window.para9.textContent,
      "when",
      "After: each word has a unique ID (9=when)."
    );
    assert.equal(
      window.para12.textContent,
      "passes.",
      "After: each word has a unique ID (12=passes.)."
    );


    /* NB: this one *might* take a while to get
     * working perfectly... so maybe do it *last*
     * when all the other tests are passing. :-)
     */
    spanner("#spanner2", "nested");
    assert.ok(window.nested3, "nested3 must exist after test.")
    assert.equal(
      window.nested3.textContent,
      "handle",
      "After: each word has a unique ID (3=handle)."
    );

    assert.ok(window.nested4, "nested4 must exist after test.")
    assert.equal(
      window.nested4.textContent,
      "nested",
      "After: each word has a unique ID (4=nested)."
    );

    assert.ok(window.nested5, "nested5 must exist after test.")
    assert.equal(
      window.nested5.textContent,
      "child",
      "After: each word has a unique ID (5=child)."
    );

    assert.ok(window.nested6, "nested6 must exist after test.")
    assert.equal(
      window.nested6.textContent,
      "elements?",
      "After: each word has a unique ID (6=elements.)."
    );

    window.spanners.classList.add("done");

  }
);


QUnit.module("Click Attacher");
let clickAttacherDescription = `
  Create a function called \`clickAttacher\` that accepts
  two parameters.

  The first parameter is a selector and the second
  is a class name.

  The function should add an event listener to all the
  selected elements identified by the selector.

  Create an event handler function that is invoked
  upon a 'click' event.  It should toggle the provided
  classname on the clicked element.
`;

QUnit.test(clickAttacherDescription,

  function (assert) {
    assert.equal(typeof clickAttacher, "function", "Create a `clickAttacher` function.");

    assert.equal(
      window.clickables.firstElementChild.classList.contains("red"),
      false,
      "Before we begin the FIRST elem has no `red` class."
    );

    assert.equal(
      window.clickables.firstElementChild.classList.contains("red"),
      false,
      "Before we begin the LAST elem has no `red` class."
    );

    clickAttacher("#clickables *", "red");

    assert.equal(
      window.clickables.firstElementChild.classList.contains("red"),
      false,
      "After attaching the first elem STILL has no `red` class."
    );

    // pretend to be a user clicking the first element.
    window.clickables.firstElementChild.dispatchEvent(new MouseEvent("click"));
    assert.equal(
      window.clickables.firstElementChild.classList.contains("red"),
      true,
      "After a click the first elem has the `red` class."
    );

    window.clickables.firstElementChild.dispatchEvent(new MouseEvent("click"));
    assert.equal(
      window.clickables.firstElementChild.classList.contains("red"),
      false,
      "After a second click the first elem must have no `red` class."
    );

    clickAttacher("span", "uop");
    if (window.nested6) {
      window.nested6.dispatchEvent(new MouseEvent("click"));
      assert.equal(
        window.nested6.classList.contains("uop"),
        true,
        "When this test works, every span on the page is clickable."
      );
    }

    window.clickables.classList.add("done");
  }
);



QUnit.module("Linked Drawing");
let drawDescription = `
  Create a function 'linkedDrawing' that accepts two parameters, a canvas and a URL.

  The function should fetch the url, which will respond with a JSON object.  The object structure contains two pairs of x,y coordinates a colour and and a url e.g. {"x1":0, "y1":0, "x2":100, "y2":100, "col"; "red, "url":"http://example.org/next"}.

  Your function should draw a line from x0,y0 to x1,y1 in the specified colour, then use the URL to retrieve the next object, draw it, and so on until you retrieve a URL and it results in a 404.

  Your function should return an array of all the URLs that were fetched, the first being the one passed as a parameter, and the last being the one that returned 404.

  We will visually compare your picture against what we expect to see.
`;
QUnit.test(
  drawDescription,

  async function (assert) {
    assert.equal(typeof linkedDrawing, "function", "Create a `linkedDrawing` function.");

    const done = assert.async(1);

    try {
      const result = await linkedDrawing(linkedDrawingCanvas, "http://jacek.soc.port.ac.uk/tmp/ws/alpha.json");

      assert.equal(
        result.length,
        5,
        "Five URLs make up the picture."
      );

      assert.equal(
        result[4],
        "http://jacek.soc.port.ac.uk/tmp/ws/boss_level.json",
        "The last URL is the one that 404s."
      );

      // assert.equal(
      //   window.linkedDrawingCanvas.toDataURL(),
      //   window.linkedDrawingForComparison.src,
      //   "Your drawing should be an exact match for the example."
      // )

      window.linkedDrawings.classList.add("done");
    }
    finally {
      done();
    }


  }

);
